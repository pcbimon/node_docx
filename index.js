import * as fs from "fs";
import { Document, Packer, Paragraph, TextRun } from "docx";

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});
app.get('/docx', function (req, res) {
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

    // Used to export the file into a .docx file
    Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync("My Document.docx", buffer);
    });
});
console.log("App Started on http://127.0.0.1:3000");
app.listen(3000);
