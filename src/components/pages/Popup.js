/* import React from "react";
 import './styless.css';
 
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup; */


import React, {useState} from "react";
import './styless.css';
import { Document, Page ,pdfjs} from "react-pdf";
import samplePdf from "../assets/CV-Europass-Keikoglou-EN.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Popup = props => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="popup-box" style={{zIndex:"800"}}>
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <Document
          file={samplePdf}
          options={{ workerSrc: "pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <div style={{ width: "100%", textAlign: "center" }}>
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
};

export default Popup;