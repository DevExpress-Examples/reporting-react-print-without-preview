import React from "react";
import saveAs from "file-saver";


class HomeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.selectedFormat = 'pdf';
        this.printUrl = "";

        this.reportUrl = "TestReport";

        this.onChange = this.onChange.bind(this);
        this.downloadFile = this.downloadFile.bind(this);
        this.printInNewWindow = this.printInNewWindow.bind(this);
        this.printInIframe = this.printInIframe.bind(this);
    };

    onChange(event) {
        this.selectedFormat = event.target.value;
    }

    printInNewWindow() {
        var frameElement = window.open("api/Home/Print", "_blank");
        frameElement.addEventListener("load", function (e) {
            if (frameElement.document.contentType !== "text/html")
                frameElement.print();
        });
    }

    printInIframe() {
        var iframe = document.getElementById('printFrame');
        if (iframe.contentDocument.contentType !== "text/html")
            iframe.contentWindow.print();
    }

    downloadFile() {
        fetch("api/Home/Export?format=" + this.selectedFormat)
            .then(response => response.blob())
            .then(data => {
                saveAs(data, 'TestReport.' + this.selectedFormat.toLowerCase());
            });

    }

    render() {

        return (                    
                <div>
                <select name="exportFormat" onChange={this.onChange}>
                    <option>PDF</option>
                    <option>DOCX</option>
                    <option>XLS</option>
                    <option>XLSX</option>
                    <option>RTF</option>
                    <option>MHT</option>
                    <option>HTML</option>
                    <option>TXT</option>
                    <option>CSV</option>
                    <option>PNG</option>
                </select>
                <button style={{ margin: "5px" }} onClick={this.downloadFile}>
                    Export a report
                </button>
                <button style={{ margin: "5px" }} onClick={this.printInNewWindow} >
                    Print a report in a new tab
                </button>
                <button style={{ margin: "5px" }} onClick={this.printInIframe} >
                    Print a report with IFrame
                </button>
                <iframe id="printFrame" name="printFrameName" src="api/Home/Print" title="Print" frameorder="0" width="1" height="1" style={{ position: "absolute", top: "-100px" }} >
                </iframe>
                </div>
        );
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
};

export default HomeComponent;
