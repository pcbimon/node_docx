import { Document, Packer, Paragraph, TextRun } from "docx";
const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', function (req:any, res:any) {
    res.send('<ul><li>Hello World</li><li><a href="/docx">Example Docx</a></li></ul>');
});
app.get('/docx', function (req:any, res:any) {
    // Create document
    const doc = new Document();
    // Documents contain sections, you can have multiple sections per document, go here to learn more about sections
    // This simple example will only contain one section
    doc.addSection({
        properties: {},
        children: [
            new Paragraph({
                children: [
                    new TextRun("Hello World"),
                    new TextRun({
                        text: "Foo Bar",
                        bold: true,
                    }),
                    new TextRun({
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
            new Paragraph({
                children: [
                    new TextRun("Hello World"),
                    new TextRun({
                        text: "Foo Bar",
                        bold: true,
                    }),
                    new TextRun({
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
    Packer.toBase64String(doc).then((string) => {
        //console.log(string);
        // res.send('<p>'+string+'</p>');
        var moment = require('moment');
        let filename = moment().format("HHmmssSSS");
        res.writeHead(200, {
            'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'Content-Disposition': 'attachment; filename="'+filename+'.docx"'
        });

        const download = Buffer.from(string, 'base64');

        res.end(download);
    });

    // res.download("My Document.docx");
});
console.log("App Started on http://127.0.0.1:3000");
app.listen(3000);
