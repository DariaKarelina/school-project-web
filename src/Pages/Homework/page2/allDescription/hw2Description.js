import "./hw2Description.css"
import DescriptionText from "../descriptionForDescription/hw2DescriptionText";
import DescriptionInfo from "../InfoForDescription/hw2DescriptionInfo";

const Description=()=>{
    return(
        <div className="description">
            <DescriptionText/>
            <DescriptionInfo/>
        </div>
    );
}

export default Description;