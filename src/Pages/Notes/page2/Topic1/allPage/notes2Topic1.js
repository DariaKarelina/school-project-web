import "./notes2Topic1.css";
import Menu from '../../../../../MenuForAll/Menu';
import PDFViewer from '../../PdfViewer';
import localPdf from './topic1.pdf';

const Topic1=()=>{
    return(
        <div className="Topic1">
            <Menu/>
            <div className="head-t1">Основы верстки</div>
            <PDFViewer pdfUrl={localPdf} />
        </div>
        
    );
}

export default Topic1;