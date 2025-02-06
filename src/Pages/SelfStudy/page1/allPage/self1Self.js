import "./self1Self.css";
import Menu from "../../../../MenuForAll/Menu";
import Materials from "../allMaterials/self1Materials";

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