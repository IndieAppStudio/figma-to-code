import LoginIcon from "../../../assets/login.png";
import QuestionIcon from "../../../assets/question.png";

export const Footer = () => {
    return(
        <>
            <footer>
            <section className="subsection">
            <h4 className="category-name">
                <img src={LoginIcon} alt="verbal icon" />
                Login
            </h4>
            
            </section>

            <section className="subsection">
            <h4 className="category-name">
                <img src={QuestionIcon} alt="verbal icon" />
                Question
            </h4>
            
            </section>
        </footer>
        </>
    );
};