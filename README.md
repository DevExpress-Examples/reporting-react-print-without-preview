## How to Print and Export a Report in a React Application without Displaying the Report

This example prints and exports a report in a browser without previewing it on a web page.

**Print**

On the **server side**, a controller performs the following actions:
- [creates a report](https://docs.devexpress.com/XtraReports/2440/get-started-with-devexpress-reporting/create-a-report-from-a-to-z);
- [exports the report to PDF](https://docs.devexpress.com/XtraReports/2574/detailed-guide-to-devexpress-reporting/store-and-distribute-reports/export-reports/export-to-pdf) with the [XtraReport.ExportToPdfAsync](https://docs.devexpress.com/XtraReports/DevExpress.XtraReports.UI.XtraReport.ExportToPdfAsync.overloads) method;
- send the PDF file back to the client.

On the **client-side**, a user can do one of the following:

* Print a report in a new tab.
Click a button to call the client-side `window.Open(url, "_blank")` method to open a new window that contains a PDF file and print the window content.

* Print a report in iFrame. 
Click a button to load a PDF file in the `HTMLIFrameElement` and print its content.

*NOTE: We don't recommend printing with an invisible iFrame element because it's not guaranteed to work reliably across all browsers.* 

For more information review the following help topic:

* [Web Reporting](https://docs.devexpress.com/XtraReports/9814/create-end-user-reporting-applications/web-reporting)


**Export**

The user selects the format and clicks a button to send the format to the server-side controller. The controller calls the export method for the selected format and sends the file back to the browser.

For more information review the following help topic:
*  [Export Reports](https://docs.devexpress.com/XtraReports/1302/detailed-guide-to-devexpress-reporting/store-and-distribute-reports/export-reports).