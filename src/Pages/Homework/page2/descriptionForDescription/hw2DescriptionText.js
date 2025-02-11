import "./hw2DescriptionText.css"
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; 


const DescriptionText=()=>{
    return(
        <div className="description-text">
            
            <div className="head-for-description">
                Описание
            </div>
            <div className="text-for-description">
                <div id="editor"></div>
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