import { saveAs } from 'file-saver';
import React from 'react';

function handleDownload() {
  const fileUrl = '/kasol';
  const fileName = 'kasol';
  saveAs(fileUrl, fileName);
}

function DownloadButton() {
  return (
    <button onClick={handleDownload}>Download PDF</button>
  );
}

export default DownloadButton;
