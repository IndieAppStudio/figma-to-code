import * as ReactDOM from "react-dom";
import "./ui.css";
import {observable, action, makeObservable, when, makeAutoObservable} from "mobx";
import { observer } from "mobx-react";
import { SafeComponent } from "./classes/safe-component";
import { CheckListContent } from "./constants/utils";
import { Button, Box, CircularProgress, FormControlLabel, Switch ,Tab, Tabs, ThemeProvider, Tooltip } from "@mui/material";
import { settings } from "./constants/settings";
import { useState, Component } from "react";
import {theme as themeVars}from "./constants/theme";
import { Wand } from "./icons/wand";
import { HelpOutline } from "@mui/icons-material";
import { Loading } from "./components/loading";
import {en, ru} from "./localize/i18n";
import { deepClone, fastClone } from "./functions/fast-clone";
import traverse from "traverse";
import { BuilderElement } from "@builder.io/sdk";
import pako from "pako";
import * as amplitude from "./functions/track";
import {v4 as uuid} from "uuid";
import { fileTypeFromBuffer } from "file-type";
import { transformWebpToPNG } from "./functions/encode-images";
import { flip } from "lodash";
import { traverseLayers } from "./functions/traverse-layers";
import { arrayBufferToBase64 } from "../lib/functions/buffer-to-base64";




interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    style?: React.CSSProperties;
}

export interface ClientStorage {
    imageUrlsByHash?: { [hash: string]: string | null };
    userId?: string;
    openAiKey?: string;
  }

function TabPanel(props: TabPanelProps) {
const { children, value, index } = props;

return value === index ? (
    <div
    style={{
        flexGrow: 1,
        ...props.style,
    }}
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    >
    {value === index && children}
    </div>
) : null;
}

type Node = TextNode | RectangleNode;

export function getImageFills(layer: Node) {
    const images =
      Array.isArray(layer.fills) &&
      layer.fills
        .filter(
          (item) =>
            item.type === "IMAGE" && item.visible !== false && item.opacity !== 0
        )
        .sort((a, b) => b.opacity - a.opacity);
    return images;
}

const BASE64_MARKER = ";base64,";
function convertDataURIToBinary(dataURI: string) {
  const base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  const base64 = dataURI.substring(base64Index);
  const raw = window.atob(base64);
  const rawLength = raw.length;
  const array = new Uint8Array(new ArrayBuffer(rawLength));

  for (let i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
}

type Writeable<T> = { -readonly [P in keyof T]: T[P] };


export async function processImages(layer: Node) {
    const images = getImageFills(layer);
  
    const convertToSvg = (value: string) => {
      (layer as any).type = "SVG";
      (layer as any).svg = value;
      if (typeof layer.fills !== "symbol") {
        layer.fills = layer.fills.filter((item) => item.type !== "IMAGE");
      }
    };
    if (!images) {
      return Promise.resolve([]);
    }
  
    type AugmentedImagePaint = Writeable<ImagePaint> & {
      intArr?: Uint8Array;
      url?: string;
    };
  
    return Promise.all(
      images.map(async (image: AugmentedImagePaint) => {
        try {
          if (!image || !image.url) {
            return;
          }
  
          const url = image.url;
          if (url.startsWith("data:")) {
            const type = url.split(/[:,;]/)[1];
            if (type.includes("svg")) {
              const svgValue = decodeURIComponent(url.split(",")[1]);
              convertToSvg(svgValue);
              return Promise.resolve();
            } else {
              if (url.includes(BASE64_MARKER)) {
                image.intArr = convertDataURIToBinary(url);
                delete image.url;
              } else {
                console.info("Found data url that could not be converted", url);
              }
              return;
            }
          }
  
          const isSvg = url.endsWith(".svg");
  
          // Proxy returned content through Builder so we can access cross origin for
          // pulling in photos, etc
          const res = await fetch(
            `${apiHost}/api/v1/proxy-api?url=${encodeURIComponent(url)}`
          );
  
          const contentType = res.headers.get("content-type");
          if (isSvg || contentType?.includes("svg")) {
            const text = await res.text();
            convertToSvg(text);
          } else {
            const arrayBuffer = await res.arrayBuffer();
            const type = await fileTypeFromBuffer(arrayBuffer);
            if (type && (type.ext.includes("svg") || type.mime.includes("svg"))) {
              convertToSvg(await res.text());
              return;
            } else {
              const intArr = new Uint8Array(arrayBuffer);
              delete image.url;
  
              if (
                type &&
                (type.ext.includes("webp") || type.mime.includes("image/webp"))
              ) {
                const pngArr = await transformWebpToPNG(intArr);
                image.intArr = pngArr;
              } else {
                image.intArr = intArr;
              }
            }
          }
        } catch (err) {
          console.warn("Could not fetch image", layer, err);
        }
      })
    );
}



// export const apiHost = useDev ? "http://localhost:4000" : "https://builder.io";
export const apiHost = "https://builder.io";


const selectionToBuilder = async (
    selection: SceneNode[]
  ): Promise<BuilderElement[]> => {
    const useGzip = true;
    // const { files } = await generator.generateComponent(uidl)
  
  
    selection = deepClone(selection);
  
    traverse(selection).forEach(function (item) {
      if (this.key === "intArr") {
        this.delete();
      }
    });
  
    const res = await fetch(`${apiHost}/api/v1/figma-to-builder`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(
        useGzip
          ? {
              compressedNodes: pako.deflate(JSON.stringify(selection), {
                to: "string",
              }),
            }
          : {
              nodes: selection,
            }
      ),
    }).then((res) => {
      if (!res.ok) {
        console.error("Figma-to-builder request failed", res);
        amplitude.track("export error", {
          message: "Figma-to-builder request failed",
        });
        throw new Error("Figma-to-builder request failed");
      }
      return res.json();
    });
  
    // console.log(`Code Gen: ${files[0].content}`);
    console.log(`API Response: ${JSON.stringify(res)}`)
    return res.blocks;
};

