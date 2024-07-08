import ExportIcon from "../../../assets/export.png";
import DesignIcon from "../../../assets/design.png";
import MagicWardIcon from "../../../assets/magic-ward.png";

export const Navbar = () => {
    return(
        <nav className="flex flex-col">
            <section className="subsection active">
                <h4 className="category-name">
                <img src={ExportIcon} alt="reaction icon" />
                Export
                </h4>
            </section>

            <section className="subsection ac">
                <h4 className="category-name">
                <img src={DesignIcon} alt="memory icon" />
                Design System
                </h4>
            </section>

            <section className="subsection">
                <h4 className="category-name">
                <img src={MagicWardIcon} alt="verbal icon" />
                Design With AI
                </h4>
            
            </section>
        </nav>
    );
};