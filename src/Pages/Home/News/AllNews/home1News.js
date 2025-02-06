import './home1News.css';
import NewsOne from "../News1/home1NewsOne";
import NewsTwo from "../News2/home1NewsTwo";
import NewsThree from "../News3/home1NewsThree";
const News = () => {
    return(
        <div className="news">
            <NewsOne/>
            <NewsTwo/>
            <NewsThree/>
        </div> 
    )
}

export default News;