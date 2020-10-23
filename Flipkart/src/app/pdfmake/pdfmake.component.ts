import { Component, OnInit } from '@angular/core';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
pdfmake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdfmake',
  templateUrl: './pdfmake.component.html',
  styleUrls: ['./pdfmake.component.css']
})
export class PdfmakeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public makePdf() {
    
    var docDefinition = {
      content: [
        {
          columns: [
            {
              image: 'data:image/jpeg;base64,your_image_here',
              fit: [100, 100]
            },
            [
              { text: 'BITCOIN', style: 'header' },
              { text: 'Cryptocurrency Payment System', style: 'sub_header' },
              { text: 'WEBSITE: https://bitcoin.org/', style: 'url' },
            ]
          ]
        }
      ],
      styles: {
        header: {
          bold: true,
          fontSize: 20,
          alignment: 'right'
        },
        sub_header: {
          fontSize: 18,
          alignment: 'right'
        },
        url: {
          fontSize: 16,
          alignment: 'right'
        }
      },
      pageSize: 'A4',
      pageOrientation: 'portrait'
    };
    pdfmake.createPdf(docDefinition).open();
  }
}

