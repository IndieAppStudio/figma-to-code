// import { createHTMLComponentGenerator } from "capy-component-generator-html";
import {createHTMLProjectGenerator} from "capy-project-generator-html";

const uidl = {
  "name": "New Project3",
  "globals": {
      "settings": {
          "title": "New Project3",
          "language": "en"
      },
      "assets": [
          {
              "type": "style",
              "content": "html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6 {  margin: 0;  padding: 0;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type=\"button\"]:-moz-focus,[type=\"reset\"]:-moz-focus,[type=\"submit\"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}"
          },
          {
              "type": "style",
              "content": "\n  html {\n    font-family: Inter;\n    font-size: 16px;\n  }\n\n  body {\n    font-weight: 400;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: none;\n    letter-spacing: normal;\n    line-height: 1.15;\n    color: var(--dl-color-gray-black);\n    background-color: var(--dl-color-gray-white);\n    \n  }\n\n  \n"
          },
          {
              "type": "font",
              "path": "",
              "name": "Arial"
          },
          {
              "type": "font",
              "path": "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
              "name": "Inter"
          },
          {
            "type": "local-font",
            "path": "super-funky.ttf",
            "properties": {
              "font-family": {
                "type": "static",
                "content": "Super Funky"
              }
            }
          },
          {
              "type": "script",
              "path": "https://unpkg.com/@teleporthq/teleport-custom-scripts"
          }
      ],
      "meta": [
          {
              "name": "viewport",
              "content": "width=device-width, initial-scale=1.0"
          },
          {
              "charSet": "utf-8"
          },
          {
              "property": "twitter:card",
              "content": "summary_large_image"
          }
      ],
      "customCode": {
          "head": "<!--This is the head section-->\n<!-- <script type=\"text/javascript\"> ... </script> -->\n<script src='https://unpkg.com/@teleporthq/teleport-custom-scripts'></script>"
      }
  },
  "root": {
      "name": "App",
      "designLanguage": {
          "tokens": {
              "--dl-space-space-fourunits": {
                  "type": "static",
                  "content": "64px"
              },
              "--dl-space-space-threeunits": {
                  "type": "static",
                  "content": "48px"
              },
              "--dl-space-space-twounits": {
                  "type": "static",
                  "content": "32px"
              },
              "--dl-color-success-500": {
                  "type": "static",
                  "content": "#32A94C"
              },
              "--dl-color-danger-700": {
                  "type": "static",
                  "content": "#E14747"
              },
              "--dl-color-danger-500": {
                  "type": "static",
                  "content": "#BF2626"
              },
              "--dl-color-primary-100": {
                  "type": "static",
                  "content": "#003EB3"
              },
              "--dl-radius-radius-round": {
                  "type": "static",
                  "content": "50%"
              },
              "--dl-color-success-300": {
                  "type": "static",
                  "content": "#199033"
              },
              "--dl-size-size-small": {
                  "type": "static",
                  "content": "48px"
              },
              "--dl-color-danger-300": {
                  "type": "static",
                  "content": "#A22020"
              },
              "--dl-size-size-medium": {
                  "type": "static",
                  "content": "96px"
              },
              "--dl-size-size-xsmall": {
                  "type": "static",
                  "content": "16px"
              },
              "--dl-radius-radius-radius8": {
                  "type": "static",
                  "content": "8px"
              },
              "--dl-color-gray-white": {
                  "type": "static",
                  "content": "#FFFFFF"
              },
              "--dl-color-gray-700": {
                  "type": "static",
                  "content": "#999999"
              },
              "--dl-size-size-maxwidth": {
                  "type": "static",
                  "content": "1400px"
              },
              "--dl-radius-radius-radius4": {
                  "type": "static",
                  "content": "4px"
              },
              "--dl-color-primary-300": {
                  "type": "static",
                  "content": "#0074F0"
              },
              "--dl-color-primary-500": {
                  "type": "static",
                  "content": "#14A9FF"
              },
              "--dl-size-size-xlarge": {
                  "type": "static",
                  "content": "192px"
              },
              "--dl-color-success-700": {
                  "type": "static",
                  "content": "#4CC366"
              },
              "--dl-space-space-unit": {
                  "type": "static",
                  "content": "16px"
              },
              "--dl-color-primary-700": {
                  "type": "static",
                  "content": "#85DCFF"
              },
              "--dl-space-space-oneandhalfunits": {
                  "type": "static",
                  "content": "24px"
              },
              "--dl-color-gray-900": {
                  "type": "static",
                  "content": "#D9D9D9"
              },
              "--dl-space-space-sixunits": {
                  "type": "static",
                  "content": "96px"
              },
              "--dl-radius-radius-radius2": {
                  "type": "static",
                  "content": "2px"
              },
              "--dl-color-gray-500": {
                  "type": "static",
                  "content": "#595959"
              },
              "--dl-color-gray-black": {
                  "type": "static",
                  "content": "#000000"
              },
              "--dl-size-size-large": {
                  "type": "static",
                  "content": "144px"
              },
              "--dl-space-space-halfunit": {
                  "type": "static",
                  "content": "8px"
              },
              "--dl-space-space-fiveunits": {
                  "type": "static",
                  "content": "80px"
              },
              "--dl-size-size-xxlarge": {
                  "type": "static",
                  "content": "288px"
              }
          }
      },
      "styleSetDefinitions": {
          "button": {
              "type": "reusable-project-style-map",
              "content": {
                  "fontSize": {
                      "type": "static",
                      "content": "14px"
                  },
                  "fontFamily": {
                      "type": "static",
                      "content": "Arial"
                  },
                  "fontWeight": {
                      "type": "static",
                      "content": "500"
                  },
                  "textTransform": {
                      "type": "static",
                      "content": "none"
                  },
                  "textDecoration": {
                      "type": "static",
                      "content": "none"
                  }
              }
          },
          "input": {
              "type": "reusable-project-style-map",
              "content": {
                  "color": {
                      "type": "dynamic",
                      "content": {
                          "referenceType": "token",
                          "id": "--dl-color-gray-black"
                      }
                  },
                  "cursor": {
                      "type": "static",
                      "content": "auto"
                  },
                  "padding": {
                      "type": "static",
                      "content": "0.5rem 1rem"
                  },
                  "borderColor": {
                      "type": "dynamic",
                      "content": {
                          "referenceType": "token",
                          "id": "--dl-color-gray-black"
                      }
                  },
                  "borderWidth": {
                      "type": "static",
                      "content": "1px"
                  },
                  "borderRadius": {
                      "type": "static",
                      "content": "4px"
                  },
                  "backgroundColor": {
                      "type": "dynamic",
                      "content": {
                          "referenceType": "token",
                          "id": "--dl-color-gray-white"
                      }
                  }
              },
              "conditions": []
          },
          "textarea": {
              "type": "reusable-project-style-map",
              "content": {
                  "color": {
                      "type": "dynamic",
                      "content": {
                          "referenceType": "token",
                          "id": "--dl-color-gray-black"
                      }
                  },
                  "cursor": {
                      "type": "static",
                      "content": "auto"
                  },
                  "padding": {
                      "type": "static",
                      "content": "0.5rem"
                  },
                  "borderColor": {
                      "type": "dynamic",
                      "content": {
                          "referenceType": "token",
                          "id": "--dl-color-gray-black"
                      }
                  },
                  "borderWidth": {
                      "type": "static",
                      "content": "1px"
                  },
                  "borderRadius": {
                      "type": "static",
                      "content": "4px"
                  },
                  "backgroundColor": {
                      "type": "dynamic",
                      "content": {
                          "referenceType": "token",
                          "id": "--dl-color-gray-white"
                      }
                  }
              },
              "conditions": []
          },
          "list": {
              "type": "reusable-project-style-map",
              "content": {
                  "width": {
                      "type": "static",
                      "content": "100%"
                  },
                  "margin": {
                      "type": "static",
                      "content": "1em 0px 1em 0px"
                  },
                  "display": {
                      "type": "static",
                      "content": "block"
                  },
                  "padding": {
                      "type": "static",
                      "content": "0px 0px 0px 1.5rem"
                  },
                  "listStyleType": {
                      "type": "static",
                      "content": "none"
                  },
                  "listStylePosition": {
                      "type": "static",
                      "content": "outside"
                  }
              },
              "conditions": []
          },
          "list-item": {
              "type": "reusable-project-style-map",
              "content": {
                  "display": {
                      "type": "static",
                      "content": "list-item"
                  }
              },
              "conditions": []
          },
          "teleport-show": {
              "type": "reusable-project-style-map",
              "content": {
                  "display": {
                      "type": "static",
                      "content": "flex !important"
                  }
              },
              "conditions": []
          },
          "primary-button": {
              "type": "reusable-project-style-map",
              "content": {
                  "backgroundColor": {
                      "type": "dynamic",
                      "content": {
                          "referenceType": "token",
                          "id": "--dl-color-gray-black"
                      }
                  },
                  "color": {
                      "type": "static",
                      "content": "white"
                  }
              },
              "conditions": []
          },
          "secondary-button": {
              "type": "reusable-project-style-map",
              "content": {
                  "color": {
                      "type": "dynamic",
                      "content": {
                          "referenceType": "token",
                          "id": "--dl-color-gray-black"
                      }
                  },
                  "border": {
                      "type": "static",
                      "content": "1px solid"
                  }
              },
              "conditions": []
          },
          "content": {
              "type": "reusable-project-style-map",
              "content": {
                  "fontSize": {
                      "type": "static",
                      "content": "16px"
                  },
                  "fontFamily": {
                      "type": "static",
                      "content": "Inter"
                  },
                  "fontWeight": {
                      "type": "static",
                      "content": "400"
                  },
                  "lineHeight": {
                      "type": "static",
                      "content": "1.15"
                  },
                  "textTransform": {
                      "type": "static",
                      "content": "none"
                  },
                  "textDecoration": {
                      "type": "static",
                      "content": "none"
                  }
              }
          },
          "heading": {
              "type": "reusable-project-style-map",
              "content": {
                  "fontSize": {
                      "type": "static",
                      "content": "32px"
                  },
                  "fontFamily": {
                      "type": "static",
                      "content": "Inter"
                  },
                  "fontWeight": {
                      "type": "static",
                      "content": "700"
                  },
                  "lineHeight": {
                      "type": "static",
                      "content": "1.15"
                  },
                  "textTransform": {
                      "type": "static",
                      "content": "none"
                  },
                  "textDecoration": {
                      "type": "static",
                      "content": "none"
                  }
              }
          }
      },
      "stateDefinitions": {
          "route": {
              "type": "string",
              "defaultValue": "Home",
              "values": [
                  {
                      "value": "Home",
                      "seo": {
                          "title": "New Project3",
                          "metaTags": [
                              {
                                  "property": "og:title",
                                  "content": "New Project3"
                              }
                          ]
                      }
                  },
                  {
                      "value": "About",
                      "seo": {
                          "title": "About - New Project3",
                          "metaTags": [
                              {
                                  "property": "og:title",
                                  "content": "About - New Project3"
                              }
                          ]
                      }
                  },
                  {
                      "value": "Fallback",
                      "seo": {
                          "title": "Fallback Page"
                      },
                      "pageOptions": {
                          "fallback": true
                      }
                  }
              ]
          }
      },
      "node": {
          "type": "element",
          "content": {
              "elementType": "Router",
              "children": [
                  {
                      "type": "conditional",
                      "content": {
                          "node": {
                              "type": "element",
                              "content": {
                                  "elementType": "container",
                                  "referencedStyles": {
                                      "9f75e760-4477-44cd-8532-36c760cbc8aa": {
                                          "type": "style-map",
                                          "content": {
                                              "conditions": [
                                                  {
                                                      "maxWidth": 479,
                                                      "conditionType": "screen-size"
                                                  }
                                              ],
                                              "mapType": "inlined",
                                              "styles": {
                                                  "color": {
                                                      "type": "static",
                                                      "content": "blue"
                                                  }
                                              }
                                          }
                                      }
                                  },
                                  "abilities": {},
                                  "style": {
                                      "width": {
                                          "type": "static",
                                          "content": "100%"
                                      },
                                      "display": {
                                          "type": "static",
                                          "content": "flex"
                                      },
                                      "overflow": {
                                          "type": "static",
                                          "content": "auto"
                                      },
                                      "minHeight": {
                                          "type": "static",
                                          "content": "100vh"
                                      },
                                      "alignItems": {
                                          "type": "static",
                                          "content": "center"
                                      },
                                      "flexDirection": {
                                          "type": "static",
                                          "content": "column"
                                      },
                                      "justifyContent": {
                                          "type": "static",
                                          "content": "flex-start"
                                      }
                                  },
                                  "children": [
                                      {
                                          "type": "element",
                                          "content": {
                                              "elementType": "lottie-node",
                                              "style": {
                                                  "width": "200px",
                                                  "height": "200px"
                                              },
                                              "attrs": {
                                                  "src": {
                                                      "type": "static",
                                                      "content": "https://assets9.lottiefiles.com/datafiles/gUENLc1262ccKIO/data.json"
                                                  },
                                                  "autoplay": {
                                                      "type": "static",
                                                      "content": true
                                                  }
                                              }
                                          }
                                      },
                                      {
                                          "type": "element",
                                          "content": {
                                              "elementType": "component",
                                              "dependency": {
                                                  "type": "local"
                                              },
                                              "referencedStyles": {},
                                              "abilities": {},
                                              "children": [],
                                              "semanticType": "Header"
                                          }
                                      },
                                      {
                                          "type": "element",
                                          "content": {
                                              "elementType": "component",
                                              "dependency": {
                                                  "type": "local"
                                              },
                                              "referencedStyles": {},
                                              "abilities": {},
                                              "children": [],
                                              "attrs": {
                                                  "namedSlot": {
                                                    "type": "element",
                                                    "content": {
                                                      "elementType": "container",
                                                      "style": {
                                                        "fontSize": "24px",
                                                        "padding": "20px",
                                                        "backgroundColor": {
                                                          "type": "dynamic",
                                                          "content": {
                                                            "referenceType": "token",
                                                            "id": "--dl-color-success-700"
                                                          }
                                                        }
                                                      },
                                                      "children": [
                                                        "This is amazing, because this is a named-slot",
                                                        {
                                                          "type": "element",
                                                          "content": {
                                                            "elementType": "container",
                                                            "style": {
                                                              "padding": "20px",
                                                              "backgroundColor": {
                                                                "type": "dynamic",
                                                                "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-color-danger-700"
                                                                }
                                                              },
                                                              "marginTop": "20px"
                                                            },
                                                            "children": ["And can be nested any number of levels"]
                                                          }
                                                        }
                                                      ]
                                                    }
                                                  }
                                              },
                                              "semanticType": "Hero"
                                          }
                                      },
                                      {
                                          "type": "element",
                                          "content": {
                                              "elementType": "component",
                                              "dependency": {
                                                  "type": "local"
                                              },
                                              "referencedStyles": {},
                                              "abilities": {},
                                              "children": [],
                                              "semanticType": "Footer"
                                          }
                                      }
                                  ],
                                  "semanticType": "div"
                              }
                          },
                          "value": "Home",
                          "reference": {
                              "type": "dynamic",
                              "content": {
                                  "referenceType": "state",
                                  "id": "route"
                              }
                          }
                      }
                  },
                  {
                      "type": "conditional",
                      "content": {
                          "node": {
                              "type": "element",
                              "content": {
                                  "elementType": "container",
                                  "referencedStyles": {},
                                  "abilities": {},
                                  "style": {
                                      "width": {
                                          "type": "static",
                                          "content": "100%"
                                      },
                                      "display": {
                                          "type": "static",
                                          "content": "flex"
                                      },
                                      "overflow": {
                                          "type": "static",
                                          "content": "auto"
                                      },
                                      "minHeight": {
                                          "type": "static",
                                          "content": "100vh"
                                      },
                                      "alignItems": {
                                          "type": "static",
                                          "content": "flex-start"
                                      },
                                      "flexDirection": {
                                          "type": "static",
                                          "content": "column"
                                      },
                                      "justifyContent": {
                                          "type": "static",
                                          "content": "flex-start"
                                      }
                                  },
                                  "children": [
                                      {
                                          "type": "element",
                                          "content": {
                                              "elementType": "component",
                                              "dependency": {
                                                  "type": "local"
                                              },
                                              "referencedStyles": {},
                                              "abilities": {},
                                              "attrs": {
                                                  "rootClassName": {
                                                      "type": "comp-style",
                                                      "content": "rootClassName"
                                                  }
                                              },
                                              "children": [],
                                              "semanticType": "Header"
                                          }
                                      },
                                      {
                                          "type": "element",
                                          "content": {
                                              "elementType": "container",
                                              "name": "Gallery",
                                              "referencedStyles": {
                                                  "785deea7-5086-40af-9e41-9a53bbb0fa28": {
                                                      "type": "style-map",
                                                      "content": {
                                                          "conditions": [
                                                              {
                                                                  "conditionType": "screen-size",
                                                                  "maxWidth": 479
                                                              }
                                                          ],
                                                          "mapType": "inlined",
                                                          "styles": {
                                                              "padding": {
                                                                  "type": "dynamic",
                                                                  "content": {
                                                                      "referenceType": "token",
                                                                      "id": "--dl-space-space-unit"
                                                                  }
                                                              }
                                                          }
                                                      }
                                                  },
                                                  "ff5caa9e-fea4-44a8-900e-a4fc4f90d3e4": {
                                                      "type": "style-map",
                                                      "content": {
                                                          "conditions": [
                                                              {
                                                                  "conditionType": "screen-size",
                                                                  "maxWidth": 767
                                                              }
                                                          ],
                                                          "mapType": "inlined",
                                                          "styles": {
                                                              "paddingLeft": {
                                                                  "type": "dynamic",
                                                                  "content": {
                                                                      "referenceType": "token",
                                                                      "id": "--dl-space-space-twounits"
                                                                  }
                                                              },
                                                              "paddingRight": {
                                                                  "type": "dynamic",
                                                                  "content": {
                                                                      "referenceType": "token",
                                                                      "id": "--dl-space-space-twounits"
                                                                  }
                                                              }
                                                          }
                                                      }
                                                  }
                                              },
                                              "abilities": {},
                                              "style": {
                                                  "width": {
                                                      "type": "static",
                                                      "content": "100%"
                                                  },
                                                  "display": {
                                                      "type": "static",
                                                      "content": "flex"
                                                  },
                                                  "maxWidth": {
                                                      "type": "dynamic",
                                                      "content": {
                                                          "referenceType": "token",
                                                          "id": "--dl-size-size-maxwidth"
                                                      }
                                                  },
                                                  "alignItems": {
                                                      "type": "static",
                                                      "content": "center"
                                                  },
                                                  "paddingTop": {
                                                      "type": "dynamic",
                                                      "content": {
                                                          "referenceType": "token",
                                                          "id": "--dl-space-space-twounits"
                                                      }
                                                  },
                                                  "paddingLeft": {
                                                      "type": "dynamic",
                                                      "content": {
                                                          "referenceType": "token",
                                                          "id": "--dl-space-space-threeunits"
                                                      }
                                                  },
                                                  "paddingRight": {
                                                      "type": "dynamic",
                                                      "content": {
                                                          "referenceType": "token",
                                                          "id": "--dl-space-space-threeunits"
                                                      }
                                                  },
                                                  "flexDirection": {
                                                      "type": "static",
                                                      "content": "column"
                                                  },
                                                  "paddingBottom": {
                                                      "type": "dynamic",
                                                      "content": {
                                                          "referenceType": "token",
                                                          "id": "--dl-space-space-twounits"
                                                      }
                                                  }
                                              },
                                              "children": [
                                                  {
                                                      "type": "element",
                                                      "content": {
                                                          "elementType": "text",
                                                          "referencedStyles": {},
                                                          "abilities": {},
                                                          "style": {
                                                              "fontSize": {
                                                                  "type": "static",
                                                                  "content": "3rem"
                                                              },
                                                              "textAlign": {
                                                                  "type": "static",
                                                                  "content": "center"
                                                              }
                                                          },
                                                          "children": [
                                                              {
                                                                  "type": "static",
                                                                  "content": "Our portfolio"
                                                              }
                                                          ],
                                                          "semanticType": "h1"
                                                      }
                                                  },
                                                  {
                                                      "type": "element",
                                                      "content": {
                                                          "elementType": "text",
                                                          "referencedStyles": {
                                                              "f4a07a8b-08f2-46d4-a47b-33b57e57e16e": {
                                                                  "type": "style-map",
                                                                  "content": {
                                                                      "conditions": [
                                                                          {
                                                                              "conditionType": "screen-size",
                                                                              "maxWidth": 767
                                                                          }
                                                                      ],
                                                                      "mapType": "inlined",
                                                                      "styles": {
                                                                          "paddingLeft": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-space-space-unit"
                                                                              }
                                                                          },
                                                                          "paddingRight": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-space-space-unit"
                                                                              }
                                                                          }
                                                                      }
                                                                  }
                                                              },
                                                              "088b3180-ba7f-4d85-9124-4007789b5d1d": {
                                                                  "type": "style-map",
                                                                  "content": {
                                                                      "conditions": [
                                                                          {
                                                                              "conditionType": "screen-size",
                                                                              "maxWidth": 991
                                                                          }
                                                                      ],
                                                                      "mapType": "inlined",
                                                                      "styles": {
                                                                          "textAlign": {
                                                                              "type": "static",
                                                                              "content": "center"
                                                                          }
                                                                      }
                                                                  }
                                                              }
                                                          },
                                                          "abilities": {},
                                                          "style": {
                                                              "color": {
                                                                  "type": "dynamic",
                                                                  "content": {
                                                                      "referenceType": "token",
                                                                      "id": "--dl-color-gray-700"
                                                                  }
                                                              },
                                                              "marginTop": {
                                                                  "type": "dynamic",
                                                                  "content": {
                                                                      "referenceType": "token",
                                                                      "id": "--dl-space-space-twounits"
                                                                  }
                                                              },
                                                              "textAlign": {
                                                                  "type": "static",
                                                                  "content": "center"
                                                              },
                                                              "paddingLeft": {
                                                                  "type": "dynamic",
                                                                  "content": {
                                                                      "referenceType": "token",
                                                                      "id": "--dl-space-space-threeunits"
                                                                  }
                                                              },
                                                              "marginBottom": {
                                                                  "type": "dynamic",
                                                                  "content": {
                                                                      "referenceType": "token",
                                                                      "id": "--dl-space-space-twounits"
                                                                  }
                                                              },
                                                              "paddingRight": {
                                                                  "type": "dynamic",
                                                                  "content": {
                                                                      "referenceType": "token",
                                                                      "id": "--dl-space-space-threeunits"
                                                                  }
                                                              }
                                                          },
                                                          "children": [
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "text",
                                                                      "referencedStyles": {},
                                                                      "abilities": {},
                                                                      "children": [
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "text",
                                                                                  "referencedStyles": {},
                                                                                  "abilities": {},
                                                                                  "children": [
                                                                                      {
                                                                                          "type": "static",
                                                                                          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. "
                                                                                      },
                                                                                      {
                                                                                          "type": "raw",
                                                                                          "content": " "
                                                                                      }
                                                                                  ]
                                                                              }
                                                                          },
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "text",
                                                                                  "referencedStyles": {},
                                                                                  "abilities": {},
                                                                                  "children": [
                                                                                      {
                                                                                          "type": "static",
                                                                                          "content": " "
                                                                                      },
                                                                                      {
                                                                                          "type": "raw",
                                                                                          "content": " "
                                                                                      }
                                                                                  ]
                                                                              }
                                                                          }
                                                                      ],
                                                                      "semanticType": "span"
                                                                  }
                                                              },
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "br",
                                                                      "referencedStyles": {},
                                                                      "abilities": {},
                                                                      "children": [],
                                                                      "semanticType": "br"
                                                                  }
                                                              },
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "text",
                                                                      "referencedStyles": {},
                                                                      "abilities": {},
                                                                      "children": [
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "text",
                                                                                  "referencedStyles": {},
                                                                                  "abilities": {},
                                                                                  "children": [
                                                                                      {
                                                                                          "type": "static",
                                                                                          "content": "Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. "
                                                                                      },
                                                                                      {
                                                                                          "type": "raw",
                                                                                          "content": " "
                                                                                      }
                                                                                  ]
                                                                              }
                                                                          },
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "text",
                                                                                  "referencedStyles": {},
                                                                                  "abilities": {},
                                                                                  "children": [
                                                                                      {
                                                                                          "type": "static",
                                                                                          "content": " "
                                                                                      },
                                                                                      {
                                                                                          "type": "raw",
                                                                                          "content": " "
                                                                                      }
                                                                                  ]
                                                                              }
                                                                          }
                                                                      ],
                                                                      "semanticType": "span"
                                                                  }
                                                              }
                                                          ],
                                                          "semanticType": "span"
                                                      }
                                                  },
                                                  {
                                                      "type": "element",
                                                      "content": {
                                                          "elementType": "container",
                                                          "referencedStyles": {
                                                              "111ff2d1-7b22-440d-b9f6-30946dca9598": {
                                                                  "type": "style-map",
                                                                  "content": {
                                                                      "conditions": [
                                                                          {
                                                                              "conditionType": "screen-size",
                                                                              "maxWidth": 479
                                                                          }
                                                                      ],
                                                                      "mapType": "inlined",
                                                                      "styles": {
                                                                          "gridTemplateColumns": {
                                                                              "type": "static",
                                                                              "content": "1fr"
                                                                          }
                                                                      }
                                                                  }
                                                              },
                                                              "4a8a977c-5afe-45e9-bf32-3667e2789650": {
                                                                  "type": "style-map",
                                                                  "content": {
                                                                      "conditions": [
                                                                          {
                                                                              "conditionType": "screen-size",
                                                                              "maxWidth": 991
                                                                          }
                                                                      ],
                                                                      "mapType": "inlined",
                                                                      "styles": {
                                                                          "gridTemplateColumns": {
                                                                              "type": "static",
                                                                              "content": "1fr 1fr 1fr"
                                                                          }
                                                                      }
                                                                  }
                                                              },
                                                              "a819dc66-7304-4c70-864c-f4288dc360c0": {
                                                                  "type": "style-map",
                                                                  "content": {
                                                                      "conditions": [
                                                                          {
                                                                              "conditionType": "screen-size",
                                                                              "maxWidth": 767
                                                                          }
                                                                      ],
                                                                      "mapType": "inlined",
                                                                      "styles": {
                                                                          "gridTemplateColumns": {
                                                                              "type": "static",
                                                                              "content": "1fr 1fr"
                                                                          }
                                                                      }
                                                                  }
                                                              }
                                                          },
                                                          "abilities": {},
                                                          "style": {
                                                              "width": {
                                                                  "type": "static",
                                                                  "content": "100%"
                                                              },
                                                              "display": {
                                                                  "type": "static",
                                                                  "content": "grid"
                                                              },
                                                              "gridGap": {
                                                                  "type": "dynamic",
                                                                  "content": {
                                                                      "referenceType": "token",
                                                                      "id": "--dl-space-space-unit"
                                                                  }
                                                              },
                                                              "gridTemplateColumns": {
                                                                  "type": "static",
                                                                  "content": "1fr 1fr 1fr 1fr"
                                                              }
                                                          },
                                                          "children": [
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "component",
                                                                      "dependency": {
                                                                          "type": "local"
                                                                      },
                                                                      "referencedStyles": {},
                                                                      "abilities": {},
                                                                      "attrs": {
                                                                          "rootClassName": {
                                                                              "type": "comp-style",
                                                                              "content": "rootClassName"
                                                                          }
                                                                      },
                                                                      "children": [],
                                                                      "semanticType": "GalleryCard3"
                                                                  }
                                                              },
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "component",
                                                                      "dependency": {
                                                                          "type": "local"
                                                                      },
                                                                      "referencedStyles": {},
                                                                      "abilities": {},
                                                                      "attrs": {
                                                                          "image_src": {
                                                                              "type": "static",
                                                                              "content": "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&ixlib=rb-1.2.1&h=1000"
                                                                          },
                                                                          "rootClassName": {
                                                                              "type": "comp-style",
                                                                              "content": "rootClassName1"
                                                                          }
                                                                      },
                                                                      "children": [],
                                                                      "semanticType": "GalleryCard3"
                                                                  }
                                                              },
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "component",
                                                                      "dependency": {
                                                                          "type": "local"
                                                                      },
                                                                      "referencedStyles": {},
                                                                      "abilities": {},
                                                                      "attrs": {
                                                                          "image_src": {
                                                                              "type": "static",
                                                                              "content": "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&ixlib=rb-1.2.1&h=1000"
                                                                          },
                                                                          "rootClassName": {
                                                                              "type": "comp-style",
                                                                              "content": "rootClassName3"
                                                                          }
                                                                      },
                                                                      "children": [],
                                                                      "semanticType": "GalleryCard3"
                                                                  }
                                                              },
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "component",
                                                                      "dependency": {
                                                                          "type": "local"
                                                                      },
                                                                      "referencedStyles": {},
                                                                      "abilities": {},
                                                                      "attrs": {
                                                                          "image_src": {
                                                                              "type": "static",
                                                                              "content": "https://images.unsplash.com/photo-1531829039722-d3fb3e705a4b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&ixlib=rb-1.2.1&h=1000"
                                                                          },
                                                                          "rootClassName": {
                                                                              "type": "comp-style",
                                                                              "content": "rootClassName2"
                                                                          }
                                                                      },
                                                                      "children": [],
                                                                      "semanticType": "GalleryCard3"
                                                                  }
                                                              },
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "component",
                                                                      "dependency": {
                                                                          "type": "local"
                                                                      },
                                                                      "referencedStyles": {},
                                                                      "abilities": {},
                                                                      "attrs": {
                                                                          "image_src": {
                                                                              "type": "static",
                                                                              "content": "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&ixlib=rb-1.2.1&h=1000"
                                                                          },
                                                                          "rootClassName": {
                                                                              "type": "comp-style",
                                                                              "content": "rootClassName4"
                                                                          }
                                                                      },
                                                                      "children": [],
                                                                      "semanticType": "GalleryCard3"
                                                                  }
                                                              },
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "component",
                                                                      "dependency": {
                                                                          "type": "local"
                                                                      },
                                                                      "referencedStyles": {},
                                                                      "abilities": {},
                                                                      "attrs": {
                                                                          "image_src": {
                                                                              "type": "static",
                                                                              "content": "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&ixlib=rb-1.2.1&h=1000"
                                                                          },
                                                                          "rootClassName": {
                                                                              "type": "comp-style",
                                                                              "content": "rootClassName5"
                                                                          }
                                                                      },
                                                                      "children": [],
                                                                      "semanticType": "GalleryCard3"
                                                                  }
                                                              },
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "component",
                                                                      "dependency": {
                                                                          "type": "local"
                                                                      },
                                                                      "referencedStyles": {},
                                                                      "abilities": {},
                                                                      "attrs": {
                                                                          "image_src": {
                                                                              "type": "static",
                                                                              "content": "https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&ixlib=rb-1.2.1&h=1000"
                                                                          },
                                                                          "rootClassName": {
                                                                              "type": "comp-style",
                                                                              "content": "rootClassName6"
                                                                          }
                                                                      },
                                                                      "children": [],
                                                                      "semanticType": "GalleryCard3"
                                                                  }
                                                              },
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "component",
                                                                      "dependency": {
                                                                          "type": "local"
                                                                      },
                                                                      "referencedStyles": {},
                                                                      "abilities": {},
                                                                      "attrs": {
                                                                          "image_src": {
                                                                              "type": "static",
                                                                              "content": "https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&ixlib=rb-1.2.1&h=1000"
                                                                          },
                                                                          "rootClassName": {
                                                                              "type": "comp-style",
                                                                              "content": "rootClassName7"
                                                                          }
                                                                      },
                                                                      "children": [],
                                                                      "semanticType": "GalleryCard3"
                                                                  }
                                                              },
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "component",
                                                                      "dependency": {
                                                                          "type": "local"
                                                                      },
                                                                      "referencedStyles": {},
                                                                      "abilities": {},
                                                                      "attrs": {
                                                                          "image_src": {
                                                                              "type": "static",
                                                                              "content": "https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&ixlib=rb-1.2.1&h=1000"
                                                                          },
                                                                          "rootClassName": {
                                                                              "type": "comp-style",
                                                                              "content": "rootClassName8"
                                                                          }
                                                                      },
                                                                      "children": [],
                                                                      "semanticType": "GalleryCard3"
                                                                  }
                                                              },
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "component",
                                                                      "dependency": {
                                                                          "type": "local"
                                                                      },
                                                                      "referencedStyles": {},
                                                                      "abilities": {},
                                                                      "attrs": {
                                                                          "image_src": {
                                                                              "type": "static",
                                                                              "content": "https://images.unsplash.com/photo-1510172951991-856a654063f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&ixlib=rb-1.2.1&h=1000"
                                                                          },
                                                                          "rootClassName": {
                                                                              "type": "comp-style",
                                                                              "content": "rootClassName9"
                                                                          }
                                                                      },
                                                                      "children": [],
                                                                      "semanticType": "GalleryCard3"
                                                                  }
                                                              },
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "component",
                                                                      "dependency": {
                                                                          "type": "local"
                                                                      },
                                                                      "referencedStyles": {},
                                                                      "abilities": {},
                                                                      "attrs": {
                                                                          "image_src": {
                                                                              "type": "static",
                                                                              "content": "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&ixlib=rb-1.2.1&h=1000"
                                                                          },
                                                                          "rootClassName": {
                                                                              "type": "comp-style",
                                                                              "content": "rootClassName10"
                                                                          }
                                                                      },
                                                                      "children": [],
                                                                      "semanticType": "GalleryCard3"
                                                                  }
                                                              },
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "component",
                                                                      "dependency": {
                                                                          "type": "local"
                                                                      },
                                                                      "referencedStyles": {},
                                                                      "abilities": {},
                                                                      "attrs": {
                                                                          "image_src": {
                                                                              "type": "static",
                                                                              "content": "https://images.unsplash.com/photo-1472157510410-64a053cbc39f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&ixlib=rb-1.2.1&h=1000"
                                                                          },
                                                                          "rootClassName": {
                                                                              "type": "comp-style",
                                                                              "content": "rootClassName11"
                                                                          }
                                                                      },
                                                                      "children": [],
                                                                      "semanticType": "GalleryCard3"
                                                                  }
                                                              }
                                                          ],
                                                          "semanticType": "div"
                                                      }
                                                  }
                                              ],
                                              "semanticType": "div"
                                          }
                                      },
                                      {
                                          "type": "element",
                                          "content": {
                                              "elementType": "container",
                                              "name": "Pricing",
                                              "referencedStyles": {},
                                              "abilities": {},
                                              "style": {
                                                  "width": {
                                                      "type": "static",
                                                      "content": "100%"
                                                  },
                                                  "display": {
                                                      "type": "static",
                                                      "content": "flex"
                                                  },
                                                  "backgroundSize": {
                                                      "type": "static",
                                                      "content": "cover"
                                                  },
                                                  "justifyContent": {
                                                      "type": "static",
                                                      "content": "center"
                                                  },
                                                  "backgroundImage": {
                                                      "type": "static",
                                                      "content": "url('https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxzd2lzcyUyMGNoZWVzZSUyMHBsYW50fGVufDB8fHx8MTYyNTg0MTU0Mg&ixlib=rb-1.2.1&h=1200')"
                                                  },
                                                  "backgroundPosition": {
                                                      "type": "static",
                                                      "content": "center"
                                                  }
                                              },
                                              "children": [
                                                  {
                                                      "type": "element",
                                                      "content": {
                                                          "elementType": "container",
                                                          "referencedStyles": {
                                                              "a2125a63-cbeb-43b0-9529-e7ac2c8f9b2a": {
                                                                  "type": "style-map",
                                                                  "content": {
                                                                      "conditions": [
                                                                          {
                                                                              "conditionType": "screen-size",
                                                                              "maxWidth": 767
                                                                          }
                                                                      ],
                                                                      "mapType": "inlined",
                                                                      "styles": {
                                                                          "flexFlow": {
                                                                              "type": "static",
                                                                              "content": "column"
                                                                          },
                                                                          "paddingLeft": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-space-space-twounits"
                                                                              }
                                                                          },
                                                                          "paddingRight": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-space-space-twounits"
                                                                              }
                                                                          }
                                                                      }
                                                                  }
                                                              },
                                                              "6c080f4f-f43d-4d98-9e8c-06577ec49b16": {
                                                                  "type": "style-map",
                                                                  "content": {
                                                                      "conditions": [
                                                                          {
                                                                              "conditionType": "screen-size",
                                                                              "maxWidth": 479
                                                                          }
                                                                      ],
                                                                      "mapType": "inlined",
                                                                      "styles": {
                                                                          "paddingTop": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-space-space-twounits"
                                                                              }
                                                                          },
                                                                          "paddingLeft": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-space-space-unit"
                                                                              }
                                                                          },
                                                                          "paddingRight": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-space-space-unit"
                                                                              }
                                                                          },
                                                                          "paddingBottom": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-space-space-twounits"
                                                                              }
                                                                          }
                                                                      }
                                                                  }
                                                              }
                                                          },
                                                          "abilities": {},
                                                          "style": {
                                                              "width": {
                                                                  "type": "static",
                                                                  "content": "100%"
                                                              },
                                                              "display": {
                                                                  "type": "static",
                                                                  "content": "flex"
                                                              },
                                                              "padding": {
                                                                  "type": "dynamic",
                                                                  "content": {
                                                                      "referenceType": "token",
                                                                      "id": "--dl-space-space-threeunits"
                                                                  }
                                                              },
                                                              "maxWidth": {
                                                                  "type": "dynamic",
                                                                  "content": {
                                                                      "referenceType": "token",
                                                                      "id": "--dl-size-size-maxwidth"
                                                                  }
                                                              },
                                                              "alignItems": {
                                                                  "type": "static",
                                                                  "content": "center"
                                                              },
                                                              "backgroundSize": {
                                                                  "type": "static",
                                                                  "content": "cover"
                                                              },
                                                              "justifyContent": {
                                                                  "type": "static",
                                                                  "content": "center"
                                                              }
                                                          },
                                                          "children": [
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "container",
                                                                      "name": "PricingCard",
                                                                      "referencedStyles": {
                                                                          "4c7bef1b-4917-4ebc-bd58-ffff46cca3c7": {
                                                                              "type": "style-map",
                                                                              "content": {
                                                                                  "conditions": [
                                                                                      {
                                                                                          "conditionType": "element-state",
                                                                                          "content": "hover"
                                                                                      }
                                                                                  ],
                                                                                  "mapType": "inlined",
                                                                                  "styles": {
                                                                                      "transform": {
                                                                                          "type": "static",
                                                                                          "content": "scale(1.02)"
                                                                                      }
                                                                                  }
                                                                              }
                                                                          },
                                                                          "fbb0f3c6-a5e5-4b66-8864-2aecd48d6e83": {
                                                                              "type": "style-map",
                                                                              "content": {
                                                                                  "conditions": [
                                                                                      {
                                                                                          "conditionType": "screen-size",
                                                                                          "maxWidth": 767
                                                                                      }
                                                                                  ],
                                                                                  "mapType": "inlined",
                                                                                  "styles": {
                                                                                      "width": {
                                                                                          "type": "static",
                                                                                          "content": "100%"
                                                                                      },
                                                                                      "maxWidth": {
                                                                                          "type": "static",
                                                                                          "content": "450px"
                                                                                      },
                                                                                      "alignItems": {
                                                                                          "type": "static",
                                                                                          "content": "center"
                                                                                      },
                                                                                      "marginRight": {
                                                                                          "type": "static",
                                                                                          "content": "0px"
                                                                                      },
                                                                                      "marginBottom": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-twounits"
                                                                                          }
                                                                                      }
                                                                                  }
                                                                              }
                                                                          },
                                                                          "24eecf33-f1c7-4451-9bd3-1c5b5b1d5c32": {
                                                                              "type": "style-map",
                                                                              "content": {
                                                                                  "conditions": [
                                                                                      {
                                                                                          "conditionType": "screen-size",
                                                                                          "maxWidth": 991
                                                                                      }
                                                                                  ],
                                                                                  "mapType": "inlined",
                                                                                  "styles": {
                                                                                      "width": {
                                                                                          "type": "static",
                                                                                          "content": "100%"
                                                                                      },
                                                                                      "padding": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-twounits"
                                                                                          }
                                                                                      },
                                                                                      "maxWidth": {
                                                                                          "type": "static",
                                                                                          "content": "100%"
                                                                                      },
                                                                                      "alignItems": {
                                                                                          "type": "static",
                                                                                          "content": "center"
                                                                                      }
                                                                                  }
                                                                              }
                                                                          }
                                                                      },
                                                                      "abilities": {},
                                                                      "style": {
                                                                          "width": {
                                                                              "type": "static",
                                                                              "content": "100%"
                                                                          },
                                                                          "display": {
                                                                              "type": "static",
                                                                              "content": "flex"
                                                                          },
                                                                          "padding": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-space-space-threeunits"
                                                                              }
                                                                          },
                                                                          "maxWidth": {
                                                                              "type": "static",
                                                                              "content": "450px"
                                                                          },
                                                                          "minHeight": {
                                                                              "type": "static",
                                                                              "content": "450px"
                                                                          },
                                                                          "alignItems": {
                                                                              "type": "static",
                                                                              "content": "flex-start"
                                                                          },
                                                                          "paddingTop": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-space-space-twounits"
                                                                              }
                                                                          },
                                                                          "transition": {
                                                                              "type": "static",
                                                                              "content": "0.3s"
                                                                          },
                                                                          "marginRight": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-space-space-twounits"
                                                                              }
                                                                          },
                                                                          "paddingLeft": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-space-space-twounits"
                                                                              }
                                                                          },
                                                                          "paddingRight": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-space-space-twounits"
                                                                              }
                                                                          },
                                                                          "flexDirection": {
                                                                              "type": "static",
                                                                              "content": "column"
                                                                          },
                                                                          "paddingBottom": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-space-space-twounits"
                                                                              }
                                                                          },
                                                                          "justifyContent": {
                                                                              "type": "static",
                                                                              "content": "space-between"
                                                                          },
                                                                          "backgroundColor": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-color-gray-white"
                                                                              }
                                                                          }
                                                                      },
                                                                      "children": [
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "text",
                                                                                  "referencedStyles": {},
                                                                                  "abilities": {},
                                                                                  "style": {
                                                                                      "fontSize": {
                                                                                          "type": "static",
                                                                                          "content": "1.5rem"
                                                                                      },
                                                                                      "fontWeight": {
                                                                                          "type": "static",
                                                                                          "content": "600"
                                                                                      },
                                                                                      "marginBottom": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-twounits"
                                                                                          }
                                                                                      },
                                                                                      "textTransform": {
                                                                                          "type": "static",
                                                                                          "content": "uppercase"
                                                                                      }
                                                                                  },
                                                                                  "children": [
                                                                                      {
                                                                                          "type": "static",
                                                                                          "content": "Free"
                                                                                      }
                                                                                  ],
                                                                                  "semanticType": "span"
                                                                              }
                                                                          },
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "container",
                                                                                  "referencedStyles": {},
                                                                                  "abilities": {},
                                                                                  "style": {
                                                                                      "display": {
                                                                                          "type": "static",
                                                                                          "content": "flex"
                                                                                      },
                                                                                      "alignItems": {
                                                                                          "type": "static",
                                                                                          "content": "center"
                                                                                      },
                                                                                      "marginBottom": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-twounits"
                                                                                          }
                                                                                      },
                                                                                      "flexDirection": {
                                                                                          "type": "static",
                                                                                          "content": "row"
                                                                                      }
                                                                                  },
                                                                                  "children": [
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "fontSize": {
                                                                                                      "type": "static",
                                                                                                      "content": "1.15rem"
                                                                                                  },
                                                                                                  "marginTop": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-twounits"
                                                                                                      }
                                                                                                  },
                                                                                                  "fontWeight": {
                                                                                                      "type": "static",
                                                                                                      "content": "300"
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "$"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      },
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "fontSize": {
                                                                                                      "type": "static",
                                                                                                      "content": "4rem"
                                                                                                  },
                                                                                                  "fontWeight": {
                                                                                                      "type": "static",
                                                                                                      "content": "700"
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "static",
                                                                                                      "content": "0"
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      }
                                                                                  ],
                                                                                  "semanticType": "div"
                                                                              }
                                                                          },
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "container",
                                                                                  "referencedStyles": {},
                                                                                  "abilities": {},
                                                                                  "style": {
                                                                                      "display": {
                                                                                          "type": "static",
                                                                                          "content": "flex"
                                                                                      },
                                                                                      "alignItems": {
                                                                                          "type": "static",
                                                                                          "content": "flex-start"
                                                                                      },
                                                                                      "marginBottom": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-threeunits"
                                                                                          }
                                                                                      },
                                                                                      "flexDirection": {
                                                                                          "type": "static",
                                                                                          "content": "column"
                                                                                      }
                                                                                  },
                                                                                  "children": [
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "marginBottom": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-unit"
                                                                                                      }
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "✔ Full access to design tool"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      },
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "marginBottom": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-unit"
                                                                                                      }
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "✔ Publish with Teleport"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      },
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "marginBottom": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-unit"
                                                                                                      }
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "✔ Subdomain publish"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      },
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "marginBottom": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-unit"
                                                                                                      }
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "✔ Download code"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      }
                                                                                  ],
                                                                                  "semanticType": "div"
                                                                              }
                                                                          },
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "button",
                                                                                  "referencedStyles": {
                                                                                      "6bd2b679-67f7-4227-83a3-ea89ec6419e9": {
                                                                                          "type": "style-map",
                                                                                          "content": {
                                                                                              "mapType": "project-referenced",
                                                                                              "referenceId": "button"
                                                                                          }
                                                                                      }
                                                                                  },
                                                                                  "abilities": {},
                                                                                  "style": {
                                                                                      "color": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-color-gray-white"
                                                                                          }
                                                                                      },
                                                                                      "marginTop": {
                                                                                          "type": "static",
                                                                                          "content": "auto"
                                                                                      },
                                                                                      "paddingTop": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-unit"
                                                                                          }
                                                                                      },
                                                                                      "paddingLeft": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-twounits"
                                                                                          }
                                                                                      },
                                                                                      "paddingRight": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-twounits"
                                                                                          }
                                                                                      },
                                                                                      "paddingBottom": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-unit"
                                                                                          }
                                                                                      },
                                                                                      "backgroundColor": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-color-gray-black"
                                                                                          }
                                                                                      }
                                                                                  },
                                                                                  "children": [
                                                                                      {
                                                                                          "type": "static",
                                                                                          "content": "Learn More"
                                                                                      }
                                                                                  ]
                                                                              }
                                                                          }
                                                                      ],
                                                                      "semanticType": "div"
                                                                  }
                                                              },
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "container",
                                                                      "name": "PricingCard",
                                                                      "referencedStyles": {
                                                                          "2eb61348-d9b8-486c-a6da-2d4772461273": {
                                                                              "type": "style-map",
                                                                              "content": {
                                                                                  "conditions": [
                                                                                      {
                                                                                          "conditionType": "element-state",
                                                                                          "content": "hover"
                                                                                      }
                                                                                  ],
                                                                                  "mapType": "inlined",
                                                                                  "styles": {
                                                                                      "transform": {
                                                                                          "type": "static",
                                                                                          "content": "scale(1.02)"
                                                                                      }
                                                                                  }
                                                                              }
                                                                          },
                                                                          "d83eb5db-d509-4d8e-b3ea-ab00555d9bc1": {
                                                                              "type": "style-map",
                                                                              "content": {
                                                                                  "conditions": [
                                                                                      {
                                                                                          "conditionType": "screen-size",
                                                                                          "maxWidth": 991
                                                                                      }
                                                                                  ],
                                                                                  "mapType": "inlined",
                                                                                  "styles": {
                                                                                      "width": {
                                                                                          "type": "static",
                                                                                          "content": "100%"
                                                                                      },
                                                                                      "maxWidth": {
                                                                                          "type": "static",
                                                                                          "content": "100%"
                                                                                      },
                                                                                      "alignItems": {
                                                                                          "type": "static",
                                                                                          "content": "center"
                                                                                      }
                                                                                  }
                                                                              }
                                                                          },
                                                                          "1284ff41-ddec-4fff-be50-00d190082788": {
                                                                              "type": "style-map",
                                                                              "content": {
                                                                                  "conditions": [
                                                                                      {
                                                                                          "conditionType": "screen-size",
                                                                                          "maxWidth": 767
                                                                                      }
                                                                                  ],
                                                                                  "mapType": "inlined",
                                                                                  "styles": {
                                                                                      "width": {
                                                                                          "type": "static",
                                                                                          "content": "100%"
                                                                                      },
                                                                                      "maxWidth": {
                                                                                          "type": "static",
                                                                                          "content": "450px"
                                                                                      },
                                                                                      "alignItems": {
                                                                                          "type": "static",
                                                                                          "content": "center"
                                                                                      },
                                                                                      "marginRight": {
                                                                                          "type": "static",
                                                                                          "content": "0px"
                                                                                      },
                                                                                      "marginBottom": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-twounits"
                                                                                          }
                                                                                      }
                                                                                  }
                                                                              }
                                                                          }
                                                                      },
                                                                      "abilities": {},
                                                                      "style": {
                                                                          "width": {
                                                                              "type": "static",
                                                                              "content": "100%"
                                                                          },
                                                                          "display": {
                                                                              "type": "static",
                                                                              "content": "flex"
                                                                          },
                                                                          "padding": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-space-space-twounits"
                                                                              }
                                                                          },
                                                                          "maxWidth": {
                                                                              "type": "static",
                                                                              "content": "450px"
                                                                          },
                                                                          "minHeight": {
                                                                              "type": "static",
                                                                              "content": "450px"
                                                                          },
                                                                          "alignItems": {
                                                                              "type": "static",
                                                                              "content": "flex-start"
                                                                          },
                                                                          "transition": {
                                                                              "type": "static",
                                                                              "content": "0.3s"
                                                                          },
                                                                          "marginRight": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-space-space-twounits"
                                                                              }
                                                                          },
                                                                          "flexDirection": {
                                                                              "type": "static",
                                                                              "content": "column"
                                                                          },
                                                                          "backgroundColor": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-color-gray-white"
                                                                              }
                                                                          }
                                                                      },
                                                                      "children": [
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "text",
                                                                                  "referencedStyles": {},
                                                                                  "abilities": {},
                                                                                  "style": {
                                                                                      "fontSize": {
                                                                                          "type": "static",
                                                                                          "content": "1.5rem"
                                                                                      },
                                                                                      "fontWeight": {
                                                                                          "type": "static",
                                                                                          "content": "600"
                                                                                      },
                                                                                      "marginBottom": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-twounits"
                                                                                          }
                                                                                      },
                                                                                      "textTransform": {
                                                                                          "type": "static",
                                                                                          "content": "uppercase"
                                                                                      }
                                                                                  },
                                                                                  "children": [
                                                                                      {
                                                                                          "type": "static",
                                                                                          "content": "basic"
                                                                                      }
                                                                                  ],
                                                                                  "semanticType": "span"
                                                                              }
                                                                          },
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "container",
                                                                                  "referencedStyles": {},
                                                                                  "abilities": {},
                                                                                  "style": {
                                                                                      "display": {
                                                                                          "type": "static",
                                                                                          "content": "flex"
                                                                                      },
                                                                                      "alignItems": {
                                                                                          "type": "static",
                                                                                          "content": "center"
                                                                                      },
                                                                                      "marginBottom": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-twounits"
                                                                                          }
                                                                                      },
                                                                                      "flexDirection": {
                                                                                          "type": "static",
                                                                                          "content": "row"
                                                                                      }
                                                                                  },
                                                                                  "children": [
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "fontSize": {
                                                                                                      "type": "static",
                                                                                                      "content": "1.15rem"
                                                                                                  },
                                                                                                  "marginTop": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-twounits"
                                                                                                      }
                                                                                                  },
                                                                                                  "fontWeight": {
                                                                                                      "type": "static",
                                                                                                      "content": "300"
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "$"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      },
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "fontSize": {
                                                                                                      "type": "static",
                                                                                                      "content": "4rem"
                                                                                                  },
                                                                                                  "fontWeight": {
                                                                                                      "type": "static",
                                                                                                      "content": "700"
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "static",
                                                                                                      "content": "9"
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      },
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "fontSize": {
                                                                                                      "type": "static",
                                                                                                      "content": "1.15rem"
                                                                                                  },
                                                                                                  "fontStyle": {
                                                                                                      "type": "static",
                                                                                                      "content": "normal"
                                                                                                  },
                                                                                                  "marginTop": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-twounits"
                                                                                                      }
                                                                                                  },
                                                                                                  "fontWeight": {
                                                                                                      "type": "static",
                                                                                                      "content": "300"
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "/ monthly"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      }
                                                                                  ],
                                                                                  "semanticType": "div"
                                                                              }
                                                                          },
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "text",
                                                                                  "referencedStyles": {},
                                                                                  "abilities": {},
                                                                                  "style": {
                                                                                      "color": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-color-gray-500"
                                                                                          }
                                                                                      },
                                                                                      "fontSize": {
                                                                                          "type": "static",
                                                                                          "content": "0.75rem"
                                                                                      },
                                                                                      "marginBottom": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-twounits"
                                                                                          }
                                                                                      }
                                                                                  },
                                                                                  "children": [
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "static",
                                                                                                      "content": "Billed annualy or $12 month-to-month."
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      },
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "children": [],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      }
                                                                                  ],
                                                                                  "semanticType": "span"
                                                                              }
                                                                          },
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "container",
                                                                                  "referencedStyles": {},
                                                                                  "abilities": {},
                                                                                  "style": {
                                                                                      "display": {
                                                                                          "type": "static",
                                                                                          "content": "flex"
                                                                                      },
                                                                                      "alignItems": {
                                                                                          "type": "static",
                                                                                          "content": "flex-start"
                                                                                      },
                                                                                      "marginBottom": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-threeunits"
                                                                                          }
                                                                                      },
                                                                                      "flexDirection": {
                                                                                          "type": "static",
                                                                                          "content": "column"
                                                                                      }
                                                                                  },
                                                                                  "children": [
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "marginBottom": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-unit"
                                                                                                      }
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "✔ All features of FREE plan"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      },
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "marginBottom": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-unit"
                                                                                                      }
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "✔ Connect to custom domains"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      },
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "marginBottom": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-unit"
                                                                                                      }
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "✔ Private projects"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      },
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "marginBottom": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-unit"
                                                                                                      }
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "✔ No project limitations"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      },
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "marginBottom": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-unit"
                                                                                                      }
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "✔ Unlimited collabotators"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      }
                                                                                  ],
                                                                                  "semanticType": "div"
                                                                              }
                                                                          },
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "button",
                                                                                  "referencedStyles": {
                                                                                      "b04dd5a2-d42d-4b26-8502-a39fb959acd0": {
                                                                                          "type": "style-map",
                                                                                          "content": {
                                                                                              "mapType": "project-referenced",
                                                                                              "referenceId": "button"
                                                                                          }
                                                                                      }
                                                                                  },
                                                                                  "abilities": {},
                                                                                  "style": {
                                                                                      "color": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-color-gray-white"
                                                                                          }
                                                                                      },
                                                                                      "marginTop": {
                                                                                          "type": "static",
                                                                                          "content": "auto"
                                                                                      },
                                                                                      "paddingTop": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-unit"
                                                                                          }
                                                                                      },
                                                                                      "paddingLeft": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-twounits"
                                                                                          }
                                                                                      },
                                                                                      "paddingRight": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-twounits"
                                                                                          }
                                                                                      },
                                                                                      "paddingBottom": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-unit"
                                                                                          }
                                                                                      },
                                                                                      "backgroundColor": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-color-gray-black"
                                                                                          }
                                                                                      }
                                                                                  },
                                                                                  "children": [
                                                                                      {
                                                                                          "type": "static",
                                                                                          "content": "Learn More"
                                                                                      }
                                                                                  ]
                                                                              }
                                                                          }
                                                                      ],
                                                                      "semanticType": "div"
                                                                  }
                                                              },
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "container",
                                                                      "name": "PricingCard",
                                                                      "referencedStyles": {
                                                                          "620ab363-8615-4d67-8466-b1ac334928f4": {
                                                                              "type": "style-map",
                                                                              "content": {
                                                                                  "conditions": [
                                                                                      {
                                                                                          "conditionType": "element-state",
                                                                                          "content": "hover"
                                                                                      }
                                                                                  ],
                                                                                  "mapType": "inlined",
                                                                                  "styles": {
                                                                                      "transform": {
                                                                                          "type": "static",
                                                                                          "content": "scale(1.02)"
                                                                                      }
                                                                                  }
                                                                              }
                                                                          },
                                                                          "daa149de-f2b1-4985-9448-d20e00c20ecd": {
                                                                              "type": "style-map",
                                                                              "content": {
                                                                                  "conditions": [
                                                                                      {
                                                                                          "conditionType": "screen-size",
                                                                                          "maxWidth": 991
                                                                                      }
                                                                                  ],
                                                                                  "mapType": "inlined",
                                                                                  "styles": {
                                                                                      "width": {
                                                                                          "type": "static",
                                                                                          "content": "100%"
                                                                                      },
                                                                                      "maxWidth": {
                                                                                          "type": "static",
                                                                                          "content": "100%"
                                                                                      },
                                                                                      "alignItems": {
                                                                                          "type": "static",
                                                                                          "content": "center"
                                                                                      }
                                                                                  }
                                                                              }
                                                                          },
                                                                          "4e543b68-d747-4cfb-98cd-aeefcd8d5e47": {
                                                                              "type": "style-map",
                                                                              "content": {
                                                                                  "conditions": [
                                                                                      {
                                                                                          "conditionType": "screen-size",
                                                                                          "maxWidth": 767
                                                                                      }
                                                                                  ],
                                                                                  "mapType": "inlined",
                                                                                  "styles": {
                                                                                      "width": {
                                                                                          "type": "static",
                                                                                          "content": "100%"
                                                                                      },
                                                                                      "maxWidth": {
                                                                                          "type": "static",
                                                                                          "content": "450px"
                                                                                      },
                                                                                      "alignItems": {
                                                                                          "type": "static",
                                                                                          "content": "center"
                                                                                      },
                                                                                      "marginRight": {
                                                                                          "type": "static",
                                                                                          "content": "0px"
                                                                                      },
                                                                                      "marginBottom": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-twounits"
                                                                                          }
                                                                                      }
                                                                                  }
                                                                              }
                                                                          },
                                                                          "9b56b8f5-6ad1-45a9-95b9-d20f51ea92ac": {
                                                                              "type": "style-map",
                                                                              "content": {
                                                                                  "conditions": [
                                                                                      {
                                                                                          "conditionType": "screen-size",
                                                                                          "maxWidth": 479
                                                                                      }
                                                                                  ],
                                                                                  "mapType": "inlined",
                                                                                  "styles": {
                                                                                      "marginBottom": {
                                                                                          "type": "static",
                                                                                          "content": "0px"
                                                                                      }
                                                                                  }
                                                                              }
                                                                          }
                                                                      },
                                                                      "abilities": {},
                                                                      "style": {
                                                                          "width": {
                                                                              "type": "static",
                                                                              "content": "100%"
                                                                          },
                                                                          "display": {
                                                                              "type": "static",
                                                                              "content": "flex"
                                                                          },
                                                                          "padding": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-space-space-threeunits"
                                                                              }
                                                                          },
                                                                          "maxWidth": {
                                                                              "type": "static",
                                                                              "content": "450px"
                                                                          },
                                                                          "minHeight": {
                                                                              "type": "static",
                                                                              "content": "450px"
                                                                          },
                                                                          "alignItems": {
                                                                              "type": "static",
                                                                              "content": "flex-start"
                                                                          },
                                                                          "paddingTop": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-space-space-twounits"
                                                                              }
                                                                          },
                                                                          "transition": {
                                                                              "type": "static",
                                                                              "content": "0.3s"
                                                                          },
                                                                          "paddingLeft": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-space-space-twounits"
                                                                              }
                                                                          },
                                                                          "paddingRight": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-space-space-twounits"
                                                                              }
                                                                          },
                                                                          "flexDirection": {
                                                                              "type": "static",
                                                                              "content": "column"
                                                                          },
                                                                          "paddingBottom": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-space-space-twounits"
                                                                              }
                                                                          },
                                                                          "backgroundColor": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-color-gray-white"
                                                                              }
                                                                          }
                                                                      },
                                                                      "children": [
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "text",
                                                                                  "referencedStyles": {},
                                                                                  "abilities": {},
                                                                                  "style": {
                                                                                      "fontSize": {
                                                                                          "type": "static",
                                                                                          "content": "1.5rem"
                                                                                      },
                                                                                      "fontWeight": {
                                                                                          "type": "static",
                                                                                          "content": "600"
                                                                                      },
                                                                                      "marginBottom": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-twounits"
                                                                                          }
                                                                                      },
                                                                                      "textTransform": {
                                                                                          "type": "static",
                                                                                          "content": "uppercase"
                                                                                      }
                                                                                  },
                                                                                  "children": [
                                                                                      {
                                                                                          "type": "static",
                                                                                          "content": "Pro"
                                                                                      }
                                                                                  ],
                                                                                  "semanticType": "span"
                                                                              }
                                                                          },
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "container",
                                                                                  "referencedStyles": {},
                                                                                  "abilities": {},
                                                                                  "style": {
                                                                                      "display": {
                                                                                          "type": "static",
                                                                                          "content": "flex"
                                                                                      },
                                                                                      "alignItems": {
                                                                                          "type": "static",
                                                                                          "content": "center"
                                                                                      },
                                                                                      "marginBottom": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-twounits"
                                                                                          }
                                                                                      },
                                                                                      "flexDirection": {
                                                                                          "type": "static",
                                                                                          "content": "row"
                                                                                      }
                                                                                  },
                                                                                  "children": [
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "fontSize": {
                                                                                                      "type": "static",
                                                                                                      "content": "1.15rem"
                                                                                                  },
                                                                                                  "marginTop": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-twounits"
                                                                                                      }
                                                                                                  },
                                                                                                  "fontWeight": {
                                                                                                      "type": "static",
                                                                                                      "content": "300"
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "$"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      },
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "fontSize": {
                                                                                                      "type": "static",
                                                                                                      "content": "4rem"
                                                                                                  },
                                                                                                  "fontWeight": {
                                                                                                      "type": "static",
                                                                                                      "content": "700"
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "static",
                                                                                                      "content": "29"
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      },
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "fontSize": {
                                                                                                      "type": "static",
                                                                                                      "content": "1.15rem"
                                                                                                  },
                                                                                                  "fontStyle": {
                                                                                                      "type": "static",
                                                                                                      "content": "normal"
                                                                                                  },
                                                                                                  "marginTop": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-twounits"
                                                                                                      }
                                                                                                  },
                                                                                                  "fontWeight": {
                                                                                                      "type": "static",
                                                                                                      "content": "300"
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "/ monthly"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      }
                                                                                  ],
                                                                                  "semanticType": "div"
                                                                              }
                                                                          },
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "text",
                                                                                  "referencedStyles": {},
                                                                                  "abilities": {},
                                                                                  "style": {
                                                                                      "color": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-color-gray-500"
                                                                                          }
                                                                                      },
                                                                                      "fontSize": {
                                                                                          "type": "static",
                                                                                          "content": "0.75rem"
                                                                                      },
                                                                                      "marginBottom": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-twounits"
                                                                                          }
                                                                                      }
                                                                                  },
                                                                                  "children": [
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "static",
                                                                                                      "content": "Billed annualy or $32 month-to-month."
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      },
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "children": [],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      }
                                                                                  ],
                                                                                  "semanticType": "span"
                                                                              }
                                                                          },
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "container",
                                                                                  "referencedStyles": {},
                                                                                  "abilities": {},
                                                                                  "style": {
                                                                                      "display": {
                                                                                          "type": "static",
                                                                                          "content": "flex"
                                                                                      },
                                                                                      "alignItems": {
                                                                                          "type": "static",
                                                                                          "content": "flex-start"
                                                                                      },
                                                                                      "marginBottom": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-unit"
                                                                                          }
                                                                                      },
                                                                                      "flexDirection": {
                                                                                          "type": "static",
                                                                                          "content": "column"
                                                                                      }
                                                                                  },
                                                                                  "children": [
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "marginBottom": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-unit"
                                                                                                      }
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "✔ All features of BASIC plan"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      },
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "marginBottom": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-unit"
                                                                                                      }
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "✔ Priority support"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      },
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "marginBottom": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-unit"
                                                                                                      }
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "✔ Premium analytics"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      },
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "marginBottom": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-unit"
                                                                                                      }
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "✔ Version history"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      }
                                                                                  ],
                                                                                  "semanticType": "div"
                                                                              }
                                                                          },
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "button",
                                                                                  "referencedStyles": {
                                                                                      "6aca2dba-b64d-4717-bfe3-f878117af483": {
                                                                                          "type": "style-map",
                                                                                          "content": {
                                                                                              "mapType": "project-referenced",
                                                                                              "referenceId": "button"
                                                                                          }
                                                                                      }
                                                                                  },
                                                                                  "abilities": {},
                                                                                  "style": {
                                                                                      "color": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-color-gray-white"
                                                                                          }
                                                                                      },
                                                                                      "marginTop": {
                                                                                          "type": "static",
                                                                                          "content": "auto"
                                                                                      },
                                                                                      "paddingTop": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-unit"
                                                                                          }
                                                                                      },
                                                                                      "paddingLeft": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-twounits"
                                                                                          }
                                                                                      },
                                                                                      "paddingRight": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-twounits"
                                                                                          }
                                                                                      },
                                                                                      "paddingBottom": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-unit"
                                                                                          }
                                                                                      },
                                                                                      "backgroundColor": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-color-gray-black"
                                                                                          }
                                                                                      }
                                                                                  },
                                                                                  "children": [
                                                                                      {
                                                                                          "type": "static",
                                                                                          "content": "Learn More"
                                                                                      }
                                                                                  ]
                                                                              }
                                                                          }
                                                                      ],
                                                                      "semanticType": "div"
                                                                  }
                                                              }
                                                          ],
                                                          "semanticType": "div"
                                                      }
                                                  }
                                              ],
                                              "semanticType": "div"
                                          }
                                      },
                                      {
                                          "type": "element",
                                          "content": {
                                              "elementType": "container",
                                              "name": "Footer",
                                              "referencedStyles": {
                                                  "ac03a616-c920-4c7a-aa56-b28289887daa": {
                                                      "type": "style-map",
                                                      "content": {
                                                          "conditions": [
                                                              {
                                                                  "conditionType": "screen-size",
                                                                  "maxWidth": 767
                                                              }
                                                          ],
                                                          "mapType": "inlined",
                                                          "styles": {
                                                              "paddingLeft": {
                                                                  "type": "dynamic",
                                                                  "content": {
                                                                      "referenceType": "token",
                                                                      "id": "--dl-space-space-twounits"
                                                                  }
                                                              },
                                                              "paddingRight": {
                                                                  "type": "dynamic",
                                                                  "content": {
                                                                      "referenceType": "token",
                                                                      "id": "--dl-space-space-twounits"
                                                                  }
                                                              }
                                                          }
                                                      }
                                                  },
                                                  "4869893b-b47d-45e1-b57b-fb13aa372fac": {
                                                      "type": "style-map",
                                                      "content": {
                                                          "conditions": [
                                                              {
                                                                  "conditionType": "screen-size",
                                                                  "maxWidth": 479
                                                              }
                                                          ],
                                                          "mapType": "inlined",
                                                          "styles": {
                                                              "padding": {
                                                                  "type": "dynamic",
                                                                  "content": {
                                                                      "referenceType": "token",
                                                                      "id": "--dl-space-space-unit"
                                                                  }
                                                              }
                                                          }
                                                      }
                                                  },
                                                  "fd48bb4d-c79b-4f00-aae6-bc08cd53ad18": {
                                                      "type": "style-map",
                                                      "content": {
                                                          "conditions": [
                                                              {
                                                                  "conditionType": "screen-size",
                                                                  "maxWidth": 991
                                                              }
                                                          ],
                                                          "mapType": "inlined",
                                                          "styles": {
                                                              "flexDirection": {
                                                                  "type": "static",
                                                                  "content": "column"
                                                              }
                                                          }
                                                      }
                                                  }
                                              },
                                              "abilities": {},
                                              "style": {
                                                  "width": {
                                                      "type": "static",
                                                      "content": "100%"
                                                  },
                                                  "display": {
                                                      "type": "static",
                                                      "content": "flex"
                                                  },
                                                  "maxWidth": {
                                                      "type": "dynamic",
                                                      "content": {
                                                          "referenceType": "token",
                                                          "id": "--dl-size-size-maxwidth"
                                                      }
                                                  },
                                                  "alignItems": {
                                                      "type": "static",
                                                      "content": "center"
                                                  },
                                                  "paddingTop": {
                                                      "type": "dynamic",
                                                      "content": {
                                                          "referenceType": "token",
                                                          "id": "--dl-space-space-twounits"
                                                      }
                                                  },
                                                  "paddingLeft": {
                                                      "type": "dynamic",
                                                      "content": {
                                                          "referenceType": "token",
                                                          "id": "--dl-space-space-threeunits"
                                                      }
                                                  },
                                                  "paddingRight": {
                                                      "type": "dynamic",
                                                      "content": {
                                                          "referenceType": "token",
                                                          "id": "--dl-space-space-threeunits"
                                                      }
                                                  },
                                                  "flexDirection": {
                                                      "type": "static",
                                                      "content": "column"
                                                  },
                                                  "paddingBottom": {
                                                      "type": "dynamic",
                                                      "content": {
                                                          "referenceType": "token",
                                                          "id": "--dl-space-space-twounits"
                                                      }
                                                  },
                                                  "justifyContent": {
                                                      "type": "static",
                                                      "content": "space-between"
                                                  }
                                              },
                                              "children": [
                                                  {
                                                      "type": "element",
                                                      "content": {
                                                          "elementType": "container",
                                                          "referencedStyles": {
                                                              "c7971a8b-e181-4297-8ddb-877b1aab505a": {
                                                                  "type": "style-map",
                                                                  "content": {
                                                                      "conditions": [
                                                                          {
                                                                              "conditionType": "screen-size",
                                                                              "maxWidth": 479
                                                                          }
                                                                      ],
                                                                      "mapType": "inlined",
                                                                      "styles": {
                                                                          "alignItems": {
                                                                              "type": "static",
                                                                              "content": "center"
                                                                          },
                                                                          "flexDirection": {
                                                                              "type": "static",
                                                                              "content": "column"
                                                                          }
                                                                      }
                                                                  }
                                                              },
                                                              "137f4fca-36bf-4e77-89c7-6c24bc723820": {
                                                                  "type": "style-map",
                                                                  "content": {
                                                                      "conditions": [
                                                                          {
                                                                              "conditionType": "screen-size",
                                                                              "maxWidth": 767
                                                                          }
                                                                      ],
                                                                      "mapType": "inlined",
                                                                      "styles": {
                                                                          "alignItems": {
                                                                              "type": "static",
                                                                              "content": "center"
                                                                          },
                                                                          "flexDirection": {
                                                                              "type": "static",
                                                                              "content": "column"
                                                                          },
                                                                          "justifyContent": {
                                                                              "type": "static",
                                                                              "content": "space-between"
                                                                          }
                                                                      }
                                                                  }
                                                              }
                                                          },
                                                          "abilities": {},
                                                          "style": {
                                                              "width": {
                                                                  "type": "static",
                                                                  "content": "100%"
                                                              },
                                                              "display": {
                                                                  "type": "static",
                                                                  "content": "flex"
                                                              },
                                                              "alignItems": {
                                                                  "type": "static",
                                                                  "content": "flex-start"
                                                              },
                                                              "flexDirection": {
                                                                  "type": "static",
                                                                  "content": "row"
                                                              },
                                                              "justifyContent": {
                                                                  "type": "static",
                                                                  "content": "space-between"
                                                              }
                                                          },
                                                          "children": [
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "container",
                                                                      "name": "Logo",
                                                                      "referencedStyles": {
                                                                          "8f4de6e2-9707-4df7-8a04-f45a03d07430": {
                                                                              "type": "style-map",
                                                                              "content": {
                                                                                  "conditions": [
                                                                                      {
                                                                                          "conditionType": "screen-size",
                                                                                          "maxWidth": 767
                                                                                      }
                                                                                  ],
                                                                                  "mapType": "inlined",
                                                                                  "styles": {
                                                                                      "alignItems": {
                                                                                          "type": "static",
                                                                                          "content": "center"
                                                                                      }
                                                                                  }
                                                                              }
                                                                          }
                                                                      },
                                                                      "abilities": {},
                                                                      "style": {
                                                                          "display": {
                                                                              "type": "static",
                                                                              "content": "flex"
                                                                          },
                                                                          "maxWidth": {
                                                                              "type": "dynamic",
                                                                              "content": {
                                                                                  "referenceType": "token",
                                                                                  "id": "--dl-size-size-maxwidth"
                                                                              }
                                                                          },
                                                                          "alignItems": {
                                                                              "type": "static",
                                                                              "content": "flex-start"
                                                                          },
                                                                          "flexDirection": {
                                                                              "type": "static",
                                                                              "content": "column"
                                                                          }
                                                                      },
                                                                      "children": [
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "image",
                                                                                  "referencedStyles": {
                                                                                      "47a078fc-35c7-4d8f-be4c-4edcc8006e14": {
                                                                                          "type": "style-map",
                                                                                          "content": {
                                                                                              "conditions": [
                                                                                                  {
                                                                                                      "conditionType": "screen-size",
                                                                                                      "maxWidth": 767
                                                                                                  }
                                                                                              ],
                                                                                              "mapType": "inlined",
                                                                                              "styles": {
                                                                                                  "marginBottom": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-oneandhalfunits"
                                                                                                      }
                                                                                                  }
                                                                                              }
                                                                                          }
                                                                                      },
                                                                                      "b97a5c46-575e-4c9d-a973-0c206c237762": {
                                                                                          "type": "style-map",
                                                                                          "content": {
                                                                                              "conditions": [
                                                                                                  {
                                                                                                      "conditionType": "screen-size",
                                                                                                      "maxWidth": 479
                                                                                                  }
                                                                                              ],
                                                                                              "mapType": "inlined",
                                                                                              "styles": {
                                                                                                  "marginBottom": {
                                                                                                      "type": "static",
                                                                                                      "content": "0px"
                                                                                                  }
                                                                                              }
                                                                                          }
                                                                                      }
                                                                                  },
                                                                                  "abilities": {},
                                                                                  "attrs": {
                                                                                      "alt": {
                                                                                          "type": "static",
                                                                                          "content": "logo"
                                                                                      },
                                                                                      "src": {
                                                                                          "type": "static",
                                                                                          "content": "https://presentation-website-assets.teleporthq.io/logos/logo.png"
                                                                                      }
                                                                                  },
                                                                                  "style": {
                                                                                      "height": {
                                                                                          "type": "static",
                                                                                          "content": "2rem"
                                                                                      }
                                                                                  },
                                                                                  "children": []
                                                                              }
                                                                          },
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "text",
                                                                                  "referencedStyles": {
                                                                                      "29d15ccf-cae9-4d9a-b4b5-350f476359d4": {
                                                                                          "type": "style-map",
                                                                                          "content": {
                                                                                              "conditions": [
                                                                                                  {
                                                                                                      "conditionType": "screen-size",
                                                                                                      "maxWidth": 479
                                                                                                  }
                                                                                              ],
                                                                                              "mapType": "inlined",
                                                                                              "styles": {
                                                                                                  "marginTop": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-twounits"
                                                                                                      }
                                                                                                  },
                                                                                                  "marginBottom": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-twounits"
                                                                                                      }
                                                                                                  }
                                                                                              }
                                                                                          }
                                                                                      },
                                                                                      "e6eced16-ecd0-4396-b8a0-1cf603eb6ceb": {
                                                                                          "type": "style-map",
                                                                                          "content": {
                                                                                              "conditions": [
                                                                                                  {
                                                                                                      "conditionType": "screen-size",
                                                                                                      "maxWidth": 767
                                                                                                  }
                                                                                              ],
                                                                                              "mapType": "inlined",
                                                                                              "styles": {
                                                                                                  "marginTop": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-twounits"
                                                                                                      }
                                                                                                  },
                                                                                                  "textAlign": {
                                                                                                      "type": "static",
                                                                                                      "content": "center"
                                                                                                  },
                                                                                                  "marginBottom": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-twounits"
                                                                                                      }
                                                                                                  }
                                                                                              }
                                                                                          }
                                                                                      }
                                                                                  },
                                                                                  "abilities": {},
                                                                                  "style": {
                                                                                      "marginTop": {
                                                                                          "type": "dynamic",
                                                                                          "content": {
                                                                                              "referenceType": "token",
                                                                                              "id": "--dl-space-space-oneandhalfunits"
                                                                                          }
                                                                                      }
                                                                                  },
                                                                                  "children": [
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "Professional website builder "
                                                                                                              },
                                                                                                              {
                                                                                                                  "type": "raw",
                                                                                                                  "content": " "
                                                                                                              }
                                                                                                          ]
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": " "
                                                                                                              },
                                                                                                              {
                                                                                                                  "type": "raw",
                                                                                                                  "content": " "
                                                                                                              }
                                                                                                          ]
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      },
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "children": [],
                                                                                              "semanticType": "br"
                                                                                          }
                                                                                      },
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "text",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "static",
                                                                                                      "content": "for developers."
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "span"
                                                                                          }
                                                                                      }
                                                                                  ],
                                                                                  "semanticType": "span"
                                                                              }
                                                                          }
                                                                      ],
                                                                      "semanticType": "div"
                                                                  }
                                                              },
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "container",
                                                                      "name": "LinksContainer",
                                                                      "referencedStyles": {
                                                                          "2d142f86-2ea7-4bec-aa82-418bfe09a54f": {
                                                                              "type": "style-map",
                                                                              "content": {
                                                                                  "conditions": [
                                                                                      {
                                                                                          "conditionType": "screen-size",
                                                                                          "maxWidth": 479
                                                                                      }
                                                                                  ],
                                                                                  "mapType": "inlined",
                                                                                  "styles": {
                                                                                      "alignItems": {
                                                                                          "type": "static",
                                                                                          "content": "center"
                                                                                      },
                                                                                      "flexDirection": {
                                                                                          "type": "static",
                                                                                          "content": "column"
                                                                                      }
                                                                                  }
                                                                              }
                                                                          },
                                                                          "962cef9c-1756-4da5-bf80-309cc72b6864": {
                                                                              "type": "style-map",
                                                                              "content": {
                                                                                  "conditions": [
                                                                                      {
                                                                                          "conditionType": "screen-size",
                                                                                          "maxWidth": 767
                                                                                      }
                                                                                  ],
                                                                                  "mapType": "inlined",
                                                                                  "styles": {
                                                                                      "width": {
                                                                                          "type": "static",
                                                                                          "content": "100%"
                                                                                      },
                                                                                      "alignItems": {
                                                                                          "type": "static",
                                                                                          "content": "flex-start"
                                                                                      },
                                                                                      "flexDirection": {
                                                                                          "type": "static",
                                                                                          "content": "row"
                                                                                      },
                                                                                      "justifyContent": {
                                                                                          "type": "static",
                                                                                          "content": "center"
                                                                                      }
                                                                                  }
                                                                              }
                                                                          }
                                                                      },
                                                                      "abilities": {},
                                                                      "style": {
                                                                          "display": {
                                                                              "type": "static",
                                                                              "content": "flex"
                                                                          },
                                                                          "alignItems": {
                                                                              "type": "static",
                                                                              "content": "flex-start"
                                                                          },
                                                                          "flexDirection": {
                                                                              "type": "static",
                                                                              "content": "row"
                                                                          },
                                                                          "justifyContent": {
                                                                              "type": "static",
                                                                              "content": "space-between"
                                                                          }
                                                                      },
                                                                      "children": [
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "container",
                                                                                  "name": "Container",
                                                                                  "referencedStyles": {
                                                                                      "c53b00de-c77c-4f19-8bf4-89aa3fe9216a": {
                                                                                          "type": "style-map",
                                                                                          "content": {
                                                                                              "conditions": [
                                                                                                  {
                                                                                                      "conditionType": "screen-size",
                                                                                                      "maxWidth": 991
                                                                                                  }
                                                                                              ],
                                                                                              "mapType": "inlined",
                                                                                              "styles": {
                                                                                                  "marginRight": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-fourunits"
                                                                                                      }
                                                                                                  }
                                                                                              }
                                                                                          }
                                                                                      },
                                                                                      "6723537b-7ded-40a3-9f16-75cd103aa0e3": {
                                                                                          "type": "style-map",
                                                                                          "content": {
                                                                                              "conditions": [
                                                                                                  {
                                                                                                      "conditionType": "screen-size",
                                                                                                      "maxWidth": 767
                                                                                                  }
                                                                                              ],
                                                                                              "mapType": "inlined",
                                                                                              "styles": {
                                                                                                  "marginRight": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-fourunits"
                                                                                                      }
                                                                                                  }
                                                                                              }
                                                                                          }
                                                                                      },
                                                                                      "8060ddd8-d94f-4c71-bf1c-408f4e96b802": {
                                                                                          "type": "style-map",
                                                                                          "content": {
                                                                                              "conditions": [
                                                                                                  {
                                                                                                      "conditionType": "screen-size",
                                                                                                      "maxWidth": 479
                                                                                                  }
                                                                                              ],
                                                                                              "mapType": "inlined",
                                                                                              "styles": {
                                                                                                  "marginRight": {
                                                                                                      "type": "static",
                                                                                                      "content": "0px"
                                                                                                  }
                                                                                              }
                                                                                          }
                                                                                      }
                                                                                  },
                                                                                  "abilities": {},
                                                                                  "style": {
                                                                                      "display": {
                                                                                          "type": "static",
                                                                                          "content": "flex"
                                                                                      },
                                                                                      "alignItems": {
                                                                                          "type": "static",
                                                                                          "content": "flex-start"
                                                                                      },
                                                                                      "marginRight": {
                                                                                          "type": "static",
                                                                                          "content": "10rem"
                                                                                      },
                                                                                      "flexDirection": {
                                                                                          "type": "static",
                                                                                          "content": "row"
                                                                                      },
                                                                                      "justifyContent": {
                                                                                          "type": "static",
                                                                                          "content": "space-between"
                                                                                      }
                                                                                  },
                                                                                  "children": [
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "container",
                                                                                              "name": "ProductContainer",
                                                                                              "referencedStyles": {
                                                                                                  "37ae652f-131d-4e50-964a-261df0b833eb": {
                                                                                                      "type": "style-map",
                                                                                                      "content": {
                                                                                                          "conditions": [
                                                                                                              {
                                                                                                                  "conditionType": "screen-size",
                                                                                                                  "maxWidth": 991
                                                                                                              }
                                                                                                          ],
                                                                                                          "mapType": "inlined",
                                                                                                          "styles": {
                                                                                                              "marginRight": {
                                                                                                                  "type": "dynamic",
                                                                                                                  "content": {
                                                                                                                      "referenceType": "token",
                                                                                                                      "id": "--dl-space-space-fourunits"
                                                                                                                  }
                                                                                                              }
                                                                                                          }
                                                                                                      }
                                                                                                  },
                                                                                                  "8298ad80-e1ce-4251-8650-35811caab8d1": {
                                                                                                      "type": "style-map",
                                                                                                      "content": {
                                                                                                          "conditions": [
                                                                                                              {
                                                                                                                  "conditionType": "screen-size",
                                                                                                                  "maxWidth": 767
                                                                                                              }
                                                                                                          ],
                                                                                                          "mapType": "inlined",
                                                                                                          "styles": {
                                                                                                              "marginRight": {
                                                                                                                  "type": "dynamic",
                                                                                                                  "content": {
                                                                                                                      "referenceType": "token",
                                                                                                                      "id": "--dl-space-space-fourunits"
                                                                                                                  }
                                                                                                              }
                                                                                                          }
                                                                                                      }
                                                                                                  }
                                                                                              },
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "flex": {
                                                                                                      "type": "static",
                                                                                                      "content": "0 0 auto"
                                                                                                  },
                                                                                                  "display": {
                                                                                                      "type": "static",
                                                                                                      "content": "flex"
                                                                                                  },
                                                                                                  "alignItems": {
                                                                                                      "type": "static",
                                                                                                      "content": "flex-start"
                                                                                                  },
                                                                                                  "marginRight": {
                                                                                                      "type": "static",
                                                                                                      "content": "10rem"
                                                                                                  },
                                                                                                  "flexDirection": {
                                                                                                      "type": "static",
                                                                                                      "content": "column"
                                                                                                  },
                                                                                                  "justifyContent": {
                                                                                                      "type": "static",
                                                                                                      "content": "flex-start"
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "style": {
                                                                                                              "fontWeight": {
                                                                                                                  "type": "static",
                                                                                                                  "content": "700"
                                                                                                              },
                                                                                                              "marginBottom": {
                                                                                                                  "type": "dynamic",
                                                                                                                  "content": {
                                                                                                                      "referenceType": "token",
                                                                                                                      "id": "--dl-space-space-oneandhalfunits"
                                                                                                                  }
                                                                                                              }
                                                                                                          },
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "Product"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "style": {
                                                                                                              "marginBottom": {
                                                                                                                  "type": "dynamic",
                                                                                                                  "content": {
                                                                                                                      "referenceType": "token",
                                                                                                                      "id": "--dl-space-space-unit"
                                                                                                                  }
                                                                                                              }
                                                                                                          },
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "Features"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "style": {
                                                                                                              "marginBottom": {
                                                                                                                  "type": "dynamic",
                                                                                                                  "content": {
                                                                                                                      "referenceType": "token",
                                                                                                                      "id": "--dl-space-space-unit"
                                                                                                                  }
                                                                                                              }
                                                                                                          },
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "Pricing"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "style": {
                                                                                                              "marginBottom": {
                                                                                                                  "type": "dynamic",
                                                                                                                  "content": {
                                                                                                                      "referenceType": "token",
                                                                                                                      "id": "--dl-space-space-unit"
                                                                                                                  }
                                                                                                              }
                                                                                                          },
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "Tutorials"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "Releases"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "div"
                                                                                          }
                                                                                      },
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "container",
                                                                                              "name": "CompanyContainer",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "flex": {
                                                                                                      "type": "static",
                                                                                                      "content": "0 0 auto"
                                                                                                  },
                                                                                                  "display": {
                                                                                                      "type": "static",
                                                                                                      "content": "flex"
                                                                                                  },
                                                                                                  "alignItems": {
                                                                                                      "type": "static",
                                                                                                      "content": "flex-start"
                                                                                                  },
                                                                                                  "flexDirection": {
                                                                                                      "type": "static",
                                                                                                      "content": "column"
                                                                                                  },
                                                                                                  "justifyContent": {
                                                                                                      "type": "static",
                                                                                                      "content": "flex-start"
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "style": {
                                                                                                              "fontWeight": {
                                                                                                                  "type": "static",
                                                                                                                  "content": "700"
                                                                                                              },
                                                                                                              "marginBottom": {
                                                                                                                  "type": "dynamic",
                                                                                                                  "content": {
                                                                                                                      "referenceType": "token",
                                                                                                                      "id": "--dl-space-space-oneandhalfunits"
                                                                                                                  }
                                                                                                              }
                                                                                                          },
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "Company"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "style": {
                                                                                                              "marginBottom": {
                                                                                                                  "type": "dynamic",
                                                                                                                  "content": {
                                                                                                                      "referenceType": "token",
                                                                                                                      "id": "--dl-space-space-unit"
                                                                                                                  }
                                                                                                              }
                                                                                                          },
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "About"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "style": {
                                                                                                              "marginBottom": {
                                                                                                                  "type": "dynamic",
                                                                                                                  "content": {
                                                                                                                      "referenceType": "token",
                                                                                                                      "id": "--dl-space-space-unit"
                                                                                                                  }
                                                                                                              }
                                                                                                          },
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "Careers"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "style": {
                                                                                                              "marginBottom": {
                                                                                                                  "type": "dynamic",
                                                                                                                  "content": {
                                                                                                                      "referenceType": "token",
                                                                                                                      "id": "--dl-space-space-unit"
                                                                                                                  }
                                                                                                              }
                                                                                                          },
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "Contact"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "Blog"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "div"
                                                                                          }
                                                                                      }
                                                                                  ],
                                                                                  "semanticType": "div"
                                                                              }
                                                                          },
                                                                          {
                                                                              "type": "element",
                                                                              "content": {
                                                                                  "elementType": "container",
                                                                                  "referencedStyles": {
                                                                                      "c859d78c-4ef7-4149-8467-fbb930cf7444": {
                                                                                          "type": "style-map",
                                                                                          "content": {
                                                                                              "conditions": [
                                                                                                  {
                                                                                                      "conditionType": "screen-size",
                                                                                                      "maxWidth": 479
                                                                                                  }
                                                                                              ],
                                                                                              "mapType": "inlined",
                                                                                              "styles": {
                                                                                                  "marginTop": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-oneandhalfunits"
                                                                                                      }
                                                                                                  },
                                                                                                  "alignItems": {
                                                                                                      "type": "static",
                                                                                                      "content": "flex-start"
                                                                                                  },
                                                                                                  "marginBottom": {
                                                                                                      "type": "static",
                                                                                                      "content": "0px"
                                                                                                  }
                                                                                              }
                                                                                          }
                                                                                      }
                                                                                  },
                                                                                  "abilities": {},
                                                                                  "style": {
                                                                                      "display": {
                                                                                          "type": "static",
                                                                                          "content": "flex"
                                                                                      },
                                                                                      "alignItems": {
                                                                                          "type": "static",
                                                                                          "content": "flex-start"
                                                                                      },
                                                                                      "flexDirection": {
                                                                                          "type": "static",
                                                                                          "content": "column"
                                                                                      },
                                                                                      "justifyContent": {
                                                                                          "type": "static",
                                                                                          "content": "flex-start"
                                                                                      }
                                                                                  },
                                                                                  "children": [
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "container",
                                                                                              "name": "Contact",
                                                                                              "referencedStyles": {
                                                                                                  "ffd9b25a-4d04-487a-bf86-e7711e63e02d": {
                                                                                                      "type": "style-map",
                                                                                                      "content": {
                                                                                                          "conditions": [
                                                                                                              {
                                                                                                                  "conditionType": "screen-size",
                                                                                                                  "maxWidth": 479
                                                                                                              }
                                                                                                          ],
                                                                                                          "mapType": "inlined",
                                                                                                          "styles": {
                                                                                                              "alignItems": {
                                                                                                                  "type": "static",
                                                                                                                  "content": "flex-start"
                                                                                                              },
                                                                                                              "marginBottom": {
                                                                                                                  "type": "dynamic",
                                                                                                                  "content": {
                                                                                                                      "referenceType": "token",
                                                                                                                      "id": "--dl-space-space-unit"
                                                                                                                  }
                                                                                                              }
                                                                                                          }
                                                                                                      }
                                                                                                  }
                                                                                              },
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "display": {
                                                                                                      "type": "static",
                                                                                                      "content": "flex"
                                                                                                  },
                                                                                                  "alignItems": {
                                                                                                      "type": "static",
                                                                                                      "content": "flex-start"
                                                                                                  },
                                                                                                  "marginBottom": {
                                                                                                      "type": "dynamic",
                                                                                                      "content": {
                                                                                                          "referenceType": "token",
                                                                                                          "id": "--dl-space-space-oneandhalfunits"
                                                                                                      }
                                                                                                  },
                                                                                                  "flexDirection": {
                                                                                                      "type": "static",
                                                                                                      "content": "column"
                                                                                                  },
                                                                                                  "justifyContent": {
                                                                                                      "type": "static",
                                                                                                      "content": "flex-start"
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "style": {
                                                                                                              "fontWeight": {
                                                                                                                  "type": "static",
                                                                                                                  "content": "700"
                                                                                                              },
                                                                                                              "marginBottom": {
                                                                                                                  "type": "dynamic",
                                                                                                                  "content": {
                                                                                                                      "referenceType": "token",
                                                                                                                      "id": "--dl-space-space-oneandhalfunits"
                                                                                                                  }
                                                                                                              }
                                                                                                          },
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "Contact Us"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "style": {
                                                                                                              "marginBottom": {
                                                                                                                  "type": "dynamic",
                                                                                                                  "content": {
                                                                                                                      "referenceType": "token",
                                                                                                                      "id": "--dl-space-space-unit"
                                                                                                                  }
                                                                                                              }
                                                                                                          },
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "hello@teleporthq.io"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "+123 (4567) 890"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "div"
                                                                                          }
                                                                                      },
                                                                                      {
                                                                                          "type": "element",
                                                                                          "content": {
                                                                                              "elementType": "container",
                                                                                              "name": "Socials",
                                                                                              "referencedStyles": {},
                                                                                              "abilities": {},
                                                                                              "style": {
                                                                                                  "display": {
                                                                                                      "type": "static",
                                                                                                      "content": "flex"
                                                                                                  },
                                                                                                  "alignItems": {
                                                                                                      "type": "static",
                                                                                                      "content": "flex-start"
                                                                                                  },
                                                                                                  "flexDirection": {
                                                                                                      "type": "static",
                                                                                                      "content": "column"
                                                                                                  },
                                                                                                  "justifyContent": {
                                                                                                      "type": "static",
                                                                                                      "content": "flex-start"
                                                                                                  }
                                                                                              },
                                                                                              "children": [
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "text",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "style": {
                                                                                                              "fontWeight": {
                                                                                                                  "type": "static",
                                                                                                                  "content": "700"
                                                                                                              },
                                                                                                              "marginBottom": {
                                                                                                                  "type": "dynamic",
                                                                                                                  "content": {
                                                                                                                      "referenceType": "token",
                                                                                                                      "id": "--dl-space-space-oneandhalfunits"
                                                                                                                  }
                                                                                                              }
                                                                                                          },
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "static",
                                                                                                                  "content": "Follow Us"
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "span"
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      "type": "element",
                                                                                                      "content": {
                                                                                                          "elementType": "container",
                                                                                                          "name": "IconGroup",
                                                                                                          "referencedStyles": {},
                                                                                                          "abilities": {},
                                                                                                          "style": {
                                                                                                              "display": {
                                                                                                                  "type": "static",
                                                                                                                  "content": "flex"
                                                                                                              },
                                                                                                              "alignItems": {
                                                                                                                  "type": "static",
                                                                                                                  "content": "center"
                                                                                                              },
                                                                                                              "flexDirection": {
                                                                                                                  "type": "static",
                                                                                                                  "content": "row"
                                                                                                              },
                                                                                                              "justifyContent": {
                                                                                                                  "type": "static",
                                                                                                                  "content": "space-between"
                                                                                                              }
                                                                                                          },
                                                                                                          "children": [
                                                                                                              {
                                                                                                                  "type": "element",
                                                                                                                  "content": {
                                                                                                                      "elementType": "icon",
                                                                                                                      "referencedStyles": {},
                                                                                                                      "abilities": {},
                                                                                                                      "attrs": {
                                                                                                                          "viewBox": {
                                                                                                                              "type": "static",
                                                                                                                              "content": "0 0 950.8571428571428 1024"
                                                                                                                          }
                                                                                                                      },
                                                                                                                      "style": {
                                                                                                                          "width": {
                                                                                                                              "type": "dynamic",
                                                                                                                              "content": {
                                                                                                                                  "referenceType": "token",
                                                                                                                                  "id": "--dl-size-size-xsmall"
                                                                                                                              }
                                                                                                                          },
                                                                                                                          "height": {
                                                                                                                              "type": "dynamic",
                                                                                                                              "content": {
                                                                                                                                  "referenceType": "token",
                                                                                                                                  "id": "--dl-size-size-xsmall"
                                                                                                                              }
                                                                                                                          },
                                                                                                                          "marginRight": {
                                                                                                                              "type": "dynamic",
                                                                                                                              "content": {
                                                                                                                                  "referenceType": "token",
                                                                                                                                  "id": "--dl-space-space-unit"
                                                                                                                              }
                                                                                                                          }
                                                                                                                      },
                                                                                                                      "children": [
                                                                                                                          {
                                                                                                                              "type": "element",
                                                                                                                              "content": {
                                                                                                                                  "elementType": "icon",
                                                                                                                                  "referencedStyles": {},
                                                                                                                                  "abilities": {},
                                                                                                                                  "attrs": {
                                                                                                                                      "d": {
                                                                                                                                          "type": "static",
                                                                                                                                          "content": "M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                                                                                                                                      }
                                                                                                                                  },
                                                                                                                                  "children": [],
                                                                                                                                  "semanticType": "path"
                                                                                                                              }
                                                                                                                          }
                                                                                                                      ]
                                                                                                                  }
                                                                                                              },
                                                                                                              {
                                                                                                                  "type": "element",
                                                                                                                  "content": {
                                                                                                                      "elementType": "icon",
                                                                                                                      "referencedStyles": {},
                                                                                                                      "abilities": {},
                                                                                                                      "attrs": {
                                                                                                                          "viewBox": {
                                                                                                                              "type": "static",
                                                                                                                              "content": "0 0 877.7142857142857 1024"
                                                                                                                          }
                                                                                                                      },
                                                                                                                      "style": {
                                                                                                                          "width": {
                                                                                                                              "type": "dynamic",
                                                                                                                              "content": {
                                                                                                                                  "referenceType": "token",
                                                                                                                                  "id": "--dl-size-size-xsmall"
                                                                                                                              }
                                                                                                                          },
                                                                                                                          "height": {
                                                                                                                              "type": "dynamic",
                                                                                                                              "content": {
                                                                                                                                  "referenceType": "token",
                                                                                                                                  "id": "--dl-size-size-xsmall"
                                                                                                                              }
                                                                                                                          },
                                                                                                                          "marginRight": {
                                                                                                                              "type": "dynamic",
                                                                                                                              "content": {
                                                                                                                                  "referenceType": "token",
                                                                                                                                  "id": "--dl-space-space-unit"
                                                                                                                              }
                                                                                                                          }
                                                                                                                      },
                                                                                                                      "children": [
                                                                                                                          {
                                                                                                                              "type": "element",
                                                                                                                              "content": {
                                                                                                                                  "elementType": "icon",
                                                                                                                                  "referencedStyles": {},
                                                                                                                                  "abilities": {},
                                                                                                                                  "attrs": {
                                                                                                                                      "d": {
                                                                                                                                          "type": "static",
                                                                                                                                          "content": "M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                                                                                                                                      }
                                                                                                                                  },
                                                                                                                                  "children": [],
                                                                                                                                  "semanticType": "path"
                                                                                                                              }
                                                                                                                          }
                                                                                                                      ]
                                                                                                                  }
                                                                                                              },
                                                                                                              {
                                                                                                                  "type": "element",
                                                                                                                  "content": {
                                                                                                                      "elementType": "icon",
                                                                                                                      "referencedStyles": {},
                                                                                                                      "abilities": {},
                                                                                                                      "attrs": {
                                                                                                                          "viewBox": {
                                                                                                                              "type": "static",
                                                                                                                              "content": "0 0 602.2582857142856 1024"
                                                                                                                          }
                                                                                                                      },
                                                                                                                      "style": {
                                                                                                                          "width": {
                                                                                                                              "type": "dynamic",
                                                                                                                              "content": {
                                                                                                                                  "referenceType": "token",
                                                                                                                                  "id": "--dl-size-size-xsmall"
                                                                                                                              }
                                                                                                                          },
                                                                                                                          "height": {
                                                                                                                              "type": "dynamic",
                                                                                                                              "content": {
                                                                                                                                  "referenceType": "token",
                                                                                                                                  "id": "--dl-size-size-xsmall"
                                                                                                                              }
                                                                                                                          }
                                                                                                                      },
                                                                                                                      "children": [
                                                                                                                          {
                                                                                                                              "type": "element",
                                                                                                                              "content": {
                                                                                                                                  "elementType": "icon",
                                                                                                                                  "referencedStyles": {},
                                                                                                                                  "abilities": {},
                                                                                                                                  "attrs": {
                                                                                                                                      "d": {
                                                                                                                                          "type": "static",
                                                                                                                                          "content": "M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                                                                                                                                      }
                                                                                                                                  },
                                                                                                                                  "children": [],
                                                                                                                                  "semanticType": "path"
                                                                                                                              }
                                                                                                                          }
                                                                                                                      ]
                                                                                                                  }
                                                                                                              }
                                                                                                          ],
                                                                                                          "semanticType": "div"
                                                                                                      }
                                                                                                  }
                                                                                              ],
                                                                                              "semanticType": "div"
                                                                                          }
                                                                                      }
                                                                                  ],
                                                                                  "semanticType": "div"
                                                                              }
                                                                          }
                                                                      ],
                                                                      "semanticType": "div"
                                                                  }
                                                              }
                                                          ],
                                                          "semanticType": "div"
                                                      }
                                                  },
                                                  {
                                                      "type": "element",
                                                      "content": {
                                                          "elementType": "container",
                                                          "name": "Separator",
                                                          "referencedStyles": {},
                                                          "abilities": {},
                                                          "style": {
                                                              "width": {
                                                                  "type": "static",
                                                                  "content": "100%"
                                                              },
                                                              "height": {
                                                                  "type": "static",
                                                                  "content": "1px"
                                                              },
                                                              "marginTop": {
                                                                  "type": "dynamic",
                                                                  "content": {
                                                                      "referenceType": "token",
                                                                      "id": "--dl-space-space-twounits"
                                                                  }
                                                              },
                                                              "marginBottom": {
                                                                  "type": "dynamic",
                                                                  "content": {
                                                                      "referenceType": "token",
                                                                      "id": "--dl-space-space-twounits"
                                                                  }
                                                              },
                                                              "backgroundColor": {
                                                                  "type": "dynamic",
                                                                  "content": {
                                                                      "referenceType": "token",
                                                                      "id": "--dl-color-gray-900"
                                                                  }
                                                              }
                                                          },
                                                          "children": [],
                                                          "semanticType": "div"
                                                      }
                                                  },
                                                  {
                                                      "type": "element",
                                                      "content": {
                                                          "elementType": "text",
                                                          "referencedStyles": {
                                                              "f9c6c553-e5ec-40ef-b8be-e53ea85a5a5d": {
                                                                  "type": "style-map",
                                                                  "content": {
                                                                      "conditions": [
                                                                          {
                                                                              "conditionType": "screen-size",
                                                                              "maxWidth": 479
                                                                          }
                                                                      ],
                                                                      "mapType": "inlined",
                                                                      "styles": {
                                                                          "textAlign": {
                                                                              "type": "static",
                                                                              "content": "center"
                                                                          }
                                                                      }
                                                                  }
                                                              }
                                                          },
                                                          "abilities": {},
                                                          "style": {
                                                              "alignSelf": {
                                                                  "type": "static",
                                                                  "content": "center"
                                                              }
                                                          },
                                                          "children": [
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "text",
                                                                      "referencedStyles": {},
                                                                      "abilities": {},
                                                                      "children": [
                                                                          {
                                                                              "type": "static",
                                                                              "content": "© 2021 teleportHQ, All Rights Reserved."
                                                                          }
                                                                      ],
                                                                      "semanticType": "span"
                                                                  }
                                                              },
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "text",
                                                                      "referencedStyles": {},
                                                                      "abilities": {},
                                                                      "style": {
                                                                          "textAlign": {
                                                                              "type": "static",
                                                                              "content": "left"
                                                                          }
                                                                      },
                                                                      "children": [],
                                                                      "semanticType": "span"
                                                                  }
                                                              },
                                                              {
                                                                  "type": "element",
                                                                  "content": {
                                                                      "elementType": "text",
                                                                      "referencedStyles": {},
                                                                      "abilities": {},
                                                                      "children": [],
                                                                      "semanticType": "span"
                                                                  }
                                                              }
                                                          ],
                                                          "semanticType": "span"
                                                      }
                                                  }
                                              ],
                                              "semanticType": "footer"
                                          }
                                      },
                                      {
                                          "type": "element",
                                          "content": {
                                              "elementType": "image",
                                              "referencedStyles": {},
                                              "abilities": {},
                                              "attrs": {
                                                  "src": {
                                                      "type": "static",
                                                      "content": "/kitten.png"
                                                  },
                                                  "alt": {
                                                      "type": "static",
                                                      "content": "image"
                                                  }
                                              },
                                              "style": {
                                                  "width": {
                                                      "type": "static",
                                                      "content": "100px"
                                                  },
                                                  "objectFit": {
                                                      "type": "static",
                                                      "content": "cover"
                                                  }
                                              },
                                              "children": []
                                          }
                                      },
                                      {
                                          "type": "element",
                                          "content": {
                                              "elementType": "container",
                                              "referencedStyles": {},
                                              "abilities": {},
                                              "style": {
                                                  "display": {
                                                      "type": "static",
                                                      "content": "flex"
                                                  },
                                                  "width": {
                                                      "type": "static",
                                                      "content": "100px"
                                                  },
                                                  "height": {
                                                      "type": "static",
                                                      "content": "50px"
                                                  },
                                                  "border": {
                                                      "type": "static",
                                                      "content": "2px dashed rgba(120, 120, 120, 0.4)"
                                                  },
                                                  "alignItems": {
                                                      "type": "static",
                                                      "content": "flex-start"
                                                  },
                                                  "flex": {
                                                      "type": "static",
                                                      "content": "0 0 auto"
                                                  },
                                                  "backgroundImage": {
                                                      "type": "static",
                                                      "content": "url(\"/kitten.png\")"
                                                  },
                                                  "backgroundSize": {
                                                      "type": "static",
                                                      "content": "cover"
                                                  }
                                              },
                                              "children": [
                                                  {
                                                      "type": "static",
                                                      "content": "Bg Image"
                                                  }
                                              ],
                                              "semanticType": "div"
                                          }
                                      },
                                      {
                                          "type": "element",
                                          "content": {
                                              "elementType": "container",
                                              "referencedStyles": {},
                                              "abilities": {},
                                              "style": {
                                                  "display": {
                                                      "type": "static",
                                                      "content": "flex"
                                                  },
                                                  "width": {
                                                      "type": "static",
                                                      "content": "100px"
                                                  },
                                                  "height": {
                                                      "type": "static",
                                                      "content": "50px"
                                                  },
                                                  "border": {
                                                      "type": "static",
                                                      "content": "2px dashed rgba(120, 120, 120, 0.4)"
                                                  },
                                                  "alignItems": {
                                                      "type": "static",
                                                      "content": "flex-start"
                                                  },
                                                  "flex": {
                                                      "type": "static",
                                                      "content": "0 0 auto"
                                                  },
                                                  "backgroundImage": {
                                                      "type": "static",
                                                      "content": "url(\"/playground_assets/kitten.png\")"
                                                  },
                                                  "backgroundSize": {
                                                      "type": "static",
                                                      "content": "cover"
                                                  }
                                              },
                                              "children": [
                                                  {
                                                      "type": "static",
                                                      "content": "Bg Image"
                                                  }
                                              ],
                                              "semanticType": "div"
                                          }
                                      }
                                  ],
                                  "semanticType": "div"
                              }
                          },
                          "value": "About",
                          "reference": {
                              "type": "dynamic",
                              "content": {
                                  "referenceType": "state",
                                  "id": "route"
                              }
                          }
                      }
                  },
                  {
                      "type": "conditional",
                      "content": {
                          "node": {
                              "type": "element",
                              "content": {
                                  "elementType": "container",
                                  "referencedStyles": {},
                                  "abilities": {},
                                  "style": {
                                      "width": {
                                          "type": "static",
                                          "content": "100%"
                                      },
                                      "display": {
                                          "type": "static",
                                          "content": "flex"
                                      },
                                      "overflow": {
                                          "type": "static",
                                          "content": "auto"
                                      },
                                      "minHeight": {
                                          "type": "static",
                                          "content": "100vh"
                                      },
                                      "alignItems": {
                                          "type": "static",
                                          "content": "flex-start"
                                      },
                                      "flexDirection": {
                                          "type": "static",
                                          "content": "column"
                                      },
                                      "justifyContent": {
                                          "type": "static",
                                          "content": "flex-start"
                                      }
                                  },
                                  "children": [
                                      {
                                          "type": "element",
                                          "content": {
                                              "elementType": "container",
                                              "children": [
                                                  {
                                                      "type": "static",
                                                      "content": "This is a fallback page"
                                                  }
                                              ]
                                          }
                                      }
                                  ],
                                  "semanticType": "div"
                              }
                          },
                          "value": "Fallback",
                          "reference": {
                              "type": "dynamic",
                              "content": {
                                  "referenceType": "state",
                                  "id": "route"
                              }
                          }
                      }
                  }
              ]
          }
      }
  },
  "components": {
      "Component": {
          "propDefinitions": {},
          "node": {
              "type": "element",
              "content": {
                  "elementType": "container",
                  "referencedStyles": {},
                  "abilities": {},
                  "style": {
                      "width": {
                          "type": "static",
                          "content": "100%"
                      },
                      "height": {
                          "type": "static",
                          "content": "400px"
                      },
                      "display": {
                          "type": "static",
                          "content": "flex"
                      },
                      "position": {
                          "type": "static",
                          "content": "relative"
                      },
                      "alignItems": {
                          "type": "static",
                          "content": "flex-start"
                      },
                      "flexDirection": {
                          "type": "static",
                          "content": "column"
                      }
                  },
                  "children": [
                    {
                        "type": "element",
                        "content": {
                            "elementType": "html-node",
                            "attrs": {
                                "html": {
                                    "type": "raw",
                                    "content": "<blockquote class='twitter-tweet'><p lang='en' dir='ltr'>Feels like the last 20 mins of Don't Look Up right about now…</p>&mdash; Netflix (@netflix) <a href='https://twitter.com/netflix/status/1593420772948598784?ref_src=twsrc%5Etfw'>November 18, 2022</a></blockquote> <script src='https://platform.twitter.com/widgets.js'></script>"
                                }
                            }
                        }
                    },
                    {
                      "type": "element",
                      "content": {
                          "elementType": "html-node",
                          "attrs": {
                              "html": {
                                  "type": "raw",
                                  "content": "<p>Test<script>console.log('test')</script></p>"
                              }
                          },
                          "styles": {
                              "width": {
                                  "type": "static",
                                  "content": "400px"
                              }
                          }
                      }
                  }
                  ],
                  "semanticType": "div"
              }
          },
          "name": "Component",
          "styleSetDefinitions": {}
      },
      "NavigationLinks": {
          "propDefinitions": {
              "text": {
                  "id": "aabae333-9120-42d3-9e36-525fb14689aa",
                  "defaultValue": "About",
                  "type": "string"
              },
              "text3": {
                  "id": "5361ad50-a4f4-4c08-99b9-165314e12824",
                  "defaultValue": "Team",
                  "type": "string"
              },
              "text4": {
                  "id": "0b56039c-7529-41ba-a510-a84252dff14c",
                  "defaultValue": "Blog",
                  "type": "string"
              },
              "text1": {
                  "id": "717f2fc1-a3fe-4899-b7c2-1fb7d6c102f6",
                  "defaultValue": "Features",
                  "type": "string"
              },
              "rootClassName": {
                  "id": "5f6c32bd-c13a-420a-944d-19e76359ea81",
                  "defaultValue": "",
                  "type": "string"
              },
              "text2": {
                  "id": "cdbb8227-1e43-4506-abf0-538fcfc28eb3",
                  "defaultValue": "Pricing",
                  "type": "string"
              }
          },
          "node": {
              "type": "element",
              "content": {
                  "elementType": "container",
                  "name": "Nav",
                  "referencedStyles": {
                      "2f4a08a2-f790-49da-8dd3-658cf6d92000": {
                          "type": "style-map",
                          "content": {
                              "mapType": "component-referenced",
                              "content": {
                                  "type": "dynamic",
                                  "content": {
                                      "referenceType": "prop",
                                      "id": "rootClassName"
                                  }
                              }
                          }
                      },
                      "b347ca72-94de-4cfb-80f1-961cdac81b93": {
                          "type": "style-map",
                          "content": {
                              "conditions": [
                                  {
                                      "conditionType": "screen-size",
                                      "maxWidth": 767
                                  }
                              ],
                              "mapType": "inlined",
                              "styles": {
                                  "alignItems": {
                                      "type": "static",
                                      "content": "flex-start"
                                  },
                                  "flexDirection": {
                                      "type": "static",
                                      "content": "column"
                                  }
                              }
                          }
                      }
                  },
                  "abilities": {},
                  "style": {
                      "flex": {
                          "type": "static",
                          "content": "0 0 auto"
                      },
                      "display": {
                          "type": "static",
                          "content": "flex"
                      },
                      "alignItems": {
                          "type": "static",
                          "content": "center"
                      },
                      "flexDirection": {
                          "type": "static",
                          "content": "row"
                      }
                  },
                  "children": [
                      {
                          "type": "element",
                          "content": {
                              "elementType": "text",
                              "referencedStyles": {
                                  "db1acee6-818e-4ae8-b7e0-dd1637733a28": {
                                      "type": "style-map",
                                      "content": {
                                          "conditions": [
                                              {
                                                  "conditionType": "screen-size",
                                                  "maxWidth": 767
                                              }
                                          ],
                                          "mapType": "inlined",
                                          "styles": {
                                              "marginBottom": {
                                                  "type": "dynamic",
                                                  "content": {
                                                      "referenceType": "token",
                                                      "id": "--dl-space-space-unit"
                                                  }
                                              }
                                          }
                                      }
                                  }
                              },
                              "abilities": {
                                  "link": {
                                      "type": "navlink",
                                      "content": {
                                          "routeName": "About"
                                      }
                                  }
                              },
                              "style": {
                                  "textDecoration": {
                                      "type": "static",
                                      "content": "none"
                                  }
                              },
                              "children": [
                                  {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "prop",
                                          "id": "text"
                                      }
                                  }
                              ],
                              "semanticType": "span"
                          }
                      },
                      {
                          "type": "element",
                          "content": {
                              "elementType": "text",
                              "referencedStyles": {
                                  "f0040a92-5fc6-4367-99b6-ed0d915450a6": {
                                      "type": "style-map",
                                      "content": {
                                          "conditions": [
                                              {
                                                  "conditionType": "screen-size",
                                                  "maxWidth": 767
                                              }
                                          ],
                                          "mapType": "inlined",
                                          "styles": {
                                              "marginLeft": {
                                                  "type": "static",
                                                  "content": "0"
                                              },
                                              "marginBottom": {
                                                  "type": "dynamic",
                                                  "content": {
                                                      "referenceType": "token",
                                                      "id": "--dl-space-space-unit"
                                                  }
                                              }
                                          }
                                      }
                                  }
                              },
                              "abilities": {},
                              "style": {
                                  "marginLeft": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-twounits"
                                      }
                                  }
                              },
                              "children": [
                                  {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "prop",
                                          "id": "text1"
                                      }
                                  }
                              ],
                              "semanticType": "span"
                          }
                      },
                      {
                          "type": "element",
                          "content": {
                              "elementType": "text",
                              "referencedStyles": {
                                  "7a317b89-1ff8-4904-8e39-cd3596864c32": {
                                      "type": "style-map",
                                      "content": {
                                          "conditions": [
                                              {
                                                  "conditionType": "screen-size",
                                                  "maxWidth": 767
                                              }
                                          ],
                                          "mapType": "inlined",
                                          "styles": {
                                              "marginLeft": {
                                                  "type": "static",
                                                  "content": "0"
                                              },
                                              "marginBottom": {
                                                  "type": "dynamic",
                                                  "content": {
                                                      "referenceType": "token",
                                                      "id": "--dl-space-space-unit"
                                                  }
                                              }
                                          }
                                      }
                                  }
                              },
                              "abilities": {},
                              "style": {
                                  "marginLeft": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-twounits"
                                      }
                                  }
                              },
                              "children": [
                                  {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "prop",
                                          "id": "text2"
                                      }
                                  }
                              ],
                              "semanticType": "span"
                          }
                      },
                      {
                          "type": "element",
                          "content": {
                              "elementType": "text",
                              "referencedStyles": {
                                  "a4ccfeca-7315-43b8-9c59-2a32cbaac84f": {
                                      "type": "style-map",
                                      "content": {
                                          "conditions": [
                                              {
                                                  "conditionType": "screen-size",
                                                  "maxWidth": 767
                                              }
                                          ],
                                          "mapType": "inlined",
                                          "styles": {
                                              "marginLeft": {
                                                  "type": "static",
                                                  "content": "0"
                                              },
                                              "marginBottom": {
                                                  "type": "dynamic",
                                                  "content": {
                                                      "referenceType": "token",
                                                      "id": "--dl-space-space-unit"
                                                  }
                                              }
                                          }
                                      }
                                  }
                              },
                              "abilities": {},
                              "style": {
                                  "marginLeft": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-twounits"
                                      }
                                  }
                              },
                              "children": [
                                  {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "prop",
                                          "id": "text3"
                                      }
                                  }
                              ],
                              "semanticType": "span"
                          }
                      },
                      {
                          "type": "element",
                          "content": {
                              "elementType": "text",
                              "referencedStyles": {
                                  "0c8b2e95-0504-40e8-accf-bb8834a13069": {
                                      "type": "style-map",
                                      "content": {
                                          "conditions": [
                                              {
                                                  "conditionType": "screen-size",
                                                  "maxWidth": 767
                                              }
                                          ],
                                          "mapType": "inlined",
                                          "styles": {
                                              "marginLeft": {
                                                  "type": "static",
                                                  "content": "0"
                                              },
                                              "marginBottom": {
                                                  "type": "dynamic",
                                                  "content": {
                                                      "referenceType": "token",
                                                      "id": "--dl-space-space-unit"
                                                  }
                                              }
                                          }
                                      }
                                  }
                              },
                              "abilities": {},
                              "style": {
                                  "marginLeft": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-twounits"
                                      }
                                  }
                              },
                              "children": [
                                  {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "prop",
                                          "id": "text4"
                                      }
                                  }
                              ],
                              "semanticType": "span"
                          }
                      }
                  ],
                  "semanticType": "nav"
              }
          },
          "name": "NavigationLinks",
          "styleSetDefinitions": {
              "rootClassName": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "rootClassName1": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "rootClassName2": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "rootClassName3": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "rootClassName4": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "rootClassName5": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "rootClassName6": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "rootClassName7": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              }
          }
      },
      "Header": {
          "propDefinitions": {
              "image_src": {
                  "id": "601323c3-d5dc-4b10-80ad-c525b657b1f5",
                  "defaultValue": "https://presentation-website-assets.teleporthq.io/logos/logo.png",
                  "type": "string"
              },
              "image_alt": {
                  "id": "cc962a83-18b6-4726-a48e-76e052f2c185",
                  "defaultValue": "logo",
                  "type": "string"
              },
              "Login": {
                  "id": "86ba5e4e-f72c-4a5e-8ea9-062cee745891",
                  "defaultValue": "Login",
                  "type": "string"
              },
              "Register": {
                  "id": "2236a64f-65fb-4c6e-bad4-0b49edbab440",
                  "defaultValue": "Register",
                  "type": "string"
              },
              "image_src1": {
                  "id": "96165675-8961-4677-a985-1009731609c3",
                  "defaultValue": "https://presentation-website-assets.teleporthq.io/logos/logo.png",
                  "type": "string"
              },
              "image_alt1": {
                  "id": "0fc7986b-0f08-497d-b6c5-089ed630cb86",
                  "defaultValue": "image",
                  "type": "string"
              },
              "rootClassName": {
                  "id": "6e03e757-c9ee-4826-ac1c-3bab4a847b2c",
                  "defaultValue": "",
                  "type": "string"
              }
          },
          "node": {
              "type": "element",
              "content": {
                  "elementType": "container",
                  "name": "Header",
                  "referencedStyles": {
                      "f7a70914-a93d-42b6-8e08-d7308f987005": {
                          "type": "style-map",
                          "content": {
                              "conditions": [
                                  {
                                      "conditionType": "screen-size",
                                      "maxWidth": 479
                                  }
                              ],
                              "mapType": "inlined",
                              "styles": {
                                  "padding": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-unit"
                                      }
                                  }
                              }
                          }
                      },
                      "7ce7d4c6-65a0-42ef-92b1-533545d32ecb": {
                          "type": "style-map",
                          "content": {
                              "conditions": [
                                  {
                                      "conditionType": "screen-size",
                                      "maxWidth": 767
                                  }
                              ],
                              "mapType": "inlined",
                              "styles": {
                                  "paddingLeft": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-twounits"
                                      }
                                  },
                                  "paddingRight": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-twounits"
                                      }
                                  }
                              }
                          }
                      },
                      "c1964328-5a00-4e1e-a118-f395998202c1": {
                          "type": "style-map",
                          "content": {
                              "mapType": "component-referenced",
                              "content": {
                                  "type": "dynamic",
                                  "content": {
                                      "referenceType": "prop",
                                      "id": "rootClassName"
                                  }
                              }
                          }
                      }
                  },
                  "abilities": {},
                  "attrs": {
                      "data-role": {
                          "type": "static",
                          "content": "Header"
                      }
                  },
                  "style": {
                      "width": {
                          "type": "static",
                          "content": "100%"
                      },
                      "display": {
                          "type": "static",
                          "content": "flex"
                      },
                      "maxWidth": {
                          "type": "dynamic",
                          "content": {
                              "referenceType": "token",
                              "id": "--dl-size-size-maxwidth"
                          }
                      },
                      "alignItems": {
                          "type": "static",
                          "content": "center"
                      },
                      "paddingTop": {
                          "type": "dynamic",
                          "content": {
                              "referenceType": "token",
                              "id": "--dl-space-space-twounits"
                          }
                      },
                      "paddingLeft": {
                          "type": "dynamic",
                          "content": {
                              "referenceType": "token",
                              "id": "--dl-space-space-threeunits"
                          }
                      },
                      "paddingRight": {
                          "type": "dynamic",
                          "content": {
                              "referenceType": "token",
                              "id": "--dl-space-space-threeunits"
                          }
                      },
                      "paddingBottom": {
                          "type": "dynamic",
                          "content": {
                              "referenceType": "token",
                              "id": "--dl-space-space-twounits"
                          }
                      },
                      "justifyContent": {
                          "type": "static",
                          "content": "space-between"
                      }
                  },
                  "children": [
                      {
                          "type": "element",
                          "content": {
                              "elementType": "image",
                              "referencedStyles": {},
                              "abilities": {
                                  "link": {
                                      "type": "navlink",
                                      "content": {
                                          "routeName": "Home"
                                      }
                                  }
                              },
                              "attrs": {
                                  "alt": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "prop",
                                          "id": "image_alt"
                                      }
                                  },
                                  "src": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "prop",
                                          "id": "image_src"
                                      }
                                  }
                              },
                              "style": {
                                  "height": {
                                      "type": "static",
                                      "content": "2rem"
                                  },
                                  "textDecoration": {
                                      "type": "static",
                                      "content": "none"
                                  }
                              },
                              "children": []
                          }
                      },
                      {
                          "type": "element",
                          "content": {
                              "elementType": "container",
                              "name": "Nav",
                              "referencedStyles": {
                                  "2a26b67b-d08e-48f6-ac60-32f02dc0f471": {
                                      "type": "style-map",
                                      "content": {
                                          "conditions": [
                                              {
                                                  "conditionType": "screen-size",
                                                  "maxWidth": 767
                                              }
                                          ],
                                          "mapType": "inlined",
                                          "styles": {
                                              "display": {
                                                  "type": "static",
                                                  "content": "none"
                                              }
                                          }
                                      }
                                  }
                              },
                              "abilities": {},
                              "style": {
                                  "display": {
                                      "type": "static",
                                      "content": "flex"
                                  }
                              },
                              "children": [
                                  {
                                      "type": "element",
                                      "content": {
                                          "elementType": "component",
                                          "dependency": {
                                              "type": "local"
                                          },
                                          "name": "NavigationLinks",
                                          "referencedStyles": {},
                                          "abilities": {},
                                          "attrs": {
                                              "rootClassName": {
                                                  "type": "comp-style",
                                                  "content": "rootClassName10"
                                              }
                                          },
                                          "children": [],
                                          "semanticType": "NavigationLinks"
                                      }
                                  }
                              ],
                              "semanticType": "div"
                          }
                      },
                      {
                          "type": "element",
                          "content": {
                              "elementType": "container",
                              "name": "BtnGroup",
                              "referencedStyles": {
                                  "10826acb-433c-4b96-a5a0-d597b3b7d44a": {
                                      "type": "style-map",
                                      "content": {
                                          "conditions": [
                                              {
                                                  "conditionType": "screen-size",
                                                  "maxWidth": 767
                                              }
                                          ],
                                          "mapType": "inlined",
                                          "styles": {
                                              "display": {
                                                  "type": "static",
                                                  "content": "none"
                                              }
                                          }
                                      }
                                  }
                              },
                              "abilities": {},
                              "style": {
                                  "display": {
                                      "type": "static",
                                      "content": "flex"
                                  },
                                  "alignItems": {
                                      "type": "static",
                                      "content": "center"
                                  },
                                  "flexDirection": {
                                      "type": "static",
                                      "content": "row"
                                  },
                                  "justifyContent": {
                                      "type": "static",
                                      "content": "space-between"
                                  }
                              },
                              "children": [
                                  {
                                      "type": "element",
                                      "content": {
                                          "elementType": "button",
                                          "name": "Login",
                                          "referencedStyles": {
                                              "1c601ebb-ac3d-4b4a-b28e-eeadc638127a": {
                                                  "type": "style-map",
                                                  "content": {
                                                      "mapType": "project-referenced",
                                                      "referenceId": "button"
                                                  }
                                              }
                                          },
                                          "abilities": {},
                                          "style": {
                                              "borderWidth": {
                                                  "type": "static",
                                                  "content": "0px"
                                              },
                                              "marginRight": {
                                                  "type": "dynamic",
                                                  "content": {
                                                      "referenceType": "token",
                                                      "id": "--dl-space-space-twounits"
                                                  }
                                              }
                                          },
                                          "children": [
                                              {
                                                  "type": "dynamic",
                                                  "content": {
                                                      "referenceType": "prop",
                                                      "id": "Login"
                                                  }
                                              }
                                          ]
                                      }
                                  },
                                  {
                                      "type": "element",
                                      "content": {
                                          "elementType": "button",
                                          "name": "Register",
                                          "referencedStyles": {
                                              "cea81a34-4ba7-4d42-a34d-ee567ffc9432": {
                                                  "type": "style-map",
                                                  "content": {
                                                      "mapType": "project-referenced",
                                                      "referenceId": "button"
                                                  }
                                              }
                                          },
                                          "abilities": {},
                                          "children": [
                                              {
                                                  "type": "dynamic",
                                                  "content": {
                                                      "referenceType": "prop",
                                                      "id": "Register"
                                                  }
                                              }
                                          ]
                                      }
                                  }
                              ],
                              "semanticType": "div"
                          }
                      },
                      {
                          "type": "element",
                          "content": {
                              "elementType": "container",
                              "name": "BurgerMenu",
                              "referencedStyles": {
                                  "e77c96cc-f59e-47c8-8c4d-c96a425741b9": {
                                      "type": "style-map",
                                      "content": {
                                          "conditions": [
                                              {
                                                  "conditionType": "screen-size",
                                                  "maxWidth": 767
                                              }
                                          ],
                                          "mapType": "inlined",
                                          "styles": {
                                              "display": {
                                                  "type": "static",
                                                  "content": "flex"
                                              },
                                              "alignItems": {
                                                  "type": "static",
                                                  "content": "center"
                                              },
                                              "justifyContent": {
                                                  "type": "static",
                                                  "content": "center"
                                              }
                                          }
                                      }
                                  }
                              },
                              "abilities": {},
                              "attrs": {
                                  "data-type": {
                                      "type": "static",
                                      "content": "BurgerMenu"
                                  }
                              },
                              "style": {
                                  "display": {
                                      "type": "static",
                                      "content": "none"
                                  }
                              },
                              "children": [
                                  {
                                      "type": "element",
                                      "content": {
                                          "elementType": "icon",
                                          "referencedStyles": {},
                                          "abilities": {},
                                          "attrs": {
                                              "viewBox": {
                                                  "type": "static",
                                                  "content": "0 0 1024 1024"
                                              }
                                          },
                                          "style": {
                                              "width": {
                                                  "type": "dynamic",
                                                  "content": {
                                                      "referenceType": "token",
                                                      "id": "--dl-size-size-xsmall"
                                                  }
                                              },
                                              "height": {
                                                  "type": "dynamic",
                                                  "content": {
                                                      "referenceType": "token",
                                                      "id": "--dl-size-size-xsmall"
                                                  }
                                              }
                                          },
                                          "children": [
                                              {
                                                  "type": "element",
                                                  "content": {
                                                      "elementType": "icon",
                                                      "referencedStyles": {},
                                                      "abilities": {},
                                                      "attrs": {
                                                          "d": {
                                                              "type": "static",
                                                              "content": "M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
                                                          }
                                                      },
                                                      "children": [],
                                                      "semanticType": "path"
                                                  }
                                              }
                                          ]
                                      }
                                  }
                              ],
                              "semanticType": "div"
                          }
                      },
                      {
                          "type": "element",
                          "content": {
                              "elementType": "container",
                              "name": "MobileMenu",
                              "referencedStyles": {
                                  "1d4e9d28-28c5-4ccc-982e-ecfc69bb5152": {
                                      "type": "style-map",
                                      "content": {
                                          "conditions": [
                                              {
                                                  "conditionType": "screen-size",
                                                  "maxWidth": 479
                                              }
                                          ],
                                          "mapType": "inlined",
                                          "styles": {
                                              "padding": {
                                                  "type": "static",
                                                  "content": "16px"
                                              }
                                          }
                                      }
                                  }
                              },
                              "abilities": {},
                              "attrs": {
                                  "data-type": {
                                      "type": "static",
                                      "content": "MobileMenu"
                                  }
                              },
                              "style": {
                                  "top": {
                                      "type": "static",
                                      "content": "0px"
                                  },
                                  "left": {
                                      "type": "static",
                                      "content": "0px"
                                  },
                                  "width": {
                                      "type": "static",
                                      "content": "100%"
                                  },
                                  "height": {
                                      "type": "static",
                                      "content": "100vh"
                                  },
                                  "zIndex": {
                                      "type": "static",
                                      "content": "100"
                                  },
                                  "display": {
                                      "type": "static",
                                      "content": "none"
                                  },
                                  "padding": {
                                      "type": "static",
                                      "content": "32px"
                                  },
                                  "position": {
                                      "type": "static",
                                      "content": "absolute"
                                  },
                                  "flexDirection": {
                                      "type": "static",
                                      "content": "column"
                                  },
                                  "justifyContent": {
                                      "type": "static",
                                      "content": "space-between"
                                  },
                                  "backgroundColor": {
                                      "type": "static",
                                      "content": "#fff"
                                  }
                              },
                              "children": [
                                  {
                                      "type": "element",
                                      "content": {
                                          "elementType": "container",
                                          "name": "Nav",
                                          "referencedStyles": {},
                                          "abilities": {},
                                          "style": {
                                              "display": {
                                                  "type": "static",
                                                  "content": "flex"
                                              },
                                              "alignItems": {
                                                  "type": "static",
                                                  "content": "flex-start"
                                              },
                                              "flexDirection": {
                                                  "type": "static",
                                                  "content": "column"
                                              }
                                          },
                                          "children": [
                                              {
                                                  "type": "element",
                                                  "content": {
                                                      "elementType": "container",
                                                      "name": "Container",
                                                      "referencedStyles": {},
                                                      "abilities": {},
                                                      "style": {
                                                          "width": {
                                                              "type": "static",
                                                              "content": "100%"
                                                          },
                                                          "display": {
                                                              "type": "static",
                                                              "content": "flex"
                                                          },
                                                          "alignItems": {
                                                              "type": "static",
                                                              "content": "center"
                                                          },
                                                          "marginBottom": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-space-space-threeunits"
                                                              }
                                                          },
                                                          "justifyContent": {
                                                              "type": "static",
                                                              "content": "space-between"
                                                          }
                                                      },
                                                      "children": [
                                                          {
                                                              "type": "element",
                                                              "content": {
                                                                  "elementType": "image",
                                                                  "referencedStyles": {},
                                                                  "abilities": {},
                                                                  "attrs": {
                                                                      "alt": {
                                                                          "type": "dynamic",
                                                                          "content": {
                                                                              "referenceType": "prop",
                                                                              "id": "image_alt1"
                                                                          }
                                                                      },
                                                                      "src": {
                                                                          "type": "dynamic",
                                                                          "content": {
                                                                              "referenceType": "prop",
                                                                              "id": "image_src1"
                                                                          }
                                                                      }
                                                                  },
                                                                  "style": {
                                                                      "height": {
                                                                          "type": "static",
                                                                          "content": "2rem"
                                                                      }
                                                                  },
                                                                  "children": []
                                                              }
                                                          },
                                                          {
                                                              "type": "element",
                                                              "content": {
                                                                  "elementType": "container",
                                                                  "name": "MenuClose",
                                                                  "referencedStyles": {},
                                                                  "abilities": {},
                                                                  "attrs": {
                                                                      "data-type": {
                                                                          "type": "static",
                                                                          "content": "CloseMobileMenu"
                                                                      }
                                                                  },
                                                                  "style": {
                                                                      "display": {
                                                                          "type": "static",
                                                                          "content": "flex"
                                                                      },
                                                                      "alignItems": {
                                                                          "type": "static",
                                                                          "content": "center"
                                                                      },
                                                                      "justifyContent": {
                                                                          "type": "static",
                                                                          "content": "center"
                                                                      }
                                                                  },
                                                                  "children": [
                                                                      {
                                                                          "type": "element",
                                                                          "content": {
                                                                              "elementType": "icon",
                                                                              "referencedStyles": {},
                                                                              "abilities": {},
                                                                              "attrs": {
                                                                                  "viewBox": {
                                                                                      "type": "static",
                                                                                      "content": "0 0 1024 1024"
                                                                                  }
                                                                              },
                                                                              "style": {
                                                                                  "width": {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "token",
                                                                                          "id": "--dl-size-size-xsmall"
                                                                                      }
                                                                                  },
                                                                                  "height": {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "token",
                                                                                          "id": "--dl-size-size-xsmall"
                                                                                      }
                                                                                  }
                                                                              },
                                                                              "children": [
                                                                                  {
                                                                                      "type": "element",
                                                                                      "content": {
                                                                                          "elementType": "icon",
                                                                                          "referencedStyles": {},
                                                                                          "abilities": {},
                                                                                          "attrs": {
                                                                                              "d": {
                                                                                                  "type": "static",
                                                                                                  "content": "M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                                                                                              }
                                                                                          },
                                                                                          "children": [],
                                                                                          "semanticType": "path"
                                                                                      }
                                                                                  }
                                                                              ]
                                                                          }
                                                                      }
                                                                  ],
                                                                  "semanticType": "div"
                                                              }
                                                          }
                                                      ],
                                                      "semanticType": "div"
                                                  }
                                              },
                                              {
                                                  "type": "element",
                                                  "content": {
                                                      "elementType": "component",
                                                      "dependency": {
                                                          "type": "local"
                                                      },
                                                      "name": "NavigationLinks",
                                                      "referencedStyles": {},
                                                      "abilities": {},
                                                      "attrs": {
                                                          "rootClassName": {
                                                              "type": "comp-style",
                                                              "content": "rootClassName11"
                                                          }
                                                      },
                                                      "children": [],
                                                      "semanticType": "NavigationLinks"
                                                  }
                                              }
                                          ],
                                          "semanticType": "div"
                                      }
                                  },
                                  {
                                      "type": "element",
                                      "content": {
                                          "elementType": "container",
                                          "name": "IconGroup",
                                          "referencedStyles": {},
                                          "abilities": {},
                                          "children": [
                                              {
                                                  "type": "element",
                                                  "content": {
                                                      "elementType": "icon",
                                                      "referencedStyles": {},
                                                      "abilities": {},
                                                      "attrs": {
                                                          "viewBox": {
                                                              "type": "static",
                                                              "content": "0 0 950.8571428571428 1024"
                                                          }
                                                      },
                                                      "style": {
                                                          "width": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-size-size-xsmall"
                                                              }
                                                          },
                                                          "height": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-size-size-xsmall"
                                                              }
                                                          },
                                                          "marginRight": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-space-space-twounits"
                                                              }
                                                          }
                                                      },
                                                      "children": [
                                                          {
                                                              "type": "element",
                                                              "content": {
                                                                  "elementType": "icon",
                                                                  "referencedStyles": {},
                                                                  "abilities": {},
                                                                  "attrs": {
                                                                      "d": {
                                                                          "type": "static",
                                                                          "content": "M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                                                                      }
                                                                  },
                                                                  "children": [],
                                                                  "semanticType": "path"
                                                              }
                                                          }
                                                      ]
                                                  }
                                              },
                                              {
                                                  "type": "element",
                                                  "content": {
                                                      "elementType": "icon",
                                                      "referencedStyles": {},
                                                      "abilities": {},
                                                      "attrs": {
                                                          "viewBox": {
                                                              "type": "static",
                                                              "content": "0 0 877.7142857142857 1024"
                                                          }
                                                      },
                                                      "style": {
                                                          "width": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-size-size-xsmall"
                                                              }
                                                          },
                                                          "height": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-size-size-xsmall"
                                                              }
                                                          },
                                                          "marginRight": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-space-space-twounits"
                                                              }
                                                          }
                                                      },
                                                      "children": [
                                                          {
                                                              "type": "element",
                                                              "content": {
                                                                  "elementType": "icon",
                                                                  "referencedStyles": {},
                                                                  "abilities": {},
                                                                  "attrs": {
                                                                      "d": {
                                                                          "type": "static",
                                                                          "content": "M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                                                                      }
                                                                  },
                                                                  "children": [],
                                                                  "semanticType": "path"
                                                              }
                                                          }
                                                      ]
                                                  }
                                              },
                                              {
                                                  "type": "element",
                                                  "content": {
                                                      "elementType": "icon",
                                                      "referencedStyles": {},
                                                      "abilities": {},
                                                      "attrs": {
                                                          "viewBox": {
                                                              "type": "static",
                                                              "content": "0 0 602.2582857142856 1024"
                                                          }
                                                      },
                                                      "style": {
                                                          "width": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-size-size-xsmall"
                                                              }
                                                          },
                                                          "height": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-size-size-xsmall"
                                                              }
                                                          }
                                                      },
                                                      "children": [
                                                          {
                                                              "type": "element",
                                                              "content": {
                                                                  "elementType": "icon",
                                                                  "referencedStyles": {},
                                                                  "abilities": {},
                                                                  "attrs": {
                                                                      "d": {
                                                                          "type": "static",
                                                                          "content": "M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                                                                      }
                                                                  },
                                                                  "children": [],
                                                                  "semanticType": "path"
                                                              }
                                                          }
                                                      ]
                                                  }
                                              }
                                          ],
                                          "semanticType": "div"
                                      }
                                  }
                              ],
                              "semanticType": "div"
                          }
                      }
                  ],
                  "semanticType": "header"
              }
          },
          "name": "Header",
          "styleSetDefinitions": {
              "rootClassName": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              }
          }
      },
      "Hero": {
          "propDefinitions": {
              "image_src": {
                  "id": "09427368-90c9-497c-907e-754b8ba0b139",
                  "defaultValue": "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&ixlib=rb-1.2.1&h=1200",
                  "type": "string"
              },
              "image_alt": {
                  "id": "2bad8f83-542b-448b-90de-314212b2b334",
                  "defaultValue": "image",
                  "type": "string"
              },
              "namedSlot": {
                  "type": "element",
                  "id": "9e1857ce-9f52-4dcd-9000-ddaab6af0a53",
                  "defaultValue": {
                    "type": "element",
                    "content": {
                      "elementType": "container",
                      "style": {
                        "padding": "20px",
                        "backgroundColor": "#f0f0f0"
                      },
                      "children": ["This is a default value for named-slot"]
                    }
                  }
              },
              "button": {
                  "id": "f4abacea-00b2-4c0b-8ccf-c23d0f0c7700",
                  "defaultValue": "Get Started",
                  "type": "string"
              },
              "button1": {
                  "id": "1b3866f9-5667-4b4f-97c4-5ca79f8254a4",
                  "defaultValue": "Learn More",
                  "type": "string"
              }
          },
          "node": {
              "type": "element",
              "content": {
                  "elementType": "container",
                  "name": "Hero",
                  "referencedStyles": {
                      "3ffdd7c0-6c8f-4139-9d57-9cd88f43cf27": {
                          "type": "style-map",
                          "content": {
                              "conditions": [
                                  {
                                      "conditionType": "screen-size",
                                      "maxWidth": 767
                                  }
                              ],
                              "mapType": "inlined",
                              "styles": {
                                  "paddingLeft": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-twounits"
                                      }
                                  },
                                  "paddingRight": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-twounits"
                                      }
                                  }
                              }
                          }
                      },
                      "5936298f-80ab-4221-83f8-90ce5984b023": {
                          "type": "style-map",
                          "content": {
                              "conditions": [
                                  {
                                      "conditionType": "screen-size",
                                      "maxWidth": 991
                                  }
                              ],
                              "mapType": "inlined",
                              "styles": {
                                  "flexDirection": {
                                      "type": "static",
                                      "content": "column"
                                  }
                              }
                          }
                      },
                      "86ca7cf7-0b5b-4453-9e30-c15e16c6165b": {
                          "type": "style-map",
                          "content": {
                              "conditions": [
                                  {
                                      "conditionType": "screen-size",
                                      "maxWidth": 479
                                  }
                              ],
                              "mapType": "inlined",
                              "styles": {
                                  "paddingTop": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-twounits"
                                      }
                                  },
                                  "paddingLeft": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-unit"
                                      }
                                  },
                                  "paddingRight": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-unit"
                                      }
                                  },
                                  "paddingBottom": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-twounits"
                                      }
                                  }
                              }
                          }
                      }
                  },
                  "abilities": {},
                  "style": {
                      "width": {
                          "type": "static",
                          "content": "100%"
                      },
                      "display": {
                          "type": "static",
                          "content": "flex"
                      },
                      "padding": {
                          "type": "dynamic",
                          "content": {
                              "referenceType": "token",
                              "id": "--dl-space-space-threeunits"
                          }
                      },
                      "maxWidth": {
                          "type": "dynamic",
                          "content": {
                              "referenceType": "token",
                              "id": "--dl-size-size-maxwidth"
                          }
                      },
                      "minHeight": {
                          "type": "static",
                          "content": "80vh"
                      },
                      "alignItems": {
                          "type": "static",
                          "content": "center"
                      },
                      "flexDirection": {
                          "type": "static",
                          "content": "row"
                      },
                      "justifyContent": {
                          "type": "static",
                          "content": "space-between"
                      }
                  },
                  "children": [
                      {
                          "type": "element",
                          "content": {
                              "elementType": "container",
                              "referencedStyles": {
                                  "344948ea-fea3-42a4-8fc0-d3a4e382744b": {
                                      "type": "style-map",
                                      "content": {
                                          "conditions": [
                                              {
                                                  "conditionType": "screen-size",
                                                  "maxWidth": 991
                                              }
                                          ],
                                          "mapType": "inlined",
                                          "styles": {
                                              "alignItems": {
                                                  "type": "static",
                                                  "content": "center"
                                              },
                                              "marginRight": {
                                                  "type": "static",
                                                  "content": "0px"
                                              },
                                              "marginBottom": {
                                                  "type": "dynamic",
                                                  "content": {
                                                      "referenceType": "token",
                                                      "id": "--dl-space-space-twounits"
                                                  }
                                              },
                                              "paddingRight": {
                                                  "type": "static",
                                                  "content": "0px"
                                              }
                                          }
                                      }
                                  },
                                  "6776dbcd-58b2-4513-bcb8-25761c12a4c7": {
                                      "type": "style-map",
                                      "content": {
                                          "conditions": [
                                              {
                                                  "conditionType": "screen-size",
                                                  "maxWidth": 479
                                              }
                                          ],
                                          "mapType": "inlined",
                                          "styles": {
                                              "marginBottom": {
                                                  "type": "dynamic",
                                                  "content": {
                                                      "referenceType": "token",
                                                      "id": "--dl-space-space-unit"
                                                  }
                                              }
                                          }
                                      }
                                  }
                              },
                              "abilities": {},
                              "style": {
                                  "display": {
                                      "type": "static",
                                      "content": "flex"
                                  },
                                  "marginRight": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-threeunits"
                                      }
                                  },
                                  "paddingRight": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-threeunits"
                                      }
                                  },
                                  "flexDirection": {
                                      "type": "static",
                                      "content": "column"
                                  }
                              },
                              "children": [
                                  {
                                      "type": "element",
                                      "content": {
                                          "elementType": "container",
                                          "referencedStyles": {
                                              "78d44ec5-87ca-4329-b211-c840c24bd2ce": {
                                                  "type": "style-map",
                                                  "content": {
                                                      "conditions": [
                                                          {
                                                              "conditionType": "screen-size",
                                                              "maxWidth": 991
                                                          }
                                                      ],
                                                      "mapType": "inlined",
                                                      "styles": {
                                                          "textAlign": {
                                                              "type": "static",
                                                              "content": "center"
                                                          }
                                                      }
                                                  }
                                              }
                                          },
                                          "abilities": {},
                                          "style": {
                                              "fontSize": {
                                                  "type": "static",
                                                  "content": "3rem"
                                              },
                                              "maxWidth": {
                                                  "type": "static",
                                                  "content": "450px"
                                              },
                                              "fontFamily": "Super Funky"
                                          },
                                          "children": [
                                              {
                                                  "type": "dynamic",
                                                  "content": {
                                                      "referenceType": "prop",
                                                      "id": "namedSlot"
                                                  }
                                              }
                                          ]
                                      }
                                  },
                                  {
                                      "type": "element",
                                      "content": {
                                          "elementType": "text",
                                          "referencedStyles": {
                                              "3eb02776-c341-43c5-abc4-73114f485316": {
                                                  "type": "style-map",
                                                  "content": {
                                                      "conditions": [
                                                          {
                                                              "conditionType": "screen-size",
                                                              "maxWidth": 767
                                                          }
                                                      ],
                                                      "mapType": "inlined",
                                                      "styles": {
                                                          "paddingLeft": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-space-space-unit"
                                                              }
                                                          },
                                                          "paddingRight": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-space-space-unit"
                                                              }
                                                          }
                                                      }
                                                  }
                                              },
                                              "0d41a2f4-38bc-40bd-b7ac-bcebe032d0f3": {
                                                  "type": "style-map",
                                                  "content": {
                                                      "conditions": [
                                                          {
                                                              "conditionType": "screen-size",
                                                              "maxWidth": 991
                                                          }
                                                      ],
                                                      "mapType": "inlined",
                                                      "styles": {
                                                          "textAlign": {
                                                              "type": "static",
                                                              "content": "center"
                                                          },
                                                          "paddingLeft": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-space-space-threeunits"
                                                              }
                                                          },
                                                          "paddingRight": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-space-space-threeunits"
                                                              }
                                                          }
                                                      }
                                                  }
                                              }
                                          },
                                          "abilities": {},
                                          "style": {
                                              "marginTop": {
                                                  "type": "dynamic",
                                                  "content": {
                                                      "referenceType": "token",
                                                      "id": "--dl-space-space-twounits"
                                                  }
                                              },
                                              "marginBottom": {
                                                  "type": "dynamic",
                                                  "content": {
                                                      "referenceType": "token",
                                                      "id": "--dl-space-space-twounits"
                                                  }
                                              }
                                          },
                                          "children": [
                                              {
                                                  "type": "element",
                                                  "content": {
                                                      "elementType": "text",
                                                      "referencedStyles": {},
                                                      "abilities": {},
                                                      "children": [
                                                          {
                                                              "type": "element",
                                                              "content": {
                                                                  "elementType": "text",
                                                                  "referencedStyles": {},
                                                                  "abilities": {},
                                                                  "children": [
                                                                      {
                                                                          "type": "static",
                                                                          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. "
                                                                      },
                                                                      {
                                                                          "type": "raw",
                                                                          "content": " "
                                                                      }
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "type": "element",
                                                              "content": {
                                                                  "elementType": "text",
                                                                  "referencedStyles": {},
                                                                  "abilities": {},
                                                                  "children": [
                                                                      {
                                                                          "type": "static",
                                                                          "content": " "
                                                                      },
                                                                      {
                                                                          "type": "raw",
                                                                          "content": " "
                                                                      }
                                                                  ]
                                                              }
                                                          }
                                                      ],
                                                      "semanticType": "span"
                                                  }
                                              },
                                              {
                                                  "type": "element",
                                                  "content": {
                                                      "elementType": "text",
                                                      "referencedStyles": {},
                                                      "abilities": {},
                                                      "children": [
                                                          {
                                                              "type": "element",
                                                              "content": {
                                                                  "elementType": "text",
                                                                  "referencedStyles": {},
                                                                  "abilities": {},
                                                                  "children": [
                                                                      {
                                                                          "type": "static",
                                                                          "content": "Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. "
                                                                      },
                                                                      {
                                                                          "type": "raw",
                                                                          "content": " "
                                                                      }
                                                                  ]
                                                              }
                                                          },
                                                          {
                                                              "type": "element",
                                                              "content": {
                                                                  "elementType": "text",
                                                                  "referencedStyles": {},
                                                                  "abilities": {},
                                                                  "children": [
                                                                      {
                                                                          "type": "static",
                                                                          "content": " "
                                                                      },
                                                                      {
                                                                          "type": "raw",
                                                                          "content": " "
                                                                      }
                                                                  ]
                                                              }
                                                          }
                                                      ],
                                                      "semanticType": "span"
                                                  }
                                              }
                                          ],
                                          "semanticType": "span"
                                      }
                                  },
                                  {
                                      "type": "element",
                                      "content": {
                                          "elementType": "container",
                                          "name": "BtnGroup",
                                          "referencedStyles": {
                                              "a8f29e6c-4bf5-460a-9d21-2680a2c1c1a4": {
                                                  "type": "style-map",
                                                  "content": {
                                                      "conditions": [
                                                          {
                                                              "conditionType": "screen-size",
                                                              "maxWidth": 479
                                                          }
                                                      ],
                                                      "mapType": "inlined",
                                                      "styles": {
                                                          "flexDirection": {
                                                              "type": "static",
                                                              "content": "column"
                                                          }
                                                      }
                                                  }
                                              }
                                          },
                                          "abilities": {},
                                          "style": {
                                              "display": {
                                                  "type": "static",
                                                  "content": "flex"
                                              },
                                              "alignItems": {
                                                  "type": "static",
                                                  "content": "center"
                                              },
                                              "flexDirection": {
                                                  "type": "static",
                                                  "content": "row"
                                              }
                                          },
                                          "children": [
                                              {
                                                  "type": "element",
                                                  "content": {
                                                      "elementType": "button",
                                                      "referencedStyles": {
                                                          "587387e6-9e19-499b-a10b-25e16c26f942": {
                                                              "type": "style-map",
                                                              "content": {
                                                                  "conditions": [
                                                                      {
                                                                          "conditionType": "element-state",
                                                                          "content": "hover"
                                                                      }
                                                                  ],
                                                                  "mapType": "inlined",
                                                                  "styles": {
                                                                      "color": {
                                                                          "type": "dynamic",
                                                                          "content": {
                                                                              "referenceType": "token",
                                                                              "id": "--dl-color-gray-black"
                                                                          }
                                                                      },
                                                                      "backgroundColor": {
                                                                          "type": "dynamic",
                                                                          "content": {
                                                                              "referenceType": "token",
                                                                              "id": "--dl-color-gray-white"
                                                                          }
                                                                      }
                                                                  }
                                                              }
                                                          },
                                                          "059c93d1-c3d3-4662-9c6c-d2a861154c5d": {
                                                              "type": "style-map",
                                                              "content": {
                                                                  "mapType": "project-referenced",
                                                                  "referenceId": "button"
                                                              }
                                                          },
                                                          "0552c021-5ab1-4d40-99b8-04d3fa063d10": {
                                                              "id": "0552c021-5ab1-4d40-99b8-04d3fa063d10",
                                                              "type": "style-map",
                                                              "content": {
                                                                  "mapType": "project-referenced",
                                                                  "referenceId": "primary-button"
                                                              }
                                                          }
                                                      },
                                                      "abilities": {},
                                                      "style": {
                                                          "paddingTop": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-space-space-unit"
                                                              }
                                                          },
                                                          "transition": {
                                                              "type": "static",
                                                              "content": "0.3s"
                                                          },
                                                          "paddingLeft": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-space-space-twounits"
                                                              }
                                                          },
                                                          "paddingRight": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-space-space-twounits"
                                                              }
                                                          },
                                                          "paddingBottom": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-space-space-unit"
                                                              }
                                                          }
                                                      },
                                                      "children": [
                                                          {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "prop",
                                                                  "id": "button"
                                                              }
                                                          }
                                                      ]
                                                  }
                                              },
                                              {
                                                  "type": "element",
                                                  "content": {
                                                      "elementType": "button",
                                                      "referencedStyles": {
                                                          "20c40652-8f4b-4675-989c-8485b2f3f1b7": {
                                                              "type": "style-map",
                                                              "content": {
                                                                  "conditions": [
                                                                      {
                                                                          "conditionType": "element-state",
                                                                          "content": "hover"
                                                                      }
                                                                  ],
                                                                  "mapType": "inlined",
                                                                  "styles": {
                                                                      "borderColor": {
                                                                          "type": "dynamic",
                                                                          "content": {
                                                                              "referenceType": "token",
                                                                              "id": "--dl-color-gray-black"
                                                                          }
                                                                      },
                                                                      "color": {
                                                                          "type": "dynamic",
                                                                          "content": {
                                                                              "referenceType": "token",
                                                                              "id": "--dl-color-gray-white"
                                                                          }
                                                                      },
                                                                      "backgroundColor": {
                                                                          "type": "dynamic",
                                                                          "content": {
                                                                              "referenceType": "token",
                                                                              "id": "--dl-color-gray-black"
                                                                          }
                                                                      }
                                                                  }
                                                              }
                                                          },
                                                          "06670c8b-a0c0-491d-83f1-56c73d7ae213": {
                                                              "type": "style-map",
                                                              "content": {
                                                                  "mapType": "project-referenced",
                                                                  "referenceId": "button"
                                                              }
                                                          },
                                                          "49c3aaf7-2ca0-4cf4-a9cd-c6582c629dc7": {
                                                              "type": "style-map",
                                                              "content": {
                                                                  "conditions": [
                                                                      {
                                                                          "conditionType": "screen-size",
                                                                          "maxWidth": 479
                                                                      }
                                                                  ],
                                                                  "mapType": "inlined",
                                                                  "styles": {
                                                                      "marginTop": {
                                                                          "type": "dynamic",
                                                                          "content": {
                                                                              "referenceType": "token",
                                                                              "id": "--dl-space-space-unit"
                                                                          }
                                                                      },
                                                                      "marginLeft": {
                                                                          "type": "static",
                                                                          "content": "0px"
                                                                      }
                                                                  }
                                                              }
                                                          },
                                                          "9e7b7ffa-1ad3-42f3-9535-76a6d74b5691": {
                                                              "id": "9e7b7ffa-1ad3-42f3-9535-76a6d74b5691",
                                                              "type": "style-map",
                                                              "content": {
                                                                  "mapType": "project-referenced",
                                                                  "referenceId": "secondary-button"
                                                              }
                                                          }
                                                      },
                                                      "abilities": {},
                                                      "style": {
                                                          "marginLeft": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-space-space-unit"
                                                              }
                                                          },
                                                          "paddingTop": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-space-space-unit"
                                                              }
                                                          },
                                                          "transition": {
                                                              "type": "static",
                                                              "content": "0.3s"
                                                          },
                                                          "paddingLeft": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-space-space-twounits"
                                                              }
                                                          },
                                                          "paddingRight": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-space-space-twounits"
                                                              }
                                                          },
                                                          "paddingBottom": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-space-space-unit"
                                                              }
                                                          }
                                                      },
                                                      "children": [
                                                          {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "prop",
                                                                  "id": "button1"
                                                              }
                                                          }
                                                      ]
                                                  }
                                              }
                                          ],
                                          "semanticType": "div"
                                      }
                                  }
                              ],
                              "semanticType": "div"
                          }
                      },
                      {
                          "type": "element",
                          "content": {
                              "elementType": "image",
                              "referencedStyles": {
                                  "885d62f9-2b10-4b14-8373-daa3ee90391b": {
                                      "type": "style-map",
                                      "content": {
                                          "conditions": [
                                              {
                                                  "conditionType": "screen-size",
                                                  "maxWidth": 767
                                              }
                                          ],
                                          "mapType": "inlined",
                                          "styles": {
                                              "width": {
                                                  "type": "static",
                                                  "content": "80%"
                                              }
                                          }
                                      }
                                  }
                              },
                              "abilities": {},
                              "attrs": {
                                  "alt": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "prop",
                                          "id": "image_alt"
                                      }
                                  },
                                  "src": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "prop",
                                          "id": "image_src"
                                      }
                                  }
                              },
                              "style": {
                                  "width": {
                                      "type": "static",
                                      "content": "400px"
                                  },
                                  "objectFit": {
                                      "type": "static",
                                      "content": "cover"
                                  }
                              },
                              "children": []
                          }
                      }
                  ],
                  "semanticType": "div"
              }
          },
          "name": "Hero",
          "styleSetDefinitions": {}
      },
      "FeatureCard4": {
          "propDefinitions": {
              "rootClassName": {
                  "id": "636d6f8e-21c7-45e6-9cf9-32fc692a69a8",
                  "defaultValue": "rootClassName",
                  "type": "string"
              },
              "content": {
                  "id": "d94491db-94d1-4835-9934-0c3ff6b67840",
                  "defaultValue": "Lorem ipsum",
                  "type": "string"
              },
              "description": {
                  "id": "6dc72a07-1492-4860-89f3-0e8b6d2e4a73",
                  "defaultValue": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.",
                  "type": "string"
              }
          },
          "node": {
              "type": "element",
              "content": {
                  "elementType": "container",
                  "name": "FeatureCard",
                  "referencedStyles": {
                      "0a40e87e-9c79-4469-a141-6abb2801ebe9": {
                          "type": "style-map",
                          "content": {
                              "mapType": "component-referenced",
                              "content": {
                                  "type": "dynamic",
                                  "content": {
                                      "referenceType": "prop",
                                      "id": "rootClassName"
                                  }
                              }
                          }
                      }
                  },
                  "abilities": {},
                  "style": {
                      "width": {
                          "type": "static",
                          "content": "100%"
                      },
                      "display": {
                          "type": "static",
                          "content": "flex"
                      },
                      "padding": {
                          "type": "dynamic",
                          "content": {
                              "referenceType": "token",
                              "id": "--dl-space-space-unit"
                          }
                      },
                      "maxWidth": {
                          "type": "dynamic",
                          "content": {
                              "referenceType": "token",
                              "id": "--dl-size-size-maxwidth"
                          }
                      },
                      "alignItems": {
                          "type": "static",
                          "content": "flex-start"
                      },
                      "flexDirection": {
                          "type": "static",
                          "content": "column"
                      },
                      "justifyContent": {
                          "type": "static",
                          "content": "flex-start"
                      },
                      "backgroundColor": {
                          "type": "static",
                          "content": "#fff"
                      }
                  },
                  "children": [
                      {
                          "type": "element",
                          "content": {
                              "elementType": "icon",
                              "referencedStyles": {},
                              "abilities": {},
                              "attrs": {
                                  "viewBox": {
                                      "type": "static",
                                      "content": "0 0 1024 1024"
                                  }
                              },
                              "style": {
                                  "fill": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-color-gray-500"
                                      }
                                  },
                                  "width": {
                                      "type": "static",
                                      "content": "2rem"
                                  },
                                  "height": {
                                      "type": "static",
                                      "content": "2rem"
                                  },
                                  "marginBottom": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-unit"
                                      }
                                  }
                              },
                              "children": [
                                  {
                                      "type": "element",
                                      "content": {
                                          "elementType": "icon",
                                          "referencedStyles": {},
                                          "abilities": {},
                                          "attrs": {
                                              "d": {
                                                  "type": "static",
                                                  "content": "M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"
                                              }
                                          },
                                          "children": [],
                                          "semanticType": "path"
                                      }
                                  }
                              ]
                          }
                      },
                      {
                          "type": "element",
                          "content": {
                              "elementType": "text",
                              "referencedStyles": {
                                  "4861a50b-badf-4395-969d-f0d2d597a7f8": {
                                      "type": "style-map",
                                      "content": {
                                          "conditions": [
                                              {
                                                  "conditionType": "screen-size",
                                                  "maxWidth": 479
                                              }
                                          ],
                                          "mapType": "inlined",
                                          "styles": {
                                              "fontStyle": {
                                                  "type": "static",
                                                  "content": "normal"
                                              },
                                              "fontWeight": {
                                                  "type": "static",
                                                  "content": "600"
                                              }
                                          }
                                      }
                                  },
                                  "4861a50b-badf-4395-969d-f0d2d597a7f9": {
                                      "type": "style-map",
                                      "content": {
                                          "mapType": "component-referenced",
                                          "content": {
                                              "type": "dynamic",
                                              "content": {
                                                  "referenceType": "comp",
                                                  "id": "root-class-name-4"
                                              }
                                          }
                                      }
                                  }
                              },
                              "abilities": {},
                              "style": {
                                  "fontWeight": {
                                      "type": "static",
                                      "content": "600"
                                  },
                                  "marginBottom": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-unit"
                                      }
                                  }
                              },
                              "children": [
                                  {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "prop",
                                          "id": "content"
                                      }
                                  }
                              ],
                              "semanticType": "h2"
                          }
                      },
                      {
                          "type": "element",
                          "content": {
                              "elementType": "text",
                              "referencedStyles": {},
                              "abilities": {},
                              "style": {
                                  "color": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-color-gray-700"
                                      }
                                  }
                              },
                              "children": [
                                  {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "prop",
                                          "id": "description"
                                      }
                                  }
                              ],
                              "semanticType": "span"
                          }
                      }
                  ],
                  "semanticType": "div"
              }
          },
          "name": "FeatureCard4",
          "styleSetDefinitions": {
              "rootClassName": {
                  "content": {
                      "width": {
                          "type": "static",
                          "content": "100%"
                      }
                  },
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "rootClassName1": {
                  "content": {
                      "backgroundColor": {
                          "type": "static",
                          "content": "#D9D9D9"
                      }
                  },
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "rootClassName2": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "rootClassName3": {
                  "content": {
                      "backgroundColor": {
                          "type": "dynamic",
                          "content": {
                              "referenceType": "token",
                              "id": "--dl-color-gray-500"
                          }
                      }
                  },
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "root-class-name-4": {
                  "content": {
                      "backgroundColor": {
                          "type": "static",
                          "content": "#1e622e"
                      }
                  },
                  "conditions": [],
                  "type": "reusable-component-style-override"
              }
          }
      },
      "Footer": {
          "propDefinitions": {
              "image_src": {
                  "id": "6d430ad8-cb40-4250-b292-0f9347922fd4",
                  "defaultValue": "https://presentation-website-assets.teleporthq.io/logos/logo.png",
                  "type": "string"
              },
              "image_alt": {
                  "id": "35f73ad8-b02b-499a-a50f-a2a4ae261041",
                  "defaultValue": "logo",
                  "type": "string"
              },
              "text": {
                  "id": "f439a1c6-dc7e-4c0b-953e-164f500ea79a",
                  "defaultValue": "Product",
                  "type": "string"
              },
              "text1": {
                  "id": "769f76f8-465b-44e5-93a0-7ebfade13735",
                  "defaultValue": "Features",
                  "type": "string"
              },
              "text2": {
                  "id": "32e8d12d-84ec-409c-82d5-ef77113c72f3",
                  "defaultValue": "Pricing",
                  "type": "string"
              },
              "text3": {
                  "id": "5d23b5af-a1a2-4333-9918-46c68e6f5eba",
                  "defaultValue": "Tutorials",
                  "type": "string"
              },
              "text4": {
                  "id": "afba6e7d-307b-45b6-ab0a-d014282b9268",
                  "defaultValue": "Releases",
                  "type": "string"
              },
              "text5": {
                  "id": "215a600d-7431-480e-96d5-0205369937d9",
                  "defaultValue": "Company",
                  "type": "string"
              },
              "text6": {
                  "id": "2ee23e1a-5866-4e9f-ac6c-a72377bca4dc",
                  "defaultValue": "About",
                  "type": "string"
              },
              "text7": {
                  "id": "2338ebbd-abc8-455e-b1d6-ab408da34684",
                  "defaultValue": "Careers",
                  "type": "string"
              },
              "text8": {
                  "id": "b731f788-58ce-4d92-b927-67c5874962d4",
                  "defaultValue": "Contact",
                  "type": "string"
              },
              "text9": {
                  "id": "d9ea966f-047a-400f-8931-3a2e16d71546",
                  "defaultValue": "Blog",
                  "type": "string"
              },
              "text10": {
                  "id": "62ac6502-a643-4d9a-b713-3bff2478ce29",
                  "defaultValue": "Contact Us",
                  "type": "string"
              },
              "text11": {
                  "id": "21306fb7-5805-4139-8336-adf6cd681ddc",
                  "defaultValue": "hello@teleporthq.io",
                  "type": "string"
              },
              "text12": {
                  "id": "0d56149b-47f9-4c63-9076-012f45e04c3c",
                  "defaultValue": "+123 (4567) 890",
                  "type": "string"
              },
              "text13": {
                  "id": "54425500-d989-421d-b417-6bc76bb82da1",
                  "defaultValue": "Follow Us",
                  "type": "string"
              }
          },
          "node": {
              "type": "element",
              "content": {
                  "elementType": "container",
                  "name": "Footer",
                  "referencedStyles": {
                      "c231f77e-4ec0-4a78-b2f4-ee069175f2e2": {
                          "type": "style-map",
                          "content": {
                              "conditions": [
                                  {
                                      "conditionType": "screen-size",
                                      "maxWidth": 767
                                  }
                              ],
                              "mapType": "inlined",
                              "styles": {
                                  "paddingLeft": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-twounits"
                                      }
                                  },
                                  "paddingRight": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-twounits"
                                      }
                                  }
                              }
                          }
                      },
                      "d591d1fb-aa7f-4b65-8d81-3d292f60ea8f": {
                          "type": "style-map",
                          "content": {
                              "conditions": [
                                  {
                                      "conditionType": "screen-size",
                                      "maxWidth": 479
                                  }
                              ],
                              "mapType": "inlined",
                              "styles": {
                                  "padding": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-unit"
                                      }
                                  }
                              }
                          }
                      },
                      "d818d218-816a-4881-bc89-00aa79c1d182": {
                          "type": "style-map",
                          "content": {
                              "conditions": [
                                  {
                                      "conditionType": "screen-size",
                                      "maxWidth": 991
                                  }
                              ],
                              "mapType": "inlined",
                              "styles": {
                                  "flexDirection": {
                                      "type": "static",
                                      "content": "column"
                                  }
                              }
                          }
                      }
                  },
                  "abilities": {},
                  "style": {
                      "width": {
                          "type": "static",
                          "content": "100%"
                      },
                      "display": {
                          "type": "static",
                          "content": "flex"
                      },
                      "maxWidth": {
                          "type": "dynamic",
                          "content": {
                              "referenceType": "token",
                              "id": "--dl-size-size-maxwidth"
                          }
                      },
                      "alignItems": {
                          "type": "static",
                          "content": "center"
                      },
                      "paddingTop": {
                          "type": "dynamic",
                          "content": {
                              "referenceType": "token",
                              "id": "--dl-space-space-twounits"
                          }
                      },
                      "paddingLeft": {
                          "type": "dynamic",
                          "content": {
                              "referenceType": "token",
                              "id": "--dl-space-space-threeunits"
                          }
                      },
                      "paddingRight": {
                          "type": "dynamic",
                          "content": {
                              "referenceType": "token",
                              "id": "--dl-space-space-threeunits"
                          }
                      },
                      "flexDirection": {
                          "type": "static",
                          "content": "column"
                      },
                      "paddingBottom": {
                          "type": "dynamic",
                          "content": {
                              "referenceType": "token",
                              "id": "--dl-space-space-twounits"
                          }
                      },
                      "justifyContent": {
                          "type": "static",
                          "content": "space-between"
                      }
                  },
                  "children": [
                      {
                          "type": "element",
                          "content": {
                              "elementType": "container",
                              "referencedStyles": {
                                  "d7de3cf9-1305-4fd9-8b37-4efa8edc8ec5": {
                                      "type": "style-map",
                                      "content": {
                                          "conditions": [
                                              {
                                                  "conditionType": "screen-size",
                                                  "maxWidth": 479
                                              }
                                          ],
                                          "mapType": "inlined",
                                          "styles": {
                                              "alignItems": {
                                                  "type": "static",
                                                  "content": "center"
                                              },
                                              "flexDirection": {
                                                  "type": "static",
                                                  "content": "column"
                                              }
                                          }
                                      }
                                  },
                                  "c80f767b-f98d-4532-aa21-6f1ea7e46836": {
                                      "type": "style-map",
                                      "content": {
                                          "conditions": [
                                              {
                                                  "conditionType": "screen-size",
                                                  "maxWidth": 767
                                              }
                                          ],
                                          "mapType": "inlined",
                                          "styles": {
                                              "alignItems": {
                                                  "type": "static",
                                                  "content": "center"
                                              },
                                              "flexDirection": {
                                                  "type": "static",
                                                  "content": "column"
                                              },
                                              "justifyContent": {
                                                  "type": "static",
                                                  "content": "space-between"
                                              }
                                          }
                                      }
                                  }
                              },
                              "abilities": {},
                              "style": {
                                  "width": {
                                      "type": "static",
                                      "content": "100%"
                                  },
                                  "display": {
                                      "type": "static",
                                      "content": "flex"
                                  },
                                  "alignItems": {
                                      "type": "static",
                                      "content": "flex-start"
                                  },
                                  "flexDirection": {
                                      "type": "static",
                                      "content": "row"
                                  },
                                  "justifyContent": {
                                      "type": "static",
                                      "content": "space-between"
                                  }
                              },
                              "children": [
                                  {
                                      "type": "element",
                                      "content": {
                                          "elementType": "container",
                                          "name": "Logo",
                                          "referencedStyles": {
                                              "9882a10b-2511-41ca-abc1-2a37a3c6c373": {
                                                  "type": "style-map",
                                                  "content": {
                                                      "conditions": [
                                                          {
                                                              "conditionType": "screen-size",
                                                              "maxWidth": 767
                                                          }
                                                      ],
                                                      "mapType": "inlined",
                                                      "styles": {
                                                          "alignItems": {
                                                              "type": "static",
                                                              "content": "center"
                                                          }
                                                      }
                                                  }
                                              }
                                          },
                                          "abilities": {},
                                          "style": {
                                              "display": {
                                                  "type": "static",
                                                  "content": "flex"
                                              },
                                              "maxWidth": {
                                                  "type": "dynamic",
                                                  "content": {
                                                      "referenceType": "token",
                                                      "id": "--dl-size-size-maxwidth"
                                                  }
                                              },
                                              "alignItems": {
                                                  "type": "static",
                                                  "content": "flex-start"
                                              },
                                              "flexDirection": {
                                                  "type": "static",
                                                  "content": "column"
                                              }
                                          },
                                          "children": [
                                              {
                                                  "type": "element",
                                                  "content": {
                                                      "elementType": "image",
                                                      "referencedStyles": {
                                                          "d240470c-85db-475e-98e8-1c1d24ec6671": {
                                                              "type": "style-map",
                                                              "content": {
                                                                  "conditions": [
                                                                      {
                                                                          "conditionType": "screen-size",
                                                                          "maxWidth": 767
                                                                      }
                                                                  ],
                                                                  "mapType": "inlined",
                                                                  "styles": {
                                                                      "marginBottom": {
                                                                          "type": "dynamic",
                                                                          "content": {
                                                                              "referenceType": "token",
                                                                              "id": "--dl-space-space-oneandhalfunits"
                                                                          }
                                                                      }
                                                                  }
                                                              }
                                                          },
                                                          "e7e77db5-9bd9-4ce2-b392-8221ea397711": {
                                                              "type": "style-map",
                                                              "content": {
                                                                  "conditions": [
                                                                      {
                                                                          "conditionType": "screen-size",
                                                                          "maxWidth": 479
                                                                      }
                                                                  ],
                                                                  "mapType": "inlined",
                                                                  "styles": {
                                                                      "marginBottom": {
                                                                          "type": "static",
                                                                          "content": "0px"
                                                                      }
                                                                  }
                                                              }
                                                          }
                                                      },
                                                      "abilities": {},
                                                      "attrs": {
                                                          "alt": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "prop",
                                                                  "id": "image_alt"
                                                              }
                                                          },
                                                          "src": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "prop",
                                                                  "id": "image_src"
                                                              }
                                                          }
                                                      },
                                                      "style": {
                                                          "height": {
                                                              "type": "static",
                                                              "content": "2rem"
                                                          }
                                                      },
                                                      "children": []
                                                  }
                                              },
                                              {
                                                  "type": "element",
                                                  "content": {
                                                      "elementType": "text",
                                                      "referencedStyles": {
                                                          "626b0960-401a-4da9-b49a-448e5238a70b": {
                                                              "type": "style-map",
                                                              "content": {
                                                                  "conditions": [
                                                                      {
                                                                          "conditionType": "screen-size",
                                                                          "maxWidth": 479
                                                                      }
                                                                  ],
                                                                  "mapType": "inlined",
                                                                  "styles": {
                                                                      "marginTop": {
                                                                          "type": "dynamic",
                                                                          "content": {
                                                                              "referenceType": "token",
                                                                              "id": "--dl-space-space-twounits"
                                                                          }
                                                                      },
                                                                      "marginBottom": {
                                                                          "type": "dynamic",
                                                                          "content": {
                                                                              "referenceType": "token",
                                                                              "id": "--dl-space-space-twounits"
                                                                          }
                                                                      }
                                                                  }
                                                              }
                                                          },
                                                          "c5a0e725-e23a-46a5-8126-957e5af046ff": {
                                                              "type": "style-map",
                                                              "content": {
                                                                  "conditions": [
                                                                      {
                                                                          "conditionType": "screen-size",
                                                                          "maxWidth": 767
                                                                      }
                                                                  ],
                                                                  "mapType": "inlined",
                                                                  "styles": {
                                                                      "marginTop": {
                                                                          "type": "dynamic",
                                                                          "content": {
                                                                              "referenceType": "token",
                                                                              "id": "--dl-space-space-twounits"
                                                                          }
                                                                      },
                                                                      "textAlign": {
                                                                          "type": "static",
                                                                          "content": "center"
                                                                      },
                                                                      "marginBottom": {
                                                                          "type": "dynamic",
                                                                          "content": {
                                                                              "referenceType": "token",
                                                                              "id": "--dl-space-space-twounits"
                                                                          }
                                                                      }
                                                                  }
                                                              }
                                                          }
                                                      },
                                                      "abilities": {},
                                                      "style": {
                                                          "marginTop": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-space-space-oneandhalfunits"
                                                              }
                                                          }
                                                      },
                                                      "children": [
                                                          {
                                                              "type": "element",
                                                              "content": {
                                                                  "elementType": "text",
                                                                  "referencedStyles": {},
                                                                  "abilities": {},
                                                                  "children": [
                                                                      {
                                                                          "type": "element",
                                                                          "content": {
                                                                              "elementType": "text",
                                                                              "referencedStyles": {},
                                                                              "abilities": {},
                                                                              "children": [
                                                                                  {
                                                                                      "type": "static",
                                                                                      "content": "Professional website builder "
                                                                                  },
                                                                                  {
                                                                                      "type": "raw",
                                                                                      "content": " "
                                                                                  }
                                                                              ]
                                                                          }
                                                                      },
                                                                      {
                                                                          "type": "element",
                                                                          "content": {
                                                                              "elementType": "text",
                                                                              "referencedStyles": {},
                                                                              "abilities": {},
                                                                              "children": [
                                                                                  {
                                                                                      "type": "static",
                                                                                      "content": " "
                                                                                  },
                                                                                  {
                                                                                      "type": "raw",
                                                                                      "content": " "
                                                                                  }
                                                                              ]
                                                                          }
                                                                      }
                                                                  ],
                                                                  "semanticType": "span"
                                                              }
                                                          },
                                                          {
                                                              "type": "element",
                                                              "content": {
                                                                  "elementType": "text",
                                                                  "referencedStyles": {},
                                                                  "abilities": {},
                                                                  "children": [],
                                                                  "semanticType": "br"
                                                              }
                                                          },
                                                          {
                                                              "type": "element",
                                                              "content": {
                                                                  "elementType": "text",
                                                                  "referencedStyles": {},
                                                                  "abilities": {},
                                                                  "children": [
                                                                      {
                                                                          "type": "static",
                                                                          "content": "for developers."
                                                                      }
                                                                  ],
                                                                  "semanticType": "span"
                                                              }
                                                          }
                                                      ],
                                                      "semanticType": "span"
                                                  }
                                              }
                                          ],
                                          "semanticType": "div"
                                      }
                                  },
                                  {
                                      "type": "element",
                                      "content": {
                                          "elementType": "container",
                                          "name": "LinksContainer",
                                          "referencedStyles": {
                                              "cfe534c9-3e1f-4491-a3c9-a481dabba616": {
                                                  "type": "style-map",
                                                  "content": {
                                                      "conditions": [
                                                          {
                                                              "conditionType": "screen-size",
                                                              "maxWidth": 479
                                                          }
                                                      ],
                                                      "mapType": "inlined",
                                                      "styles": {
                                                          "alignItems": {
                                                              "type": "static",
                                                              "content": "center"
                                                          },
                                                          "flexDirection": {
                                                              "type": "static",
                                                              "content": "column"
                                                          }
                                                      }
                                                  }
                                              },
                                              "b2c5c473-2dec-4e76-911c-e71b0f248ea8": {
                                                  "type": "style-map",
                                                  "content": {
                                                      "conditions": [
                                                          {
                                                              "conditionType": "screen-size",
                                                              "maxWidth": 767
                                                          }
                                                      ],
                                                      "mapType": "inlined",
                                                      "styles": {
                                                          "width": {
                                                              "type": "static",
                                                              "content": "100%"
                                                          },
                                                          "alignItems": {
                                                              "type": "static",
                                                              "content": "flex-start"
                                                          },
                                                          "flexDirection": {
                                                              "type": "static",
                                                              "content": "row"
                                                          },
                                                          "justifyContent": {
                                                              "type": "static",
                                                              "content": "center"
                                                          }
                                                      }
                                                  }
                                              }
                                          },
                                          "abilities": {},
                                          "style": {
                                              "display": {
                                                  "type": "static",
                                                  "content": "flex"
                                              },
                                              "alignItems": {
                                                  "type": "static",
                                                  "content": "flex-start"
                                              },
                                              "flexDirection": {
                                                  "type": "static",
                                                  "content": "row"
                                              },
                                              "justifyContent": {
                                                  "type": "static",
                                                  "content": "space-between"
                                              }
                                          },
                                          "children": [
                                              {
                                                  "type": "element",
                                                  "content": {
                                                      "elementType": "container",
                                                      "name": "Container",
                                                      "referencedStyles": {
                                                          "92317702-2334-442c-a33c-f590e61cb8e6": {
                                                              "type": "style-map",
                                                              "content": {
                                                                  "conditions": [
                                                                      {
                                                                          "conditionType": "screen-size",
                                                                          "maxWidth": 991
                                                                      }
                                                                  ],
                                                                  "mapType": "inlined",
                                                                  "styles": {
                                                                      "marginRight": {
                                                                          "type": "dynamic",
                                                                          "content": {
                                                                              "referenceType": "token",
                                                                              "id": "--dl-space-space-fourunits"
                                                                          }
                                                                      }
                                                                  }
                                                              }
                                                          },
                                                          "2296ba24-e475-4425-9efe-b60fe3ee138b": {
                                                              "type": "style-map",
                                                              "content": {
                                                                  "conditions": [
                                                                      {
                                                                          "conditionType": "screen-size",
                                                                          "maxWidth": 767
                                                                      }
                                                                  ],
                                                                  "mapType": "inlined",
                                                                  "styles": {
                                                                      "marginRight": {
                                                                          "type": "dynamic",
                                                                          "content": {
                                                                              "referenceType": "token",
                                                                              "id": "--dl-space-space-fourunits"
                                                                          }
                                                                      }
                                                                  }
                                                              }
                                                          },
                                                          "dce7778b-c389-45ed-85ce-635f74022422": {
                                                              "type": "style-map",
                                                              "content": {
                                                                  "conditions": [
                                                                      {
                                                                          "conditionType": "screen-size",
                                                                          "maxWidth": 479
                                                                      }
                                                                  ],
                                                                  "mapType": "inlined",
                                                                  "styles": {
                                                                      "marginRight": {
                                                                          "type": "static",
                                                                          "content": "0px"
                                                                      }
                                                                  }
                                                              }
                                                          }
                                                      },
                                                      "abilities": {},
                                                      "style": {
                                                          "display": {
                                                              "type": "static",
                                                              "content": "flex"
                                                          },
                                                          "alignItems": {
                                                              "type": "static",
                                                              "content": "flex-start"
                                                          },
                                                          "marginRight": {
                                                              "type": "static",
                                                              "content": "10rem"
                                                          },
                                                          "flexDirection": {
                                                              "type": "static",
                                                              "content": "row"
                                                          },
                                                          "justifyContent": {
                                                              "type": "static",
                                                              "content": "space-between"
                                                          }
                                                      },
                                                      "children": [
                                                          {
                                                              "type": "element",
                                                              "content": {
                                                                  "elementType": "container",
                                                                  "name": "ProductContainer",
                                                                  "referencedStyles": {
                                                                      "d2eb228c-3fe0-4b71-abe1-a8f930a3e9be": {
                                                                          "type": "style-map",
                                                                          "content": {
                                                                              "conditions": [
                                                                                  {
                                                                                      "conditionType": "screen-size",
                                                                                      "maxWidth": 991
                                                                                  }
                                                                              ],
                                                                              "mapType": "inlined",
                                                                              "styles": {
                                                                                  "marginRight": {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "token",
                                                                                          "id": "--dl-space-space-fourunits"
                                                                                      }
                                                                                  }
                                                                              }
                                                                          }
                                                                      },
                                                                      "75c35b91-d1e2-453a-bbe4-515319b5057d": {
                                                                          "type": "style-map",
                                                                          "content": {
                                                                              "conditions": [
                                                                                  {
                                                                                      "conditionType": "screen-size",
                                                                                      "maxWidth": 767
                                                                                  }
                                                                              ],
                                                                              "mapType": "inlined",
                                                                              "styles": {
                                                                                  "marginRight": {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "token",
                                                                                          "id": "--dl-space-space-fourunits"
                                                                                      }
                                                                                  }
                                                                              }
                                                                          }
                                                                      }
                                                                  },
                                                                  "abilities": {},
                                                                  "style": {
                                                                      "flex": {
                                                                          "type": "static",
                                                                          "content": "0 0 auto"
                                                                      },
                                                                      "display": {
                                                                          "type": "static",
                                                                          "content": "flex"
                                                                      },
                                                                      "alignItems": {
                                                                          "type": "static",
                                                                          "content": "flex-start"
                                                                      },
                                                                      "marginRight": {
                                                                          "type": "static",
                                                                          "content": "10rem"
                                                                      },
                                                                      "flexDirection": {
                                                                          "type": "static",
                                                                          "content": "column"
                                                                      },
                                                                      "justifyContent": {
                                                                          "type": "static",
                                                                          "content": "flex-start"
                                                                      }
                                                                  },
                                                                  "children": [
                                                                      {
                                                                          "type": "element",
                                                                          "content": {
                                                                              "elementType": "text",
                                                                              "referencedStyles": {},
                                                                              "abilities": {},
                                                                              "style": {
                                                                                  "fontWeight": {
                                                                                      "type": "static",
                                                                                      "content": "700"
                                                                                  },
                                                                                  "marginBottom": {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "token",
                                                                                          "id": "--dl-space-space-oneandhalfunits"
                                                                                      }
                                                                                  }
                                                                              },
                                                                              "children": [
                                                                                  {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "prop",
                                                                                          "id": "text"
                                                                                      }
                                                                                  }
                                                                              ],
                                                                              "semanticType": "span"
                                                                          }
                                                                      },
                                                                      {
                                                                          "type": "element",
                                                                          "content": {
                                                                              "elementType": "text",
                                                                              "referencedStyles": {},
                                                                              "abilities": {},
                                                                              "style": {
                                                                                  "marginBottom": {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "token",
                                                                                          "id": "--dl-space-space-unit"
                                                                                      }
                                                                                  }
                                                                              },
                                                                              "children": [
                                                                                  {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "prop",
                                                                                          "id": "text1"
                                                                                      }
                                                                                  }
                                                                              ],
                                                                              "semanticType": "span"
                                                                          }
                                                                      },
                                                                      {
                                                                          "type": "element",
                                                                          "content": {
                                                                              "elementType": "text",
                                                                              "referencedStyles": {},
                                                                              "abilities": {},
                                                                              "style": {
                                                                                  "marginBottom": {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "token",
                                                                                          "id": "--dl-space-space-unit"
                                                                                      }
                                                                                  }
                                                                              },
                                                                              "children": [
                                                                                  {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "prop",
                                                                                          "id": "text2"
                                                                                      }
                                                                                  }
                                                                              ],
                                                                              "semanticType": "span"
                                                                          }
                                                                      },
                                                                      {
                                                                          "type": "element",
                                                                          "content": {
                                                                              "elementType": "text",
                                                                              "referencedStyles": {},
                                                                              "abilities": {},
                                                                              "style": {
                                                                                  "marginBottom": {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "token",
                                                                                          "id": "--dl-space-space-unit"
                                                                                      }
                                                                                  }
                                                                              },
                                                                              "children": [
                                                                                  {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "prop",
                                                                                          "id": "text3"
                                                                                      }
                                                                                  }
                                                                              ],
                                                                              "semanticType": "span"
                                                                          }
                                                                      },
                                                                      {
                                                                          "type": "element",
                                                                          "content": {
                                                                              "elementType": "text",
                                                                              "referencedStyles": {},
                                                                              "abilities": {},
                                                                              "children": [
                                                                                  {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "prop",
                                                                                          "id": "text4"
                                                                                      }
                                                                                  }
                                                                              ],
                                                                              "semanticType": "span"
                                                                          }
                                                                      }
                                                                  ],
                                                                  "semanticType": "div"
                                                              }
                                                          },
                                                          {
                                                              "type": "element",
                                                              "content": {
                                                                  "elementType": "container",
                                                                  "name": "CompanyContainer",
                                                                  "referencedStyles": {},
                                                                  "abilities": {},
                                                                  "style": {
                                                                      "flex": {
                                                                          "type": "static",
                                                                          "content": "0 0 auto"
                                                                      },
                                                                      "display": {
                                                                          "type": "static",
                                                                          "content": "flex"
                                                                      },
                                                                      "alignItems": {
                                                                          "type": "static",
                                                                          "content": "flex-start"
                                                                      },
                                                                      "flexDirection": {
                                                                          "type": "static",
                                                                          "content": "column"
                                                                      },
                                                                      "justifyContent": {
                                                                          "type": "static",
                                                                          "content": "flex-start"
                                                                      }
                                                                  },
                                                                  "children": [
                                                                      {
                                                                          "type": "element",
                                                                          "content": {
                                                                              "elementType": "text",
                                                                              "referencedStyles": {},
                                                                              "abilities": {},
                                                                              "style": {
                                                                                  "fontWeight": {
                                                                                      "type": "static",
                                                                                      "content": "700"
                                                                                  },
                                                                                  "marginBottom": {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "token",
                                                                                          "id": "--dl-space-space-oneandhalfunits"
                                                                                      }
                                                                                  }
                                                                              },
                                                                              "children": [
                                                                                  {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "prop",
                                                                                          "id": "text5"
                                                                                      }
                                                                                  }
                                                                              ],
                                                                              "semanticType": "span"
                                                                          }
                                                                      },
                                                                      {
                                                                          "type": "element",
                                                                          "content": {
                                                                              "elementType": "text",
                                                                              "referencedStyles": {},
                                                                              "abilities": {},
                                                                              "style": {
                                                                                  "marginBottom": {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "token",
                                                                                          "id": "--dl-space-space-unit"
                                                                                      }
                                                                                  }
                                                                              },
                                                                              "children": [
                                                                                  {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "prop",
                                                                                          "id": "text6"
                                                                                      }
                                                                                  }
                                                                              ],
                                                                              "semanticType": "span"
                                                                          }
                                                                      },
                                                                      {
                                                                          "type": "element",
                                                                          "content": {
                                                                              "elementType": "text",
                                                                              "referencedStyles": {},
                                                                              "abilities": {},
                                                                              "style": {
                                                                                  "marginBottom": {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "token",
                                                                                          "id": "--dl-space-space-unit"
                                                                                      }
                                                                                  }
                                                                              },
                                                                              "children": [
                                                                                  {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "prop",
                                                                                          "id": "text7"
                                                                                      }
                                                                                  }
                                                                              ],
                                                                              "semanticType": "span"
                                                                          }
                                                                      },
                                                                      {
                                                                          "type": "element",
                                                                          "content": {
                                                                              "elementType": "text",
                                                                              "referencedStyles": {},
                                                                              "abilities": {},
                                                                              "style": {
                                                                                  "marginBottom": {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "token",
                                                                                          "id": "--dl-space-space-unit"
                                                                                      }
                                                                                  }
                                                                              },
                                                                              "children": [
                                                                                  {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "prop",
                                                                                          "id": "text8"
                                                                                      }
                                                                                  }
                                                                              ],
                                                                              "semanticType": "span"
                                                                          }
                                                                      },
                                                                      {
                                                                          "type": "element",
                                                                          "content": {
                                                                              "elementType": "text",
                                                                              "referencedStyles": {},
                                                                              "abilities": {},
                                                                              "children": [
                                                                                  {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "prop",
                                                                                          "id": "text9"
                                                                                      }
                                                                                  }
                                                                              ],
                                                                              "semanticType": "span"
                                                                          }
                                                                      }
                                                                  ],
                                                                  "semanticType": "div"
                                                              }
                                                          }
                                                      ],
                                                      "semanticType": "div"
                                                  }
                                              },
                                              {
                                                  "type": "element",
                                                  "content": {
                                                      "elementType": "container",
                                                      "referencedStyles": {
                                                          "efc6020d-7bec-4b57-94be-cac257605d54": {
                                                              "type": "style-map",
                                                              "content": {
                                                                  "conditions": [
                                                                      {
                                                                          "conditionType": "screen-size",
                                                                          "maxWidth": 479
                                                                      }
                                                                  ],
                                                                  "mapType": "inlined",
                                                                  "styles": {
                                                                      "marginTop": {
                                                                          "type": "dynamic",
                                                                          "content": {
                                                                              "referenceType": "token",
                                                                              "id": "--dl-space-space-oneandhalfunits"
                                                                          }
                                                                      },
                                                                      "alignItems": {
                                                                          "type": "static",
                                                                          "content": "flex-start"
                                                                      },
                                                                      "marginBottom": {
                                                                          "type": "static",
                                                                          "content": "0px"
                                                                      }
                                                                  }
                                                              }
                                                          }
                                                      },
                                                      "abilities": {},
                                                      "style": {
                                                          "display": {
                                                              "type": "static",
                                                              "content": "flex"
                                                          },
                                                          "alignItems": {
                                                              "type": "static",
                                                              "content": "flex-start"
                                                          },
                                                          "flexDirection": {
                                                              "type": "static",
                                                              "content": "column"
                                                          },
                                                          "justifyContent": {
                                                              "type": "static",
                                                              "content": "flex-start"
                                                          }
                                                      },
                                                      "children": [
                                                          {
                                                              "type": "element",
                                                              "content": {
                                                                  "elementType": "container",
                                                                  "name": "Contact",
                                                                  "referencedStyles": {
                                                                      "1abbd246-985f-4fd9-bf80-5af756e5bb72": {
                                                                          "type": "style-map",
                                                                          "content": {
                                                                              "conditions": [
                                                                                  {
                                                                                      "conditionType": "screen-size",
                                                                                      "maxWidth": 479
                                                                                  }
                                                                              ],
                                                                              "mapType": "inlined",
                                                                              "styles": {
                                                                                  "alignItems": {
                                                                                      "type": "static",
                                                                                      "content": "flex-start"
                                                                                  },
                                                                                  "marginBottom": {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "token",
                                                                                          "id": "--dl-space-space-unit"
                                                                                      }
                                                                                  }
                                                                              }
                                                                          }
                                                                      }
                                                                  },
                                                                  "abilities": {},
                                                                  "style": {
                                                                      "display": {
                                                                          "type": "static",
                                                                          "content": "flex"
                                                                      },
                                                                      "alignItems": {
                                                                          "type": "static",
                                                                          "content": "flex-start"
                                                                      },
                                                                      "marginBottom": {
                                                                          "type": "dynamic",
                                                                          "content": {
                                                                              "referenceType": "token",
                                                                              "id": "--dl-space-space-oneandhalfunits"
                                                                          }
                                                                      },
                                                                      "flexDirection": {
                                                                          "type": "static",
                                                                          "content": "column"
                                                                      },
                                                                      "justifyContent": {
                                                                          "type": "static",
                                                                          "content": "flex-start"
                                                                      }
                                                                  },
                                                                  "children": [
                                                                      {
                                                                          "type": "element",
                                                                          "content": {
                                                                              "elementType": "text",
                                                                              "referencedStyles": {},
                                                                              "abilities": {},
                                                                              "style": {
                                                                                  "fontWeight": {
                                                                                      "type": "static",
                                                                                      "content": "700"
                                                                                  },
                                                                                  "marginBottom": {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "token",
                                                                                          "id": "--dl-space-space-oneandhalfunits"
                                                                                      }
                                                                                  }
                                                                              },
                                                                              "children": [
                                                                                  {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "prop",
                                                                                          "id": "text10"
                                                                                      }
                                                                                  }
                                                                              ],
                                                                              "semanticType": "span"
                                                                          }
                                                                      },
                                                                      {
                                                                          "type": "element",
                                                                          "content": {
                                                                              "elementType": "text",
                                                                              "referencedStyles": {},
                                                                              "abilities": {},
                                                                              "style": {
                                                                                  "marginBottom": {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "token",
                                                                                          "id": "--dl-space-space-unit"
                                                                                      }
                                                                                  }
                                                                              },
                                                                              "children": [
                                                                                  {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "prop",
                                                                                          "id": "text11"
                                                                                      }
                                                                                  }
                                                                              ],
                                                                              "semanticType": "span"
                                                                          }
                                                                      },
                                                                      {
                                                                          "type": "element",
                                                                          "content": {
                                                                              "elementType": "text",
                                                                              "referencedStyles": {},
                                                                              "abilities": {},
                                                                              "children": [
                                                                                  {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "prop",
                                                                                          "id": "text12"
                                                                                      }
                                                                                  }
                                                                              ],
                                                                              "semanticType": "span"
                                                                          }
                                                                      }
                                                                  ],
                                                                  "semanticType": "div"
                                                              }
                                                          },
                                                          {
                                                              "type": "element",
                                                              "content": {
                                                                  "elementType": "container",
                                                                  "name": "Socials",
                                                                  "referencedStyles": {},
                                                                  "abilities": {},
                                                                  "style": {
                                                                      "display": {
                                                                          "type": "static",
                                                                          "content": "flex"
                                                                      },
                                                                      "alignItems": {
                                                                          "type": "static",
                                                                          "content": "flex-start"
                                                                      },
                                                                      "flexDirection": {
                                                                          "type": "static",
                                                                          "content": "column"
                                                                      },
                                                                      "justifyContent": {
                                                                          "type": "static",
                                                                          "content": "flex-start"
                                                                      }
                                                                  },
                                                                  "children": [
                                                                      {
                                                                          "type": "element",
                                                                          "content": {
                                                                              "elementType": "text",
                                                                              "referencedStyles": {},
                                                                              "abilities": {},
                                                                              "style": {
                                                                                  "fontWeight": {
                                                                                      "type": "static",
                                                                                      "content": "700"
                                                                                  },
                                                                                  "marginBottom": {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "token",
                                                                                          "id": "--dl-space-space-oneandhalfunits"
                                                                                      }
                                                                                  }
                                                                              },
                                                                              "children": [
                                                                                  {
                                                                                      "type": "dynamic",
                                                                                      "content": {
                                                                                          "referenceType": "prop",
                                                                                          "id": "text13"
                                                                                      }
                                                                                  }
                                                                              ],
                                                                              "semanticType": "span"
                                                                          }
                                                                      },
                                                                      {
                                                                          "type": "element",
                                                                          "content": {
                                                                              "elementType": "container",
                                                                              "name": "IconGroup",
                                                                              "referencedStyles": {},
                                                                              "abilities": {},
                                                                              "style": {
                                                                                  "display": {
                                                                                      "type": "static",
                                                                                      "content": "flex"
                                                                                  },
                                                                                  "alignItems": {
                                                                                      "type": "static",
                                                                                      "content": "center"
                                                                                  },
                                                                                  "flexDirection": {
                                                                                      "type": "static",
                                                                                      "content": "row"
                                                                                  },
                                                                                  "justifyContent": {
                                                                                      "type": "static",
                                                                                      "content": "space-between"
                                                                                  }
                                                                              },
                                                                              "children": [
                                                                                  {
                                                                                      "type": "element",
                                                                                      "content": {
                                                                                          "elementType": "icon",
                                                                                          "referencedStyles": {},
                                                                                          "abilities": {},
                                                                                          "attrs": {
                                                                                              "viewBox": {
                                                                                                  "type": "static",
                                                                                                  "content": "0 0 950.8571428571428 1024"
                                                                                              }
                                                                                          },
                                                                                          "style": {
                                                                                              "width": {
                                                                                                  "type": "dynamic",
                                                                                                  "content": {
                                                                                                      "referenceType": "token",
                                                                                                      "id": "--dl-size-size-xsmall"
                                                                                                  }
                                                                                              },
                                                                                              "height": {
                                                                                                  "type": "dynamic",
                                                                                                  "content": {
                                                                                                      "referenceType": "token",
                                                                                                      "id": "--dl-size-size-xsmall"
                                                                                                  }
                                                                                              },
                                                                                              "marginRight": {
                                                                                                  "type": "dynamic",
                                                                                                  "content": {
                                                                                                      "referenceType": "token",
                                                                                                      "id": "--dl-space-space-unit"
                                                                                                  }
                                                                                              }
                                                                                          },
                                                                                          "children": [
                                                                                              {
                                                                                                  "type": "element",
                                                                                                  "content": {
                                                                                                      "elementType": "icon",
                                                                                                      "referencedStyles": {},
                                                                                                      "abilities": {},
                                                                                                      "attrs": {
                                                                                                          "d": {
                                                                                                              "type": "static",
                                                                                                              "content": "M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                                                                                                          }
                                                                                                      },
                                                                                                      "children": [],
                                                                                                      "semanticType": "path"
                                                                                                  }
                                                                                              }
                                                                                          ]
                                                                                      }
                                                                                  },
                                                                                  {
                                                                                      "type": "element",
                                                                                      "content": {
                                                                                          "elementType": "icon",
                                                                                          "referencedStyles": {},
                                                                                          "abilities": {},
                                                                                          "attrs": {
                                                                                              "viewBox": {
                                                                                                  "type": "static",
                                                                                                  "content": "0 0 877.7142857142857 1024"
                                                                                              }
                                                                                          },
                                                                                          "style": {
                                                                                              "width": {
                                                                                                  "type": "dynamic",
                                                                                                  "content": {
                                                                                                      "referenceType": "token",
                                                                                                      "id": "--dl-size-size-xsmall"
                                                                                                  }
                                                                                              },
                                                                                              "height": {
                                                                                                  "type": "dynamic",
                                                                                                  "content": {
                                                                                                      "referenceType": "token",
                                                                                                      "id": "--dl-size-size-xsmall"
                                                                                                  }
                                                                                              },
                                                                                              "marginRight": {
                                                                                                  "type": "dynamic",
                                                                                                  "content": {
                                                                                                      "referenceType": "token",
                                                                                                      "id": "--dl-space-space-unit"
                                                                                                  }
                                                                                              }
                                                                                          },
                                                                                          "children": [
                                                                                              {
                                                                                                  "type": "element",
                                                                                                  "content": {
                                                                                                      "elementType": "icon",
                                                                                                      "referencedStyles": {},
                                                                                                      "abilities": {},
                                                                                                      "attrs": {
                                                                                                          "d": {
                                                                                                              "type": "static",
                                                                                                              "content": "M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                                                                                                          }
                                                                                                      },
                                                                                                      "children": [],
                                                                                                      "semanticType": "path"
                                                                                                  }
                                                                                              }
                                                                                          ]
                                                                                      }
                                                                                  },
                                                                                  {
                                                                                      "type": "element",
                                                                                      "content": {
                                                                                          "elementType": "icon",
                                                                                          "referencedStyles": {},
                                                                                          "abilities": {},
                                                                                          "attrs": {
                                                                                              "viewBox": {
                                                                                                  "type": "static",
                                                                                                  "content": "0 0 602.2582857142856 1024"
                                                                                              }
                                                                                          },
                                                                                          "style": {
                                                                                              "width": {
                                                                                                  "type": "dynamic",
                                                                                                  "content": {
                                                                                                      "referenceType": "token",
                                                                                                      "id": "--dl-size-size-xsmall"
                                                                                                  }
                                                                                              },
                                                                                              "height": {
                                                                                                  "type": "dynamic",
                                                                                                  "content": {
                                                                                                      "referenceType": "token",
                                                                                                      "id": "--dl-size-size-xsmall"
                                                                                                  }
                                                                                              }
                                                                                          },
                                                                                          "children": [
                                                                                              {
                                                                                                  "type": "element",
                                                                                                  "content": {
                                                                                                      "elementType": "icon",
                                                                                                      "referencedStyles": {},
                                                                                                      "abilities": {},
                                                                                                      "attrs": {
                                                                                                          "d": {
                                                                                                              "type": "static",
                                                                                                              "content": "M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                                                                                                          }
                                                                                                      },
                                                                                                      "children": [],
                                                                                                      "semanticType": "path"
                                                                                                  }
                                                                                              }
                                                                                          ]
                                                                                      }
                                                                                  }
                                                                              ],
                                                                              "semanticType": "div"
                                                                          }
                                                                      }
                                                                  ],
                                                                  "semanticType": "div"
                                                              }
                                                          }
                                                      ],
                                                      "semanticType": "div"
                                                  }
                                              }
                                          ],
                                          "semanticType": "div"
                                      }
                                  }
                              ],
                              "semanticType": "div"
                          }
                      },
                      {
                          "type": "element",
                          "content": {
                              "elementType": "container",
                              "name": "Separator",
                              "referencedStyles": {},
                              "abilities": {},
                              "style": {
                                  "width": {
                                      "type": "static",
                                      "content": "100%"
                                  },
                                  "height": {
                                      "type": "static",
                                      "content": "1px"
                                  },
                                  "marginTop": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-twounits"
                                      }
                                  },
                                  "marginBottom": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-twounits"
                                      }
                                  },
                                  "backgroundColor": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-color-gray-900"
                                      }
                                  }
                              },
                              "children": [],
                              "semanticType": "div"
                          }
                      },
                      {
                          "type": "element",
                          "content": {
                              "elementType": "text",
                              "referencedStyles": {
                                  "02e79181-ec5c-485d-8f0b-eb886d79949d": {
                                      "type": "style-map",
                                      "content": {
                                          "conditions": [
                                              {
                                                  "conditionType": "screen-size",
                                                  "maxWidth": 479
                                              }
                                          ],
                                          "mapType": "inlined",
                                          "styles": {
                                              "textAlign": {
                                                  "type": "static",
                                                  "content": "center"
                                              }
                                          }
                                      }
                                  }
                              },
                              "abilities": {},
                              "style": {
                                  "alignSelf": {
                                      "type": "static",
                                      "content": "center"
                                  }
                              },
                              "children": [
                                  {
                                      "type": "element",
                                      "content": {
                                          "elementType": "text",
                                          "referencedStyles": {},
                                          "abilities": {},
                                          "children": [
                                              {
                                                  "type": "static",
                                                  "content": "© 2021 teleportHQ, All Rights Reserved."
                                              }
                                          ],
                                          "semanticType": "span"
                                      }
                                  },
                                  {
                                      "type": "element",
                                      "content": {
                                          "elementType": "text",
                                          "referencedStyles": {},
                                          "abilities": {},
                                          "style": {
                                              "textAlign": {
                                                  "type": "static",
                                                  "content": "left"
                                              }
                                          },
                                          "children": [],
                                          "semanticType": "span"
                                      }
                                  },
                                  {
                                      "type": "element",
                                      "content": {
                                          "elementType": "text",
                                          "referencedStyles": {},
                                          "abilities": {},
                                          "children": [],
                                          "semanticType": "span"
                                      }
                                  }
                              ],
                              "semanticType": "span"
                          }
                      }
                  ],
                  "semanticType": "footer"
              }
          },
          "name": "Footer",
          "styleSetDefinitions": {}
      },
      "GalleryCard3": {
          "propDefinitions": {
              "subtitle": {
                  "id": "dfaa53cc-2d2f-4672-9835-167a686aa7db",
                  "defaultValue": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  "type": "string"
              },
              "image_alt": {
                  "id": "23e30595-cd74-4996-a201-d8453ffe7de9",
                  "defaultValue": "image",
                  "type": "string"
              },
              "rootClassName": {
                  "id": "4140c6dc-ca25-4fba-925a-80baeef3e6f8",
                  "defaultValue": "",
                  "type": "string"
              },
              "projectTitle": {
                  "id": "b3987a75-4d70-46ba-ae96-e78d62b7491f",
                  "defaultValue": "Project Title",
                  "type": "string"
              },
              "image_src": {
                  "id": "a312f0f9-333b-4aad-86bd-c8e025a81973",
                  "defaultValue": "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&h=1000",
                  "type": "string"
              }
          },
          "node": {
              "type": "element",
              "content": {
                  "elementType": "container",
                  "name": "GalleryCard",
                  "referencedStyles": {
                      "e974b09c-9a78-4e9d-b7cb-2e9fa6ecc430": {
                          "type": "style-map",
                          "content": {
                              "mapType": "component-referenced",
                              "content": {
                                  "type": "dynamic",
                                  "content": {
                                      "referenceType": "prop",
                                      "id": "rootClassName"
                                  }
                              }
                          }
                      }
                  },
                  "abilities": {},
                  "style": {
                      "width": {
                          "type": "static",
                          "content": "100%"
                      },
                      "height": {
                          "type": "static",
                          "content": "100%"
                      },
                      "display": {
                          "type": "static",
                          "content": "flex"
                      },
                      "position": {
                          "type": "static",
                          "content": "relative"
                      },
                      "alignItems": {
                          "type": "static",
                          "content": "flex-start"
                      },
                      "flexDirection": {
                          "type": "static",
                          "content": "column"
                      },
                      "justifyContent": {
                          "type": "static",
                          "content": "center"
                      }
                  },
                  "children": [
                      {
                          "type": "element",
                          "content": {
                              "elementType": "image",
                              "referencedStyles": {},
                              "abilities": {},
                              "attrs": {
                                  "alt": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "prop",
                                          "id": "image_alt"
                                      }
                                  },
                                  "src": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "prop",
                                          "id": "image_src"
                                      }
                                  }
                              },
                              "style": {
                                  "top": {
                                      "type": "static",
                                      "content": "0px"
                                  },
                                  "left": {
                                      "type": "static",
                                      "content": "0px"
                                  },
                                  "right": {
                                      "type": "static",
                                      "content": "auto"
                                  },
                                  "width": {
                                      "type": "static",
                                      "content": "100%"
                                  },
                                  "bottom": {
                                      "type": "static",
                                      "content": "auto"
                                  },
                                  "height": {
                                      "type": "static",
                                      "content": "100%"
                                  },
                                  "position": {
                                      "type": "static",
                                      "content": "absolute"
                                  },
                                  "objectFit": {
                                      "type": "static",
                                      "content": "cover"
                                  }
                              },
                              "children": []
                          }
                      },
                      {
                          "type": "element",
                          "content": {
                              "elementType": "container",
                              "referencedStyles": {
                                  "c4899df3-f64e-4e84-8b51-15b5c84547f4": {
                                      "type": "style-map",
                                      "content": {
                                          "conditions": [
                                              {
                                                  "conditionType": "element-state",
                                                  "content": "hover"
                                              }
                                          ],
                                          "mapType": "inlined",
                                          "styles": {
                                              "opacity": {
                                                  "type": "static",
                                                  "content": "1"
                                              }
                                          }
                                      }
                                  }
                              },
                              "abilities": {},
                              "style": {
                                  "width": {
                                      "type": "static",
                                      "content": "100%"
                                  },
                                  "height": {
                                      "type": "static",
                                      "content": "300px"
                                  },
                                  "zIndex": {
                                      "type": "static",
                                      "content": "1"
                                  },
                                  "display": {
                                      "type": "static",
                                      "content": "flex"
                                  },
                                  "opacity": {
                                      "type": "static",
                                      "content": "0"
                                  },
                                  "padding": {
                                      "type": "dynamic",
                                      "content": {
                                          "referenceType": "token",
                                          "id": "--dl-space-space-twounits"
                                      }
                                  },
                                  "alignItems": {
                                      "type": "static",
                                      "content": "center"
                                  },
                                  "transition": {
                                      "type": "static",
                                      "content": "0.3s"
                                  },
                                  "flexDirection": {
                                      "type": "static",
                                      "content": "column"
                                  },
                                  "justifyContent": {
                                      "type": "static",
                                      "content": "center"
                                  },
                                  "backgroundImage": {
                                      "type": "static",
                                      "content": "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9));"
                                  }
                              },
                              "children": [
                                  {
                                      "type": "element",
                                      "content": {
                                          "elementType": "text",
                                          "referencedStyles": {
                                              "55294827-55af-4fb6-a2af-916354a2c3a7": {
                                                  "type": "style-map",
                                                  "content": {
                                                      "conditions": [
                                                          {
                                                              "conditionType": "screen-size",
                                                              "maxWidth": 479
                                                          }
                                                      ],
                                                      "mapType": "inlined",
                                                      "styles": {
                                                          "alignSelf": {
                                                              "type": "static",
                                                              "content": "center"
                                                          },
                                                          "marginBottom": {
                                                              "type": "dynamic",
                                                              "content": {
                                                                  "referenceType": "token",
                                                                  "id": "--dl-space-space-unit"
                                                              }
                                                          }
                                                      }
                                                  }
                                              }
                                          },
                                          "abilities": {},
                                          "style": {
                                              "color": {
                                                  "type": "dynamic",
                                                  "content": {
                                                      "referenceType": "token",
                                                      "id": "--dl-color-gray-white"
                                                  }
                                              },
                                              "fontSize": {
                                                  "type": "static",
                                                  "content": "1.5rem"
                                              },
                                              "textAlign": {
                                                  "type": "static",
                                                  "content": "center"
                                              },
                                              "fontWeight": {
                                                  "type": "static",
                                                  "content": "500"
                                              },
                                              "marginBottom": {
                                                  "type": "dynamic",
                                                  "content": {
                                                      "referenceType": "token",
                                                      "id": "--dl-space-space-oneandhalfunits"
                                                  }
                                              }
                                          },
                                          "children": [
                                              {
                                                  "type": "dynamic",
                                                  "content": {
                                                      "referenceType": "prop",
                                                      "id": "projectTitle"
                                                  }
                                              }
                                          ],
                                          "semanticType": "h1"
                                      }
                                  },
                                  {
                                      "type": "element",
                                      "content": {
                                          "elementType": "text",
                                          "referencedStyles": {},
                                          "abilities": {},
                                          "style": {
                                              "color": {
                                                  "type": "dynamic",
                                                  "content": {
                                                      "referenceType": "token",
                                                      "id": "--dl-color-gray-white"
                                                  }
                                              },
                                              "textAlign": {
                                                  "type": "static",
                                                  "content": "center"
                                              }
                                          },
                                          "children": [
                                              {
                                                  "type": "dynamic",
                                                  "content": {
                                                      "referenceType": "prop",
                                                      "id": "subtitle"
                                                  }
                                              }
                                          ],
                                          "semanticType": "span"
                                      }
                                  }
                              ],
                              "semanticType": "div"
                          }
                      }
                  ],
                  "semanticType": "div"
              }
          },
          "name": "GalleryCard3",
          "styleSetDefinitions": {
              "rootClassName": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "rootClassName1": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "rootClassName2": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "rootClassName3": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "rootClassName4": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "rootClassName5": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "rootClassName6": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "rootClassName7": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "rootClassName8": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "rootClassName9": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "rootClassName10": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              },
              "rootClassName11": {
                  "content": {},
                  "conditions": [],
                  "type": "reusable-component-style-override"
              }
          }
      }
  }
}


// const uidl = {
//   "name": "My First Component",
//   "node": {
//     "type": "element",
//     "content": {
//       "elementType": "text",
//       "children": [
//         {
//           "type": "static",
//           "content": "Hello World!"
//         }
//       ]
//     }
//   }
// }
// const generator = createHTMLComponentGenerator();


const projectGenerator = createHTMLProjectGenerator()
// let result: string;
// await generator.generateComponent(uidl).then(res => result = res.files[0].content)

// console.log(projectGenerator)
await projectGenerator.generateProject(uidl).then(res => console.log(res))

// console.log(`Result is ${result}`)