@observer
class App extends SafeComponent{

    // Need to fix: props' implicitly has an 'any' type.
    constructor(props: any) {
        super(props);
        makeAutoObservable(this)
    }

    @observable loading = false;
    @observable loadingCmsData = false;

    @observable lipsum = false;
    @observable loadingGenerate = false;
    @observable clientStorage: ClientStorage | null = null;
    @observable errorMessage = "";
    @observable selection: (BaseNode & {data?: { [key: string]: any}})[] = [];
    @observable.ref selectionWithImages: 
        ( BaseNode & {
            data?: {
                [key: string]:any
            }
        })[] 
        | null = null;

    @observable.ref previewData: any;
    @observable currentLanguage = "en";
    @observable displayFiddleUrl = "";
    @observable showImportInvalidError = false;
    @observable showRequestFailedError = false;
    @observable showDevModeOption: boolean = true;
    @observable inDevMode: boolean = false;
    @observable isValidImport: null | boolean = null;
    @observable generatingCode = false;
    @observable commandKeyDown = false;
    @observable urlValue = "https://www.builder.io";
    @observable initialized = false;
    @observable shiftKeyDown = false;
    @observable altKeyDown = false;
    @observable online = navigator.onLine;

    @observable ctrlKeyDown = false;
        @observable tabIndex = 0;
    @observable figmaCheckList: {
        results?: CheckListContent[];
    } = {};
    @observable loaderContent: CheckListContent[] = [
        {
          id: "1a",
          data: {
            type: "during",
            textContent:
              "Getting everything ready... This can take a few minutes to complete.",
          },
        },
    ];
   urlInputRef: HTMLInputElement | null = null;


    @action
    updateKeyPositions(event: KeyboardEvent) {
    this.commandKeyDown = event.metaKey;
    this.altKeyDown = event.altKey;
    this.shiftKeyDown = event.shiftKey;
    this.ctrlKeyDown = event.ctrlKey;
    }

