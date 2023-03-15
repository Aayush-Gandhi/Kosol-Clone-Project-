import { saveAs } from 'file-saver';
import React from 'react';

function handleDownload() {
  const fileUrl = '/Kasol';
  const fileName = 'Kasol.pdf';
  saveAs(fileUrl, fileName);
}

function DownloadButton() {
  return (
    <button onClick={handleDownload}>Download PDF</button>
  );
}

export default DownloadButton;
