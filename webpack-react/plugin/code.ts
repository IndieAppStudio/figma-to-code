import { settings } from "./constants/settings";
import { fastClone } from "./functions/fast-clone";
import { getLayout, hasChildren, isGroupNode } from "../lib/helpers";
// import { test} from "./generator-html";
import { Resolver, HTMLMapping } from "./uidl/uidl-resolver";
import { Parser } from "./uidl/uidl-validator";

figma.showUI(__html__, {
  width: settings.ui.baseWidth,
  height: settings.ui.baseHeight,
});

const allPropertyNames = [
  "id",
  "width",
  "height",
  "currentPage",
  "cancel",
  "origin",
  "onmessage",
  "center",
  "zoom",
  "fontName",
  "name",
  "visible",
  "locked",
  "constraints",
  "relativeTransform",
  "x",
  "y",
  "rotation",
  "constrainProportions",
  "layoutAlign",
  "layoutGrow",
  "opacity",
  "blendMode",
  "isMask",
  "effects",
  "effectStyleId",
  "expanded",
  "backgrounds",
  "backgroundStyleId",
  "fills",
  "strokes",
  "strokeWeight",
  "strokeMiterLimit",
  "strokeAlign",
  "strokeCap",
  "strokeJoin",
  "dashPattern",
  "fillStyleId",
  "strokeStyleId",
  "cornerRadius",
  "cornerSmoothing",
  "topLeftRadius",
  "topRightRadius",
  "bottomLeftRadius",
  "bottomRightRadius",
  "exportSettings",
  "overflowDirection",
  "numberOfFixedChildren",
  "description",
  "layoutMode",
  "primaryAxisSizingMode",
  "counterAxisSizingMode",
  "primaryAxisAlignItems",
  "counterAxisAlignItems",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "paddingBottom",
  "itemSpacing",
  "layoutGrids",
  "gridStyleId",
  "clipsContent",
  "guides",
  "guides",
  "selection",
  "selectedTextRange",
  "backgrounds",
  "arcData",
  "pointCount",
  "pointCount",
  "innerRadius",
  "vectorNetwork",
  "vectorPaths",
  "handleMirroring",
  "textAlignHorizontal",
  "textAlignVertical",
  "textAutoResize",
  "paragraphIndent",
  "paragraphSpacing",
  "autoRename",
  "textStyleId",
  "fontSize",
  "fontName",
  "textCase",
  "textDecoration",
  "letterSpacing",
  "lineHeight",
  "characters",
  // "mainComponent",
  "scaleFactor",
  "booleanOperation",
  "expanded",
  "name",
  "paints",
  "fontSize",
  "textDecoration",
  "fontName",
  "letterSpacing",
  "lineHeight",
  "paragraphIndent",
  "paragraphSpacing",
  "textCase",
  "effects",
  "type",
  "layoutGrids",
  "absoluteRenderBounds",
];

const cloneObject = (obj: any, valuesSet = new Set()) => {
  if (!obj || typeof obj !== "object") {
    return obj;
  }
  
  const newObj: any = Array.isArray(obj) ? [] : {};

  for (const property of allPropertyNames) {
    try{
      const value = obj[property];
      if (value !== undefined && typeof value !== "symbol") {
        newObj[property] = obj[property];
      }
      
    }catch(err){
      console.warn("Error at cloneObject", err)
    }
  }

  return newObj;
};

async function serialize(
  element: any,
  options: {
    withImages?: boolean;
    withChildren?: boolean;
    // TODO
    withVectorsExported?: boolean;
  } = {}
): Promise<any> {
  let fills = (element.fills && (fastClone(element.fills) as Paint[])) || [];
  if (options.withImages && fills.length) {
    for (const fill of fills) {
      if (fill.type === "IMAGE" && fill.imageHash) {
        const image = figma.getImageByHash(fill.imageHash);
        try {
          const bytes = await image.getBytesAsync();
          (fill as any).intArr = bytes;
        } catch (err) {
          console.warn("Could not get image for layer", element, fill, err);
        }
      }
    }
  }

  // TODO: May have bg...
  const isSvg =
    (hasChildren(element) &&
      element.children.every((item) => item.type === "VECTOR")) ||
    element.type === "VECTOR";

  if (
    options.withImages &&
    // options.withVectorsExported !== false &&
    isSvg
  ) {
    const image = await element.exportAsync({
      // TODO: use SVG for SVGs
      format: "PNG",
      constraint: {
        type: "SCALE",
        value: 2,
      },
    });
    fills = [
      {
        type: "IMAGE",
        visible: true,
        scaleMode: "FIT",
        ...({ intArr: image } as any),
      },
    ];
  }
  const cssProps = await element.getCSSAsync();
  
  // TODO: better way to enumerate everything, including getters, that is not function
  // return {
  //   ...cloneObject(element),
  //   cssProps,
  //   fills,
  //   type: element.type === "VECTOR" ? "RECTANGLE" : element.type,
  //   data: JSON.parse(element.getSharedPluginData("builder", "data") || "{}"),
  //   children:
  //     (options.withChildren &&
  //       element.children &&
  //       !isSvg &&
  //       (await Promise.all(
  //         element.children
  //           .filter((child: SceneNode) => child.visible)
  //           .map((child: any) => 
  //             serialize(child, options)
  //           )
  //       ))) ||
  //     undefined,
  // };
  return {
    figmaLayerId: element.id,
    type: element.type === "VECTOR" ? "RECTANGLE" : element.type,
    data: JSON.parse(element.getSharedPluginData("builder", "data") || "{}"),
    responsiveStyles: cssProps,
    component: (element.characters && {
      "name": element.characters,
      "type": element.type
    }) || undefined,
    children:
      (options.withChildren &&
        element.children &&
        !isSvg &&
        (await Promise.all(
          element.children
            .filter((child: SceneNode) => child.visible)
            .map((child: any) => 
              serialize(child, options)
            )
        ))) ||
      undefined,
  };
}

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = async (msg) => {
  if(msg.type === "get-quickTest"){
    console.log("Conduct test ...")
  }

  if(msg.type === "getSelectionWithImages"){
    figma.ui.postMessage({
      type: "selectionWithImages",
      elements: await Promise.all(
        figma.currentPage.selection.map((el) => 
          serialize(el as any, {
            withChildren: true,
            withImages: true
          })
    
        )
      )
    })
  }
}

async function postSelection() {
  figma.ui.postMessage({
    type: "selectionChange",
    elements: await Promise.all(
        figma.currentPage.selection.map((el) => {
          console.log("heelo");
          serialize(el as any, {
            // TODO: only need one level deep......
            withChildren: true,
          })
        }
        )
      
      ),
  });
}

figma.on("selectionchange", async () => {
  // postSelection();
  const resolver = new Resolver([HTMLMapping])

  const cleanedUIDL = {
        "name": "My First Component",
        "node": {
          "type": "element",
          "content": {
            "elementType": "text",
            "children": [
              {
                "type": "static",
                "content": "Hello World!"
              }
            ]
          }
        }
      }
  const uidl = Parser.parseComponentJSON(cleanedUIDL)

  const resolvedUIDL = resolver.resolveUIDL(uidl)
  console.log(`Resolver UIDl: ${resolvedUIDL}`)
  // const generator = createHTMLComponentGenerator()

  // console.log(generator.generateComponent())
  // console.log("hello there")
});
