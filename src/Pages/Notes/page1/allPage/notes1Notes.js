import './notes1Notes.css';
import Menu from '../../../../MenuForAll/Menu';
import Topics from '../topicsForCatalog/notes1Topics';

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