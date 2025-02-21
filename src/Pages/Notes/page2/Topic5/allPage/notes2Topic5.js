import "./notes2Topic5.css";
import Menu from '../../../../../MenuForAll/Menu';
import PDFViewer from '../../PdfViewer';
import localPdf from './topic5.pdf';

const Topic5=()=>{
    return(
        <div className="Topic5">
            <Menu/>
            <div className="head-t5">Итераторы. Коллекции. Регулярные выражения</div>
            <PDFViewer pdfUrl={localPdf} />
        </div>
        
    );
}

export default Topic5;