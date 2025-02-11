import "./ac1AboutCourse.css";
import Menu from "../../../MenuForAll/Menu.js";
import InfoAboutTeachers from "../teachers/ac1AboutTeachers.js";
import InfoAboutSchool from "../school/ac1AboutSchool.js";
import InfoAboutCourse from "../course/ac1AboutC.js";

const AboutCourse = () => {
    return(
        <div className="about-c">
            <Menu/>
            <InfoAboutCourse/>
            <InfoAboutSchool/>
            <InfoAboutTeachers/>

        </div>

    );
}

export default AboutCourse;