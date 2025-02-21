import "./notes2Topic8.css";
import Menu from '../../../../../MenuForAll/Menu';
import PDFViewer from '../../PdfViewer';
import localPdf from './topic8.pdf';

const Topic8=()=>{
    return(
        <div className="Topic8">
            <Menu/>
            <div className="head-t8">Асихронный JavaScript</div>
            <PDFViewer pdfUrl={localPdf} />
        </div>
        
    );
}

export default Topic8;