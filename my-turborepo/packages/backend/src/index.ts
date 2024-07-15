import {convertToNodes} from "./nodeConvert/altConversion";
import { htmlMain } from "./html/htmlMain";
import { tailwindMain } from "./tailwind/tailwindMain";
import { retrieveGenericSolidUIColors, retrieveGenericLinearGradients as retrieveGenericGradients } from "./common/retrieveUI/retrieveColors";

export type FrameworkTypes = "HTML" | "REACT" | "Flutter" | "VUE" | "SwiftUI" | "Tailwind";

export type PluginSettings = {
    framework: FrameworkTypes;
    jsx: boolean;
    inlineStyle: boolean;
    optimizeLayout: boolean;
    layerName: boolean;
    responsiveRoot: boolean;
    flutterGenerationMode: string;
    swiftUIGenerationMode: string;
    roundTailwind: boolean;
}

export const run = (settings: PluginSettings) => {
    // ignore when nothing was selected
    if (figma.currentPage.selection.length === 0) {
        figma.ui.postMessage({
        type: "empty",
        });
        return;
    }
    
    const convertedSelection = convertToNodes(
        figma.currentPage.selection,
        null
    );
    
    let result = "";
    switch (settings.framework) {
        case "HTML":
        result = htmlMain(convertedSelection, settings);
        break;
        case "Tailwind":
        result = tailwindMain(convertedSelection, settings);
        break;
    }

    figma.ui.postMessage({
        type: "code",
        data: result,
        settings: settings,
        htmlPreview: 
        convertedSelection.length > 0
            ? {
                size: convertedSelection.map((node) => ({
                  width: node.width,
                  height: node.height,
                }))[0],
                content: htmlMain(
                  convertedSelection,
                  {
                    ...settings,
                    jsx: false,
                  },
                  true
                ),
              }
            : null,
        colors: retrieveGenericSolidUIColors(settings.framework),
        gradients: retrieveGenericGradients(settings.framework),
        preferences: settings,
    })
};