import './hw1Homeworks.css';
import TopicForHW1 from '../forCatalog/hw1ForCatalog/hw1TopicForHW1';
import TopicForHW2 from '../forCatalog/hw2ForCatalog/hw1TopicForHW2';
import TopicForHW3 from '../forCatalog/hw3ForCatalog/hw1TopicForHW3';
import TopicForHW4 from '../forCatalog/hw4ForCatalog/hw1TopicForHW4';
import TopicForHW5 from '../forCatalog/hw5ForCatalog/hw1TopicForHW5';
import TopicForHW6 from '../forCatalog/hw6ForCatalog/hw1TopicForHW6';

const Homeworks = () => {
    return(
        <div className="homeworks">
            <div className='homew1'>
                <TopicForHW1/>
                <TopicForHW2/>
                <TopicForHW3/>
            </div>
            <div className='homew2'>
                <TopicForHW4/>
                <TopicForHW5/>
                <TopicForHW6/>
        
            </div>
            
        </div>
        

    );
}

export default Homeworks;