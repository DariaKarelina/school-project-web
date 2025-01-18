import './notes1Topics.css';

const Topics = () => {
    return(
        <div className="topics">
            
            <div className='head-for-topic'>
              Выберите лекцию
            </div>
            
            <div className='t1'><a href='notes/topic1'>topic 1 </a></div>
    
            <div className='t2'><a href='notes/topic2'>topic 2 </a></div> 
    
            <div className='t3'><a href='notes/topic3'>topic 3 </a></div>
    
            <div className='t4'><a href='notes/topic4'>topic 4</a></div>
    
            <dev className='t5'><a href='notes/topic5'>topic 5 </a></dev>
    
    </div>


    );
}

export default Topics;