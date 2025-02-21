import "./notes2Topic4.css";
import Menu from '../../../../../MenuForAll/Menu';
import PDFViewer from '../../PdfViewer';
import localPdf from './topic4.pdf';

const Topic4=()=>{
    return(
        <div className="Topic4">
            <Menu/>
            <div className="head-t4">Наследование</div>
            <PDFViewer pdfUrl={localPdf} />
        </div>
        
    );
}

export default Topic4;