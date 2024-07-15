import ExportIcon from "../../../assets/export.png";
import DesignIcon from "../../../assets/design.png";
import MagicWardIcon from "../../../assets/magic-ward.png";

export const Navbar = () => {
    return(
        <nav className="flex flex-row gap-8 flex-wrap p-2 border-b-2 border-gray">
            <section className="cursor-pointer brightness-0 invert">
                <h4 className="flex items-center gap-2 text-base">
                <img src={ExportIcon} alt="reaction icon" className="h-6 w-6 block"/>
                Export
                </h4>
            </section>

            <section className="cursor-pointer">
                <h4 className="flex items-center gap-2 text-base">
                <img src={DesignIcon} alt="memory icon" className="h-6 w-6 block"/>
                Design System
                </h4>
            </section>

            <section className="cursor-pointer">
                <h4 className="flex items-center gap-2 text-base">
                <img src={MagicWardIcon} alt="verbal icon" className="h-6 w-6 block"/>
                Design With AI
                </h4>
            
            </section>
        </nav>
    );
};