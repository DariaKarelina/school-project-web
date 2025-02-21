import './notes1Topics.css';

const Topics = () => {
    return(
        <div className="topics">
            
            <div className='all-t'>
            <div className='t1'><a href='notes/topic1'>Основы верстки</a></div>
    
            <div className='t2'><a href='notes/topic2'>Основы верстки 2</a></div> 
    
            <div className='t3'><a href='notes/topic3'>Введение в JS</a></div>
    
            <div className='t4'><a href='notes/topic4'>Наследование</a></div>
    
            <dev className='t5'><a href='notes/topic5'>Итераторы</a></dev>
            <dev className='t6'><a href='notes/topic5'>Коллекции</a></dev>
            <dev className='t7'><a href='notes/topic5'>Регулярные выражения</a></dev>
            <dev className='t8'><a href='notes/topic8'>Асихронный JS</a></dev>
            </div>
    </div>


    );
}

export default Topics;