import React from "react";

function PdfViewer() {
  const openPdf = () => {
    window.open("/Kasol", "_blank");
  };

  return (
    <div>
      <button onClick={openPdf}>View</button>
    </div>
  );
}

export default PdfViewer;
