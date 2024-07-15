import LoginIcon from "../../../assets/login.png";
import QuestionIcon from "../../../assets/question.png";

export const Footer = () => {
    return(
        <>
            <footer className="flex flex-row">
            <section className="subsection">
            <h4 className="category-name">
                <img src={LoginIcon} alt="verbal icon" className="h-6 w-6"/>
                Login
            </h4>
            
            </section>

            <section className="subsection">
            <h4 className="category-name">
                <img src={QuestionIcon} alt="verbal icon" className="h-6 w-6"/>
                Question
            </h4>
            
            </section>
        </footer>
        </>
    );
};