    componentDidMount() {
        console.log("Component mounted");
    window.addEventListener("message", (e) => {
        const { data: rawData } = e as MessageEvent;

        this.initialized = true;

        const data = rawData.pluginMessage;

        
        if (!data) {
        return;
        }
        if (data.type === "selectionChange") {
        this.selection = data.elements;
        }
        if (data.type === "selectionWithImages") {
        this.selectionWithImages = data.elements;
        }
        if (data.type === "canGetCode") {
        this.isValidImport = data.value;
        }
        if (data.type === "doneLoading") {
        this.loading = false;
        }
        if (data.type === "storage") {
        this.clientStorage = data.data;
        }
    });

    this.loadingCmsData = true;
    fetch(
        "https://cdn.builder.io/api/v3/content/figma-modal-items?apiKey=YJIGb4i01jvw0SRdL5Bt"
    )
        .then((response) => {
        if (!response.ok) {
            console.error("Cannot fetch figma checklist", response);
            return;
        }
        return response.json();
        })
        .then((data) => {
        this.figmaCheckList = data;
        if (data?.results) {
            this.loaderContent = this.loaderContent.concat(
            data.results.filter(
                (item: CheckListContent) => item.data.type === "during"
            )
            );
            this.loaderContent = this.loaderContent.slice().reverse();
        }
        this.loadingCmsData = false;
        });

    parent.postMessage(
        {
        pluginMessage: {
            type: "getStorage",
        },
        },
        "*"
    );
    parent.postMessage(
        {
        pluginMessage: {
            type: "init",
        },
        },
        "*"
    );

    // TODO: destroy on component unmount
    this.safeReaction(
        () => this.urlValue,
        () => (this.errorMessage = "")
    );
    this.selectAllUrlInputText();

    this.safeListenToEvent(window, "offline", () => (this.online = false));
    this.safeListenToEvent(window, "keydown", (e) => {
        this.updateKeyPositions(e as KeyboardEvent);
    });
    this.safeListenToEvent(window, "keyup", (e) => {
        this.updateKeyPositions(e as KeyboardEvent);
    });
    this.safeListenToEvent(window, "online", () => (this.online = true));

    this.safeReaction(
        () => this.clientStorage && fastClone(this.clientStorage),
        () => {
        if (this.clientStorage) {
            this.updateStorage();
        } else if (this.clientStorage === undefined) {
            this.clientStorage = { userId: uuid() };
        }
        }
    );

    this.safeReaction(
        () => this.clientStorage?.userId,
        (userId) => {
        if (userId) {
            amplitude.setUserId(userId);
            amplitude.track("figma plugin started");
        }
        }
    );
    }

    switchTab = (event: any, newValue: number) => {
        this.tabIndex = newValue;
    };

