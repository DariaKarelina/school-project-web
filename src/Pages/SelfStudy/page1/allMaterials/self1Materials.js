import "./self1Materials.css";
import Video from "../videoForCatalog/self1Video";
import Text from "../textForCatalog/self1Text";
import Doc from '../documentationForCatalog/self1Doc';

const Materials = () => {
    return(
        <div className="materials">
            <Video/>
            <Text/>
            <Doc/>
        </div>
    );
}

export default Materials;