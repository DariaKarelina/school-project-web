import "./notes2Topic3.css";
import Menu from '../../../../../MenuForAll/Menu';
import PDFViewer from '../../PdfViewer';
import localPdf from './topic3.pdf';

const Topic3=()=>{
    return(
        <div className="Topic3">
            <Menu/>
            <div className="head-t3">Введение в JavaScript</div>
            <PDFViewer pdfUrl={localPdf} />
        </div>
        
    );
}

export default Topic3;