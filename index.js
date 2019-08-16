"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var docx_1 = require("docx");
var fs = require('fs');
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('<ul><li>Hello World</li><li><a href="/docx">Example Docx</a></li></ul>');
});
app.get('/docx', function (req, res) {
    // Create document
    var doc = new docx_1.Document();
    // Documents contain sections, you can have multiple sections per document, go here to learn more about sections
    // This simple example will only contain one section
    doc.addSection({
        properties: {},
        children: [
            new docx_1.Paragraph({
                children: [
                    new docx_1.TextRun("Hello World"),
                    new docx_1.TextRun({
                        text: "Foo Bar",
                        bold: true,
                    }),
                    new docx_1.TextRun({
                        text: "Github is the best",
                        bold: true,
                    }).tab(),
                ],
            }),
        ],
    });
    doc.addSection({
        properties: {},
        children: [
            new docx_1.Paragraph({
                children: [
                    new docx_1.TextRun("Hello World"),
                    new docx_1.TextRun({
                        text: "Foo Bar",
                        bold: true,
                    }),
                    new docx_1.TextRun({
                        text: "Github is the best",
                        bold: true,
                    }).tab(),
                ],
            }),
        ],
    });
    // Used to export the file into a .docx file
    // Packer.toBuffer(doc).then((buffer) => {
    //     fs.writeFileSync("My Document.docx", buffer);
    // });
    // Export By Base64
    docx_1.Packer.toBase64String(doc).then(function (string) {
        //console.log(string);
        // res.send('<p>'+string+'</p>');
        var moment = require('moment');
        var filename = moment().format("HHmmssSSS");
        res.writeHead(200, {
            'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'Content-Disposition': 'attachment; filename="' + filename + '.docx"'
        });
        var download = Buffer.from(string, 'base64');
        res.end(download);
    });
    // res.download("My Document.docx");
});
console.log("App Started on http://127.0.0.1:3000");
app.listen(3000);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE0RDtBQUM1RCxJQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLElBQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsR0FBTyxFQUFFLEdBQU87SUFDbkMsR0FBRyxDQUFDLElBQUksQ0FBQyx3RUFBd0UsQ0FBQyxDQUFDO0FBQ3ZGLENBQUMsQ0FBQyxDQUFDO0FBQ0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxHQUFPLEVBQUUsR0FBTztJQUN2QyxrQkFBa0I7SUFDbEIsSUFBTSxHQUFHLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQztJQUMzQixnSEFBZ0g7SUFDaEgsb0RBQW9EO0lBQ3BELEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDWCxVQUFVLEVBQUUsRUFBRTtRQUNkLFFBQVEsRUFBRTtZQUNOLElBQUksZ0JBQVMsQ0FBQztnQkFDVixRQUFRLEVBQUU7b0JBQ04sSUFBSSxjQUFPLENBQUMsYUFBYSxDQUFDO29CQUMxQixJQUFJLGNBQU8sQ0FBQzt3QkFDUixJQUFJLEVBQUUsU0FBUzt3QkFDZixJQUFJLEVBQUUsSUFBSTtxQkFDYixDQUFDO29CQUNGLElBQUksY0FBTyxDQUFDO3dCQUNSLElBQUksRUFBRSxvQkFBb0I7d0JBQzFCLElBQUksRUFBRSxJQUFJO3FCQUNiLENBQUMsQ0FBQyxHQUFHLEVBQUU7aUJBQ1g7YUFDSixDQUFDO1NBQ0w7S0FDSixDQUFDLENBQUM7SUFDSCxHQUFHLENBQUMsVUFBVSxDQUFDO1FBQ1gsVUFBVSxFQUFFLEVBQUU7UUFDZCxRQUFRLEVBQUU7WUFDTixJQUFJLGdCQUFTLENBQUM7Z0JBQ1YsUUFBUSxFQUFFO29CQUNOLElBQUksY0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDMUIsSUFBSSxjQUFPLENBQUM7d0JBQ1IsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsSUFBSSxFQUFFLElBQUk7cUJBQ2IsQ0FBQztvQkFDRixJQUFJLGNBQU8sQ0FBQzt3QkFDUixJQUFJLEVBQUUsb0JBQW9CO3dCQUMxQixJQUFJLEVBQUUsSUFBSTtxQkFDYixDQUFDLENBQUMsR0FBRyxFQUFFO2lCQUNYO2FBQ0osQ0FBQztTQUNMO0tBQ0osQ0FBQyxDQUFDO0lBRUgsNENBQTRDO0lBQzVDLDBDQUEwQztJQUMxQyxvREFBb0Q7SUFDcEQsTUFBTTtJQUNOLG1CQUFtQjtJQUNuQixhQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07UUFDbkMsc0JBQXNCO1FBQ3RCLGlDQUFpQztRQUNqQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsSUFBSSxRQUFRLEdBQUcsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2YsY0FBYyxFQUFFLHlFQUF5RTtZQUN6RixxQkFBcUIsRUFBRSx3QkFBd0IsR0FBQyxRQUFRLEdBQUMsUUFBUTtTQUNwRSxDQUFDLENBQUM7UUFFSCxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUUvQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBRUgsb0NBQW9DO0FBQ3hDLENBQUMsQ0FBQyxDQUFDO0FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0FBQ3BELEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudCwgUGFja2VyLCBQYXJhZ3JhcGgsIFRleHRSdW4gfSBmcm9tIFwiZG9jeFwiO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLmdldCgnLycsIGZ1bmN0aW9uIChyZXE6YW55LCByZXM6YW55KSB7XG4gICAgcmVzLnNlbmQoJzx1bD48bGk+SGVsbG8gV29ybGQ8L2xpPjxsaT48YSBocmVmPVwiL2RvY3hcIj5FeGFtcGxlIERvY3g8L2E+PC9saT48L3VsPicpO1xufSk7XG5hcHAuZ2V0KCcvZG9jeCcsIGZ1bmN0aW9uIChyZXE6YW55LCByZXM6YW55KSB7XG4gICAgLy8gQ3JlYXRlIGRvY3VtZW50XG4gICAgY29uc3QgZG9jID0gbmV3IERvY3VtZW50KCk7XG4gICAgLy8gRG9jdW1lbnRzIGNvbnRhaW4gc2VjdGlvbnMsIHlvdSBjYW4gaGF2ZSBtdWx0aXBsZSBzZWN0aW9ucyBwZXIgZG9jdW1lbnQsIGdvIGhlcmUgdG8gbGVhcm4gbW9yZSBhYm91dCBzZWN0aW9uc1xuICAgIC8vIFRoaXMgc2ltcGxlIGV4YW1wbGUgd2lsbCBvbmx5IGNvbnRhaW4gb25lIHNlY3Rpb25cbiAgICBkb2MuYWRkU2VjdGlvbih7XG4gICAgICAgIHByb3BlcnRpZXM6IHt9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgbmV3IFBhcmFncmFwaCh7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRSdW4oXCJIZWxsbyBXb3JsZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRSdW4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJGb28gQmFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2xkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRSdW4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJHaXRodWIgaXMgdGhlIGJlc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pLnRhYigpLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICB9KTtcbiAgICBkb2MuYWRkU2VjdGlvbih7XG4gICAgICAgIHByb3BlcnRpZXM6IHt9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgbmV3IFBhcmFncmFwaCh7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRSdW4oXCJIZWxsbyBXb3JsZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRSdW4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJGb28gQmFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2xkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRSdW4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJHaXRodWIgaXMgdGhlIGJlc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pLnRhYigpLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICB9KTtcblxuICAgIC8vIFVzZWQgdG8gZXhwb3J0IHRoZSBmaWxlIGludG8gYSAuZG9jeCBmaWxlXG4gICAgLy8gUGFja2VyLnRvQnVmZmVyKGRvYykudGhlbigoYnVmZmVyKSA9PiB7XG4gICAgLy8gICAgIGZzLndyaXRlRmlsZVN5bmMoXCJNeSBEb2N1bWVudC5kb2N4XCIsIGJ1ZmZlcik7XG4gICAgLy8gfSk7XG4gICAgLy8gRXhwb3J0IEJ5IEJhc2U2NFxuICAgIFBhY2tlci50b0Jhc2U2NFN0cmluZyhkb2MpLnRoZW4oKHN0cmluZykgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHN0cmluZyk7XG4gICAgICAgIC8vIHJlcy5zZW5kKCc8cD4nK3N0cmluZysnPC9wPicpO1xuICAgICAgICB2YXIgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG4gICAgICAgIGxldCBmaWxlbmFtZSA9IG1vbWVudCgpLmZvcm1hdChcIkhIbW1zc1NTU1wiKTtcbiAgICAgICAgcmVzLndyaXRlSGVhZCgyMDAsIHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQnLFxuICAgICAgICAgICAgJ0NvbnRlbnQtRGlzcG9zaXRpb24nOiAnYXR0YWNobWVudDsgZmlsZW5hbWU9XCInK2ZpbGVuYW1lKycuZG9jeFwiJ1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkb3dubG9hZCA9IEJ1ZmZlci5mcm9tKHN0cmluZywgJ2Jhc2U2NCcpO1xuXG4gICAgICAgIHJlcy5lbmQoZG93bmxvYWQpO1xuICAgIH0pO1xuXG4gICAgLy8gcmVzLmRvd25sb2FkKFwiTXkgRG9jdW1lbnQuZG9jeFwiKTtcbn0pO1xuY29uc29sZS5sb2coXCJBcHAgU3RhcnRlZCBvbiBodHRwOi8vMTI3LjAuMC4xOjMwMDBcIik7XG5hcHAubGlzdGVuKDMwMDApO1xuIl19