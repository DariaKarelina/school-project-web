import "./notes2Topic2.css";
import Menu from '../../../../../MenuForAll/Menu';
import PDFViewer from '../../PdfViewer';
import localPdf from './topic2.pdf';

const Topic2=()=>{
    return(
        <div className="Topic2">
            <Menu/>
            <div className="head-t2">Topic 2</div>
            <PDFViewer pdfUrl={localPdf} />
        </div>
        
    );
}

export default Topic2;