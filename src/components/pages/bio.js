/* import React, { Component } from 'react';


class Bio extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
}
  render() {
    return (
      <div style={{ marginTop: '56px' }}>
          <h1>BIO</h1>
      </div>
    );
  }
}


export default Bio; */


/* import React, { useState } from "react";
import { Document, Page } from "react-pdf";

export default function Bio(props) {
  const [numPages, setNumPages] = useState(null);


  
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  return (
    <div style={{marginTop:"56px",width:"100%"}}>
    <Document
      file={pdf}
      options={{ workerSrc: "pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <div style={{width:"100%" ,textAlign:"center"  }}>
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        </div>
      ))}
    </Document>
    </div>
  );
} */


