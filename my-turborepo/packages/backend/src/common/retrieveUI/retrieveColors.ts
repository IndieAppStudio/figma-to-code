import { rgbTo6hex } from "../color";
import {
  tailwindColors,
  tailwindGradient,
  tailwindNearestColor,
  tailwindSolidColor,
} from "../../tailwind/builderImpl/tailwindColor";
import {
  htmlColor,
  htmlGradientFromFills,
} from "../../html/builderImpl/htmlColor";
import { calculateContrastRatio } from "./commonUI";
import { FrameworkTypes } from "backend";

export type ExportSolidColor = {
  hex: string;
  colorName: string;
  exportValue: string;
  contrastWhite: number;
  contrastBlack: number;
};

export const retrieveGenericSolidUIColors = (
  framework: FrameworkTypes
): Array<ExportSolidColor> => {
  const selectionColors = figma.getSelectionColors();
  if (!selectionColors || selectionColors.paints.length === 0) return [];

  const colorStr: Array<ExportSolidColor> = [];
  selectionColors.paints.forEach((paint) => {
    const fill = convertSolidColor(paint, framework);
    if (fill) {
      colorStr.push(fill);
    }
  });

  return colorStr.sort((a, b) => a.hex.localeCompare(b.hex));
};

const convertSolidColor = (
  fill: Paint,
  framework: FrameworkTypes
): ExportSolidColor | null => {
  const black = { r: 0, g: 0, b: 0 };
  const white = { r: 1, g: 1, b: 1 };

  if (fill.type !== "SOLID") return null;

  const opacity = fill.opacity ?? 1.0;
  let exported = "";
  let colorName = "";
  let contrastBlack = calculateContrastRatio(fill.color, black);
  let contrastWhite = calculateContrastRatio(fill.color, white);

  if (framework === "HTML") {
    exported = htmlColor(fill.color, opacity);
  } else if (framework === "Tailwind") {
    const kind = "solid";
    const hex = rgbTo6hex(fill.color);
    const hexNearestColor = tailwindNearestColor(hex);
    exported = tailwindSolidColor(fill.color, fill.opacity, kind);
    colorName = tailwindColors[hexNearestColor];
  } 

  return {
    hex: rgbTo6hex(fill.color).toUpperCase(),
    colorName,
    exportValue: exported,
    contrastBlack,
    contrastWhite,
  };
};

type ExportLinearGradient = { cssPreview: string; exportValue: string };

export const retrieveGenericLinearGradients = (
  framework: FrameworkTypes
): Array<ExportLinearGradient> => {
  const selectionColors = figma.getSelectionColors();
  const colorStr: Array<ExportLinearGradient> = [];

  selectionColors?.paints.forEach((paint) => {
    if (paint.type === "GRADIENT_LINEAR") {
      let exported = "";
      switch (framework) {
        case "HTML":
          exported = htmlGradientFromFills([paint]);
          break;
        case "Tailwind":
          exported = tailwindGradient(paint);
          break;
      }
      colorStr.push({
        cssPreview: htmlGradientFromFills([paint]),
        exportValue: exported,
      });
    }
  });

  return colorStr;
};