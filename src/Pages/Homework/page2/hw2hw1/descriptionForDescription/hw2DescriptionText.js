import "./hw2DescriptionText.css"
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; 


const DescriptionText=()=>{
    return(
        <div className="description-text">
            
            <div className="head-for-description">
                В рамках данного задания вам необходимо создать верстку стандартной
                шахматной доски с шахматными фигурами на стартовых позициях, используя
                только HTML и CSS как инструмент.
            </div>
            <div className="text-for-description">
                <a href="https://drive.google.com/file/d/1SdTkW0rzM7PMEZ7MeLbLyCJvfa6ghQkB/edit">Подробнее</a>
            </div>
        </div>
    );
}


// const quill = new Quill('#editor', {
//     modules: {
//         theme: 'snow',
//       toolbar: [
//         [{ header: [1, 2, 3, false] }],
//         ['bold', 'italic', 'underline', 'strike'],
//         [{ list: 'ordered' }, { list: 'bullet' }],
//         ['link', 'image'],
//         ['clean']
//       ]
//     },
//     placeholder: 'Введите текст...'
//   });


export default DescriptionText;