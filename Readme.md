<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/274919030/24.2.1%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T902911)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
# Reporting for React - Print and Export Without Displaying the Report

This example prints and exports a report in a browser without previewing it on a web page.

![Screenshot](Images/screenshot.png)

## Run the Project 

Run the following command from the *ServerApp* folder: 

```cmd
dotnet run
```

Run the following commands from the *react-app* folder: 

```cmd
npm install
mpm run dev
```

Open your browser and navigate to the URL specified in the command output to see the result.

## Implementation Details

### Export Operations

The user selects the format from the drop-down list and clicks the **Export the report** button to send the format to the server-side controller. The controller calls the export method for the selected format and sends the file back to the browser.

### Print Operations

On the **server side**, a controller performs the following actions:
- [Creates a report](https://docs.devexpress.com/XtraReports/2440/get-started-with-devexpress-reporting/create-a-report-from-a-to-z).
- [Exports the report to PDF](https://docs.devexpress.com/XtraReports/2574/detailed-guide-to-devexpress-reporting/store-and-distribute-reports/export-reports/export-to-pdf) with the [XtraReport.ExportToPdfAsync](https://docs.devexpress.com/XtraReports/DevExpress.XtraReports.UI.XtraReport.ExportToPdfAsync.overloads) method.
- Sends the PDF file back to the client.

On the **client side**, a user can do one of the following:


* Print a report in a new tab.

    Click the **Print the report in a new tab** button to call the client-side `window.Open(url, "_blank")` method to open a new window that contains a PDF file and print the window content.

* Print a report in iFrame.

    Click the **Print via iFrame** button to load a PDF file in the `HTMLIFrameElement` and print its content.


## Files to Review

- [HomeComponent.jsx](react-app/src/components/HomeComponent.jsx)
- [HomeController.cs](ServerApp/Controllers/HomeController.cs)

## Documentation

* [Reporting for React](https://docs.devexpress.com/XtraReports/401915/web-reporting/javascript-reporting/react)
* [Export Reports](https://docs.devexpress.com/XtraReports/1302/detailed-guide-to-devexpress-reporting/store-and-distribute-reports/export-reports)

## More Examples

- [Reporting for Web (React) - Report Designer](https://github.com/DevExpress-Examples/reporting-eud-designer-in-javascript-with-react)
- [Reporting for Web (React) - Document Viewer](https://github.com/DevExpress-Examples/reporting-document-viewer-in-javascript-with-react)
- [How to Print and Export a Report in the ASP.NET Core Application without the Document Viewer](https://github.com/DevExpress-Examples/Reporting-AspNetCore-Print-Without-Preview)
<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=reporting-react-print-without-preview&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=reporting-react-print-without-preview&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
