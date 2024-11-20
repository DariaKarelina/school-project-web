import './notes1Notes.css';
import Menu from '../../Menu';
import Topics from './notes1Topics';

const Notes = () => {
    return(
        <div className="notes">
            <Menu/>
            <div className='head-for-notes'>
              Конспекты  
            </div>

            <Topics/>
        </div>

    );
}

export default Notes;