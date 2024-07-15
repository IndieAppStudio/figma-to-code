// import { useEffect, useState } from "react";
// import { PluginUI } from "plugin-ui";
// import { FrameworkTypes, PluginSettings } from "backend";

// interface AppState {
//   code: string;
//   htmlPreview: {
//     size: {width: number; height: number};
//     content: string;
//   } | null;
//   selectedFramework: FrameworkTypes;
//   preferences: PluginSettings | null;
//   isLoading: boolean;
//   colors: {
//     hex: string;
//     colorName: string;
//     exportValue: string;
//     contrastWhite: number;
//     contrastBlack: number;
//   }[];
//   gradients: { cssPreview: string; exportedValue: string }[];
// }

// function App() {
//   const [appState, setAppState] = useState<AppState>({
//     code: "",
//     htmlPreview: null,
//     selectedFramework: "HTML",
//     preferences: null,
//     isLoading: false,
//     colors: [],
//     gradients: []
//   })

//   useEffect(() => {
//     window.onmessage = (event: MessageEvent) => {
//       const message = event.data.pluginMessage;
//       console.log("[ui] message received:", message);
//       switch (message.type) {
//         case "code":
//           setAppState((prevState) => ({
//             ...prevState,
//             code: message.data,
//             htmlPreview: message.htmlPreview,
//             colors: message.colors,
//             gradients: message.gradients,
//             preferences: message.preferences,
//             selectedFramework: message.preferences.framework,
//           }));
//           break;
//         case "pluginSettingChanged":
//           setAppState((prevState) => ({
//             ...prevState,
//             preferences: message.data,
//             selectedFramework: message.data.framework,
//           }));
//           break;
//         case "empty":
//           setAppState((prevState) => ({
//             ...prevState,
//             code: "// No layer is selected",
//             htmlPreview: null,
//             colors: [],
//             gradients: [],
//           }));
//           break;
//         case "error":
//           setAppState((prevState) => ({
//             ...prevState,
//             colors: [],
//             gradients: [],
//             code: `Error: ${message.data}`
//           }))
//         default:
//           break;
//       }
//     };

//     return () => {
//       window.onmessage = null;
//     }
//   }, []);

//   const handleFrameworkChange = (updatedFramework: FrameworkTypes) => {
//     setAppState((prevState) => ({
//       ...prevState,
//       // code: "// Loading...",
//       selectedFramework: updatedFramework,
//     }));

//     parent.postMessage(
//       {
//         pluginMessage: {
//           type: "pluginSettingChanged",
//           key: "framework",
//           value: updatedFramework,
//         },
//       },
//       "*"
//     );
//   };

//   useEffect(() => {
//     if (appState.selectedFramework === null) {
//       const timer = setTimeout(
//         () => setAppState((prevState) => ({ ...prevState, isLoading: true })),
//         300
//       );
//       return () => clearTimeout(timer);
//     } else {
//       setAppState((prevState) => ({ ...prevState, isLoading: false }));
//     }
//     console.log(`Current selected framework: ${appState.selectedFramework}`)
//   }, [appState.selectedFramework]);

//   // if (appState.selectedFramework === null) {
//   //   return appState.isLoading ? (
//   //     <div>
//   //       Loading Plugin...
//   //     </div>
//   //   ) : null;
//   // }

//   console.log(`state.code: ${appState.code}`);


//   return (
//     <>    
//     <PluginUI 
//       code={appState.code}
//       htmlPreview={appState.htmlPreview}
//       emptySelection={false}
//       selectedFramework={appState.selectedFramework}
//       setSelectedFramework={handleFrameworkChange}
//       preferences={appState.preferences}
//       onPreferenceChange={(key: string, value: boolean | string) => {
//         parent.postMessage(
//           {
//             pluginMessage: {
//               type: "pluginSettingChanged",
//               key: key,
//               value: value,
//             }
//           },
//           "*"
//         );
//       }}
//       colors={appState.colors}
//       gradients={appState.gradients.map((gradient) => ({
//         ...gradient,
//         exportValue: gradient.exportedValue,
//       }))}
//     />
//     </>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import { PluginUI } from "plugin-ui";
import { FrameworkTypes, PluginSettings } from "backend";