    @action
    async getCode(useFiddle = false) {
      this.displayFiddleUrl = "";
      this.showImportInvalidError = false;
      this.showRequestFailedError = false;
        
      if(!this.lipsum){
        this.selectionWithImages = null;
        parent.postMessage(
          {
            pluginMessage: {
              type: "getSelectionWithImages",
            },
          },
          "*"
        );
        await when(() => !!this.selectionWithImages)
        console.log(`Collect image finished: ${JSON.stringify(this.selectionWithImages)}`)
        // this.generatingCode = true

        
        
      }else{
        this.selectionWithImages = this.selection;
      }

      if (!(this.selectionWithImages && this.selectionWithImages[0])) {
        console.warn("No selection with images");
        return;
      }

      // TODO: analyze if page is properly nested and annotated, if not
      // suggest in the UI what needs grouping
      let selectionToBuilderPromise;
      if(!this.inDevMode){
        console.log("Not in Dev mode")
        selectionToBuilderPromise = selectionToBuilder(
          this.selectionWithImages as any
        ).catch((err) => {
          this.generatingCode = false;
          this.loadingGenerate = false;
          this.showRequestFailedError = true;
          throw err
        })
      }else{
        console.log("In Dev mode")
        const selections = deepClone(this.selectionWithImages);
        traverse(selections).forEach(function () {
          if (this.key === "intArr") {
            this.delete();
          }
        });
          selectionToBuilderPromise = Promise.resolve(selections);
        }


        const imagesPromises: Promise<any>[] = [];
        const imageMap: { [key: string]: string } = {};
        for (const layer of this.selectionWithImages as SceneNode[]) {
          traverseLayers(layer, (node) => {
            const imageFills = getImageFills(node as Node);
            if (Array.isArray(imageFills) && imageFills.length && !this.inDevMode) {
              imageFills.forEach((image) => {
                if ((image as any)?.intArr) {
                  imagesPromises.push(
                    (async () => {
                      const { id } = await fetch(`${apiHost}/api/v1/stage-image`, {
                        method: "POST",
                        body: JSON.stringify({
                          image: arrayBufferToBase64((image as any).intArr),
                        }),
                        headers: {
                          "content-type": "application/json",
                        },
                      }).then((res) => {
                        if (!res.ok) {
                          console.error("Image upload failed", res);
                          throw new Error("Image upload failed");
                        }
                        return res.json();
                      });
                      delete (node as any).intArr;
                      imageMap[node.id] = id;
                    })()
                  );
                }
              });
            }
          });
        }

        const blocks = await selectionToBuilderPromise;
        await Promise.all(imagesPromises).catch((err) => {
          this.generatingCode = false;
          this.loadingGenerate = false;
          this.showRequestFailedError = true;
          throw err;
        })
        const data = {
          data: {
            blocks: blocks,
          },
        };
        const json = JSON.stringify(data);
        if (useFiddle && !this.inDevMode) {
          const res = await fetch(apiHost + "/api/v1/fiddle", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: json,
          })
            .then((res) => {
              if (!res.ok) {
                console.error("Failed to create fiddle", res);
                throw new Error("Failed to create fiddle");
              }
              return res.json();
            })
            .catch((err) => {
              this.generatingCode = false;
              this.selectionWithImages = null;
              this.showRequestFailedError = true;
              amplitude.track("fiddle creation failed");
    
              throw err;
            });

            console.log("Finished download")
          }
    }

    async updateStorage() {
        await when(() => !!this.clientStorage);
        parent.postMessage(
          {
            pluginMessage: {
              type: "setStorage",
              data: fastClone(this.clientStorage),
            },
          },
          "*"
        );
      }

    getLang() {
        return this.currentLanguage === "en" ? en : ru;
    }

    selectAllUrlInputText() {
        const input = this.urlInputRef;
        if (input) {
          input.setSelectionRange(0, input.value.length);
        }
      }

    render() {
        return(
            <>
            <Tabs
                variant="fullWidth"
                className="min-h-10 bg-[#f9f9f9] shrink-0"
                style={{width: settings.ui.baseWidth}}
                TabIndicatorProps={{
                    style: { transition: "none" },
                }}
                value={this.tabIndex}
                onChange={this.switchTab}
                indicatorColor="primary"
                textColor="primary">

                <Tab 
                    className="min-h-10 min-w-0 bg-black"
                    label={<span className="text-xs font-bold">Export to Code</span>}
                />
                <Tab 
                    className="min-h-10 min-w-0 bg-black"
                    label={<span className="text-xs font-bold">HTML To Figma</span>}
                />
                <Tab 
                    className="min-h-10 min-w-0 bg-black"
                    label={<span className="text-xs font-bold">Playground</span>}
                />
            </Tabs> 
            {/* Display content of Tab */}
            <TabPanel
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
                value={this.tabIndex}
                index={0}
            >
                <>
                <div
                style={{
                  padding: 15,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {/* <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "bold",
                    }}
                  >
                    <Tooltip title="Learn how to use this feature">
                      <a
                        style={{
                          color: themeVars.colors.primary,
                          marginLeft: 5,
                          fontWeight: "bold",
                          position: "relative",
                        }}
                        href="https://www.builder.io/c/docs/import-from-figma"
                        target="_blank"
                        rel="noopenner"
                      >
                        <HelpOutline style={{ fontSize: 18 }} />
                      </a>
                    </Tooltip>
                  </div> */}
                </div>
                <div
                  style={{
                    margin: "10 0 10",
                    fontSize: 12,
                    opacity: 0.8,
                  }}
                >
                </div>
                {this.generatingCode ? (
                  <>
                    {" "}
                    <Box
                      style={{
                        padding: 5,
                        backgroundColor: "#F9F9F9",
                        borderRadius: 4,
                        border: "1px solid #D3D3D3",
                        marginTop: 10,
                      }}
                    >
                      <p style={{ margin: 2, fontSize: 12, opacity: 0.8 }}>
                        <span style={{ fontWeight: "bold" }}>
                          Note: this plugin is not magic.
                        </span>{" "}
                        We attempt to import your design as best possible. You
                        may need to make final adjustments after import,
                        including layout, responsiveness and styling.
                      </p>
                    </Box>
                    <Loading content={this.loaderContent} />
                  </>
                ) : (
                  <>
                    {this.figmaCheckList &&
                    Boolean(Object.keys(this.figmaCheckList).length) ? (
                      <div>
                        <div
                          style={{
                            fontWeight: "bold",
                            fontSize: 12,
                            marginTop: 15,
                          }}
                        >
                        </div>
                        <ul style={{ paddingLeft: 20, margin: 0 }}>
                          {this.figmaCheckList.results?.map((item) => {
                            if (item.data.type === "before") {
                              return (
                                <li key={item.id}>
                                  <p
                                    className="rich-text"
                                    style={{
                                      marginTop: "auto",
                                      marginBottom: "auto",
                                      fontSize: 11,
                                      opacity: 0.8,
                                    }}
                                    dangerouslySetInnerHTML={{
                                      __html: item.data.textContent,
                                    }}
                                  />
                                </li>
                              );
                            }
                          })}
                        </ul>
                        <div
                          style={{
                            fontWeight: "bold",
                            marginTop: 15,
                            fontSize: 12,
                          }}
                        >
                        </div>
                        <ul style={{ paddingLeft: 20, margin: 0 }}>
                          {this.figmaCheckList.results?.map((item) => {
                            if (item.data.type === "after") {
                              return (
                                <li key={item.id}>
                                  <p
                                    className="rich-text"
                                    style={{
                                      marginTop: "auto",
                                      marginBottom: "auto",
                                      fontSize: 11,
                                      opacity: 0.8,
                                    }}
                                    dangerouslySetInnerHTML={{
                                      __html: item.data.textContent,
                                    }}
                                  />
                                </li>
                              );
                            }
                          })}
                        </ul>
                      </div>
                    ) : (
                      <div style={{ display: "flex" }}>
                        <CircularProgress
                          disableShrink
                          style={{ margin: "10 auto" }}
                        />
                      </div>
                    )}

                    {this.showImportInvalidError && (
                      <div>
                        <div
                          style={{
                            color: "rgba(255, 20, 20, 1)",
                            border: `1px solid rgba(255, 0, 0, 0.2)`,
                            padding: "10px 10px 4px 10px",
                            borderRadius: 5,
                            marginTop: 10,
                            backgroundColor: "rgba(255, 0, 0, 0.1)",
                            alignItems: "center",
                            cursor: "pointer",
                            textDecoration: "none",
                          }}
                        >
                          <a
                            style={{
                              color: themeVars.colors.primary,
                            }}
                            href="https://help.figma.com/hc/en-us/articles/360040451373-Create-dynamic-designs-with-Auto-layout"
                            target="_blank"
                            rel="noopenner"
                          >
                          </a>
                          <a
                            style={{
                              color: themeVars.colors.primary,
                            }}
                            href="https://github.com/BuilderIO/figma-html/#auto-layout-vectors"
                            target="_blank"
                            rel="noopenner"
                          >
                          </a>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row-reverse",
                            }}
                          >
                            <Button
                              size="small"
                              style={{ textTransform: "none" }}
                              href="https://www.builder.io/c/docs/import-from-figma"
                              target="_blank"
                              color="primary"
                              rel="noopenner"
                            >
                            </Button>
                            <Button
                              size="small"
                              style={{ opacity: 0.5, textTransform: "none" }}
                              onClick={() => {
                                parent.postMessage(
                                  {
                                    pluginMessage: {
                                      type: "clearErrors",
                                      data: true,
                                    },
                                  },
                                  "*"
                                );
                                this.showImportInvalidError = false;
                              }}
                            >
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                    {this.showRequestFailedError && (
                      <div>
                        <div
                          style={{
                            color: "rgba(255, 20, 20, 1)",
                            border: `1px solid rgba(255, 0, 0, 0.2)`,
                            padding: 10,
                            borderRadius: 5,
                            backgroundColor: "rgba(255, 0, 0, 0.1)",
                            alignItems: "center",
                            cursor: "pointer",
                            textDecoration: "none",
                            marginTop: 10,
                          }}
                        >
                        </div>
                        <div>
                          <Button
                            style={{ textTransform: "none" }}
                            size="small"
                            color="primary"
                            href="https://www.builder.io/c/docs/import-from-figma#troubleshooting"
                            target="_blank"
                            rel="noopenner"
                          >
                          </Button>
                          <Button
                            size="small"
                            style={{ opacity: 0.5, textTransform: "none" }}
                            onClick={() => {
                              this.showRequestFailedError = false;
                            }}
                          >
                          </Button>
                        </div>
                      </div>
                    )}
                    {!Boolean(this.selection.length) && (
                      <div
                        style={{
                          color: themeVars.colors.primary,
                          marginTop: 20,
                          padding: 10,
                          borderRadius: 5,
                          textAlign: "center",
                          backgroundColor:
                            themeVars.colors.primaryWithOpacity(0.1),
                        }}
                      >
                        {this.getLang().selectLayerPop}
                      </div>
                    )}
                    {Boolean(this.selection.length) && (
                      <>
                        {this.showDevModeOption && (
                          <Tooltip
                            PopperProps={{
                              modifiers: { flip: { behavior: ["top"] } },
                            }}
                            enterDelay={300}
                            placement="top"
                            title={this.getLang().devMode}
                          >
                            <FormControlLabel
                              value="Use Dev Mode"
                              disabled={!this.selection.length}
                              style={{
                                marginTop: 20,
                                textTransform: "none",
                                float: "right",
                                marginRight: 0,
                              }}
                              control={
                                <Switch
                                  size="small"
                                  color="primary"
                                  checked={this.inDevMode}
                                  onChange={(e) =>
                                    (this.inDevMode = e.target.checked)
                                  }
                                />
                              }
                              label={
                                <span
                                  style={{
                                    fontSize: 12,
                                    position: "relative",
                                    fontWeight: "bold",
                                  }}
                                >
                                </span>
                              }
                              labelPlacement="start"
                            />
                          </Tooltip>
                        )}
                        <Tooltip
                          disableHoverListener={Boolean(this.selection.length)}
                          title={this.getLang().selectLayerPop}
                        >
                          <div>
                            <Button
                              fullWidth
                              variant="contained"
                              style={{
                                marginTop: 10,
                              }}
                              onClick={(e) => {
                                this.getCode(true);
                              }}
                              disabled={!this.selection.length}
                              color="primary"
                            >
                            Get Code
                            </Button>
                          </div>
                        </Tooltip>
                      </>
                    )}
                    {this.displayFiddleUrl && (
                      <div
                        style={{
                          margin: "10px 0 5px 0",
                          textTransform: "none",
                          textAlign: "center",
                        }}
                      >
                        <a
                          style={{
                            color: themeVars.colors.primary,
                            fontWeight: "bold",
                            textDecoration: "none",
                          }}
                          rel="noopenner"
                          href={this.displayFiddleUrl}
                          target="_blank"
                        >
                        </a>
                      </div>
                    )}
                    {Boolean(this.selection.length) && (
                      <Button
                        fullWidth
                        size="small"
                        style={{
                          marginTop: 5,
                          opacity: 0.5,
                          textTransform: "none",
                        }}
                        onClick={(e) => {
                          this.getCode(false);
                        }}
                        disabled={!this.selection.length}
                      >
                      </Button>
                    )}
                  </>
                )}
              </div>
                
                
                {/* Generate design with ai */}
                <div
                style={{
                  color: themeVars.colors.primary,
                  margin: "auto 15px 15px",
                  border: `1px solid ${themeVars.colors.primaryWithOpacity(
                    0.2
                  )}`,
                  fontWeight: "bold",
                  padding: 10,
                  borderRadius: 5,
                  backgroundColor: themeVars.colors.primaryWithOpacity(0.1),
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                role="button"
                onClick={() => {
                  this.tabIndex = 1;
                }}
              >
                <Wand style={{ marginRight: 15 }} />
                New!
                <span
                  style={{
                    color: "inherit",
                    marginLeft: 3,
                  }}
                >
                  Generate designs with AI
                </span>
                </div>
                </>
            </TabPanel>
            <TabPanel
                value={this.tabIndex}
                index={1}
            >
                <h1>content of html to figma</h1>
            </TabPanel>
            <TabPanel
                value={this.tabIndex}
                index={2}
            >
                <h1>content of playground</h1>
            </TabPanel>
            </>
        )
    }
}

ReactDOM.render(
    
        <App />

, document.getElementById("root"));
