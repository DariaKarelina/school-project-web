import "./fb1Feedback.css";
import Menu from "./Menu";
import TextAndFeedback from "./fb1TextAndFeedback";
import Headers from "./fb1Headers";

const Feedback = () => {
    return(
        <div className="feedback">
            <Menu/>
            <Headers/>
            <TextAndFeedback/>

        </div>

    );
}

export default Feedback;