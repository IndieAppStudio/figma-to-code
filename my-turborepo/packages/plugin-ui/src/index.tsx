// export * from "./PluginUI";
import { Navbar } from "./nav";
import { Footer } from "./footer";
import React from "react";
import {FrameworkTypes, PluginSettings} from "backend";
import { CodePanel } from "./codePanel";
import { ColorsPanel } from "./colorPanel";
import { GradientsPanel } from "./gradientsPanel";
import copy from "copy-to-clipboard";

type PluginUIProps = {
    code: string,
    htmlPreview: {
        size: {width: number; height: number};
        content: string;
    } | null;
    emptySelection: boolean;
    selectedFramework: FrameworkTypes;
    setSelectedFramework: (framework: FrameworkTypes) => void;
    preferences: PluginSettings | null;
    onPreferenceChange: (key: string, value: boolean | string) => void;
    colors: {
        hex: string;
        colorName: string;
        exportValue: string;
        contrastWhite: number;
        contrastBlack: number;
      }[];
    gradients: { cssPreview: string; exportValue: string }[];
}

export const PluginUI = (props: PluginUIProps) => {
    return (
        <>
        <Navbar />
        <div className="flex flex-col h-full dark:text-white">
          <div className="p-2 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-1">
            {["HTML", "Tailwind", "Flutter", "SwiftUI"].map((tab) => (
              <button
                key={`tab ${tab}`}
                className={`w-full p-1 text-sm ${
                  props.selectedFramework === tab
                    ? "bg-green-500 dark:bg-green-600 text-white rounded-md font-semibold shadow-sm"
                    : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 border focus:border-0 border-neutral-300 dark:border-neutral-600 rounded-md hover:bg-green-600 dark:hover:bg-green-800 dark:hover:border-green-800 hover:text-white dark:hover:text-white font-semibold shadow-sm"
                }`}
                onClick={() => {
                  props.setSelectedFramework(tab as FrameworkTypes);
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          <div
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "rgba(255,255,255,0.12)",
            }}
          ></div>
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="flex flex-col items-center px-4 py-2 gap-2 dark:bg-transparent">
              {/* <div className="flex flex-col items-center p-4 bg-neutral-50 dark:bg-neutral-800 rounded">
                <Description selected={props.selectedFramework} />
              </div> */}
    
              {props.htmlPreview && (
                <Preview
                  htmlPreview={props.htmlPreview}
                  
                />
              )}
              {/* <ResponsiveGrade /> */}
              {/* <div className="h-2"></div>
            <div className="flex justify-end w-full mb-1">
              <button className="px-4 py-2 text-sm font-semibold text-white bg-neutral-900 rounded-lg ring-1 ring-neutral-700 hover:bg-neutral-700 focus:outline-none">
                Copy
              </button>
            </div> */}
              <CodePanel
                code={props.code}
                selectedFramework={props.selectedFramework}
                preferences={props.preferences}
                onPreferenceChange={props.onPreferenceChange}
              />
    
              {props.colors.length > 0 && (
                <ColorsPanel
                  colors={props.colors}
                  onColorClick={(value) => {
                    copy(value);
                  }}
                />
              )}
    
              {props.gradients.length > 0 && (
                <GradientsPanel
                  gradients={props.gradients}
                  onColorClick={(value) => {
                    copy(value);
                  }}
                />
              )}
            </div>
          </div>
        </div>
        <Footer />
        </>
      );
};

export const Preview: React.FC<{
    htmlPreview: {
        size: {width: number; height: number};
        content: string;
    }
}> = (props) => {
    return (
        <div 
            dangerouslySetInnerHTML={{
                __html: props.htmlPreview.content
            }}
        />
    );
};