interface AppState {
  code: string;
  selectedFramework: FrameworkTypes | null;
  isLoading: boolean;
  htmlPreview: {
    size: { width: number; height: number };
    content: string;
  } | null;
  preferences: PluginSettings | null;
  colors: {
    hex: string;
    colorName: string;
    exportValue: string;
    contrastWhite: number;
    contrastBlack: number;
  }[];
  gradients: { cssPreview: string; exportedValue: string }[];
}

export default function App() {
  const [state, setState] = useState<AppState>({
    code: "",
    selectedFramework: null,
    isLoading: false,
    htmlPreview: null,
    preferences: null,
    colors: [],
    gradients: [],
  });

  const rootStyles = getComputedStyle(document.documentElement);
  const figmaColorBgValue = rootStyles
    .getPropertyValue("--figma-color-bg")
    .trim();

  useEffect(() => {
    window.onmessage = (event: MessageEvent) => {
      const message = event.data.pluginMessage;
      console.log("[ui] message received:", message);
      switch (message.type) {
        case "code":
          setState((prevState) => ({
            ...prevState,
            code: message.data,
            htmlPreview: message.htmlPreview,
            colors: message.colors,
            gradients: message.gradients,
            preferences: message.preferences,
            selectedFramework: message.preferences.framework,
          }));
          break;
        case "pluginSettingChanged":
          setState((prevState) => ({
            ...prevState,
            preferences: message.data,
            selectedFramework: message.data.framework,
          }));
          break;
        case "empty":
          setState((prevState) => ({
            ...prevState,
            code: "// No layer is selected.",
            htmlPreview: null,
            colors: [],
            gradients: [],
          }));
          break;
        case "error":
          setState((prevState) => ({
            ...prevState,
            colors: [],
            gradients: [],
            code: `Error :(\n// ${message.data}`,
          }));
          break;
        default:
          break;
      }
    };

    return () => {
      window.onmessage = null;
    };
  }, []);

  useEffect(() => {
    if (state.selectedFramework === null) {
      const timer = setTimeout(
        () => setState((prevState) => ({ ...prevState, isLoading: true })),
        300
      );
      return () => clearTimeout(timer);
    } else {
      setState((prevState) => ({ ...prevState, isLoading: false }));
    }
  }, [state.selectedFramework]);

  if (state.selectedFramework === null) {
    return state.isLoading ? (
      <div className="w-full h-96 justify-center text-center items-center dark:text-white text-lg">
        Loading Plugin...
      </div>
    ) : null;
  }

  const handleFrameworkChange = (updatedFramework: FrameworkTypes) => {
    setState((prevState) => ({
      ...prevState,
      // code: "// Loading...",
      selectedFramework: updatedFramework,
    }));

    parent.postMessage(
      {
        pluginMessage: {
          type: "pluginSettingChanged",
          key: "framework",
          value: updatedFramework,
        },
      },
      "*"
    );
  };
  console.log("state.code", state.code.slice(0, 25));

  return (
    <div
      className={`${
        figmaColorBgValue === "#ffffff" ? "" : "dark"
      }`}
    >
      <PluginUI
        code={state.code}
        emptySelection={false}
        selectedFramework={state.selectedFramework}
        setSelectedFramework={handleFrameworkChange}
        htmlPreview={state.htmlPreview}
        preferences={state.preferences}
        onPreferenceChange={(key: string, value: boolean | string) => {
          parent.postMessage(
            {
              pluginMessage: {
                type: "pluginSettingChanged",
                key: key,
                value: value,
              },
            },
            "*"
          );
        }}
        colors={state.colors}
        gradients={state.gradients.map((gradient) => ({
          ...gradient,
          exportValue: gradient.exportedValue,
        }))}
      />
    </div>
  );
}
