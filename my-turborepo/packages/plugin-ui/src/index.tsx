// export * from "./PluginUI";
import { Navbar } from "./nav";
import { Footer } from "./footer";
import React from "react";

type PluginUIProps = {
    code: string,
    htmlPreview: {
        size: {width: number; height: number};
        content: string;
    } | null;
}

export const PluginUI = (props: PluginUIProps) => {
    return(
        <>
        <Navbar />
        {/* Preview */}
        <div>
            <span>Preview</span>
            {props.htmlPreview && (
                <Preview 
                    htmlPreview={props.htmlPreview}
                />
            )}
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