import React, { useRef, useState } from 'react';
import { saveAs } from 'file-saver';

export default function HomeComponent() {
    let selectedFormat = 'PDF';

    const downloadFile = () => {
        fetch(`/api/Home/Export?format=${selectedFormat}`)
            .then(response => response.blob())
            .then(data => {
                saveAs(data, 'TestReport.' + selectedFormat.toLowerCase());
            })
            .catch(error => {
            console.error('An error has occurred:', error);
        });
    };

    const printInNewTab = () => {
        var frameElement = window.open("api/Home/Print", "_blank");
        frameElement.addEventListener("load", function (e) {
            if (frameElement.document.contentType !== "text/html")
                frameElement.print();
        });
    };

    const printInIframe = () => {
        const iframe = document.getElementById('printFrame');
        if (!iframe) {
            console.error('IFrame not found');
            return;
        }
        try {
            if (iframe.contentDocument?.contentType !== "text/html") {
                iframe.contentWindow.print();
            }
        } catch (error) {
            console.error('An error has occurred::', error);
        }
    };


    return (
        <div style={{ padding: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <select value={selectedFormat} onChange={e => selectedFormat = (e.target.value)}>
                    <option value="PDF">PDF</option>
                    <option value="RTF">RTF</option>
                    <option value="XLSX">XLSX</option>
                    <option value="DOCX">DOCX</option>
                    <option value="XLS">XLS</option>
                    <option value="MHT">MHT</option>
                    <option value="HTML">HTML</option>
                    <option value="CSV">CSV</option>
                    <option value="TXT">TXT</option>
                    <option value="PNG">PNG</option>
                </select>
                <button onClick={downloadFile}>Export the report</button>
                <button onClick={printInNewTab}>Print the report in new tab</button>
                <button onClick={printInIframe}>Print via iFrame</button>
            </div>
                <iframe id="printFrame" name="printFrameName" src="api/Home/Print" title="Print" frameorder="0" width="1" height="1" style={{ position: "absolute", top: "-100px" }} />
        </div>
    );
}