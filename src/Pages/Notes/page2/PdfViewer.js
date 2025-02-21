import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const PDFViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className='pdf'>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Страница {pageNumber} из {numPages}
      </p>
      <button
        onClick={() => setPageNumber(prevPage => prevPage - 1)}
        disabled={pageNumber <= 1}
      >
        Предыдущая
      </button>
      <button
        onClick={() => setPageNumber(prevPage => prevPage + 1)}
        disabled={pageNumber >= numPages}
      >
        Следующая
      </button>
    </div>
  );
};

export default PDFViewer;