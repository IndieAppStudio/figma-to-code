import ExportIcon from "../../../assets/export.png";
import DesignIcon from "../../../assets/design.png";
import MagicWardIcon from "../../../assets/magic-ward.png";
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { settings } from "./settings";
import {BuilderIO} from "./ui";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    style?: React.CSSProperties;
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

export const Navbar = () => {

    const [tabIndex, setTabIndex] = useState(0)

    const switchTab = (event: any, newValue: number) => {
        setTabIndex(newValue)
    }

    return(
        // <nav className="flex flex-row gap-8 flex-wrap p-2 border-b-2 border-gray">
        //     <section className="cursor-pointer brightness-0 invert">
        //         <h4 className="flex items-center gap-2 text-base">
        //         <img src={ExportIcon} alt="reaction icon" className="h-6 w-6 block"/>
        //         Export
        //         </h4>
        //     </section>

        //     <section className="cursor-pointer">
        //         <h4 className="flex items-center gap-2 text-base">
        //         <img src={DesignIcon} alt="memory icon" className="h-6 w-6 block"/>
        //         Design System
        //         </h4>
        //     </section>

        //     <section className="cursor-pointer">
        //         <h4 className="flex items-center gap-2 text-base">
        //         <img src={MagicWardIcon} alt="verbal icon" className="h-6 w-6 block"/>
        //         Design With AI
        //         </h4>
            
        //     </section>
        // </nav>
        <div>

        
        <Tabs
            variant="fullWidth"
            style={{
              minHeight: 40,
              backgroundColor: "#F9F9F9",
              flexShrink: 0,
              width: settings.ui.baseWidth,
              borderRight: "1px solid #ccc",
            }}
            TabIndicatorProps={{
              style: { transition: "none" },
            }}
            value={tabIndex}
            onChange={switchTab}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab
              style={{
                minHeight: 40,
                minWidth: 0,
              }}
              label={
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    textTransform: "none",
                  }}
                >
                  Export to Code
                </span>
              }
            />
            <Tab
              style={{
                minHeight: 40,
                minWidth: 0,
              }}
              label={
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    textTransform: "none",
                  }}
                >
                  Generate with AI
                </span>
              }
            />
            <Tab
              style={{
                minHeight: 40,
                minWidth: 0,
              }}
              label={
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    textTransform: "none",
                  }}
                >
                  Import from web
                </span>
              }
            />
        </Tabs>
        <TabPanel
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        value={tabIndex}
        index={0}
      >
        <>
         <h1>First Tab</h1>
        </>
        </TabPanel>

        <TabPanel value={tabIndex} index={1}>
          <BuilderIO />
        </TabPanel>

        {/* Import to Figma */}
        <TabPanel value={tabIndex} index={2}>
            <h1>Third Tab</h1>
        </TabPanel>
      </div>
    );
};