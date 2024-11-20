import "./self1Self.css";
import Menu from "../Menu";
import Materials from "./self1Materials";

const Self = () => {
    return(
        <div className="self-study">
            <Menu/>
            <div className="head-for-self">Самостоятельное изучение</div>
            <Materials/>
        </div>

    );

}

export default Self;