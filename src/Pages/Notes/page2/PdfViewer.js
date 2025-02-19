import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Указываем путь к worker-файлу для pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
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