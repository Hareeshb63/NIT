import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../excel.service';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
   selector: 'app-excelexpor',
   templateUrl: './excelexpor.component.html',
   styleUrls: ['./excelexpor.component.css']
})

export class ExcelexporComponent implements OnInit {

   // public data = { "reportdetail": [{ "TraineeName": "Murgesh", "Functionname": "Hr", "status": null, "score": "9" }] }
   public data;
   constructor(private excelService: ExcelService) { }

   ngOnInit(): void {
      this.data= this.excelService.getData();
      this.clean(this.data.reportdetail[0]);
      console.log("data", this.data);
   }
   public clean(obj) {
      for (var propName in obj) {
         if (obj[propName] === null || obj[propName] === undefined) {
            delete obj[propName];
         }
      }
   }
   
   public exportAsXLSX(): void {
      this.excelService.exportAsExcelFile(this.data.reportdetail, 'sample');
   }

   public generatePdf(){
    var docDefinition = {
      content: [
        {
          layout: 'lightHorizontalLines', // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: [ '*', 'auto', 100, '*' ],
    
            body: [
              [ 'First', 'Second', 'Third', 'The last one' ],
              [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
              [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
            ]
          }
        }
      ]
    };
    pdfMake.createPdf(docDefinition).open();
  }

  public head = [['TraineeName', 'Functionname', 'status', 'score']]
 
//   public data1 = [
//     [1, 'Finland', 7.632, 'Helsinki'],
//     [2, 'Norway', 7.594, 'Oslo'],
//     [3, 'Denmark', 7.555, 'Copenhagen'],
//     [4, 'Iceland', 7.495, 'Reykjavík'],
//     [5, 'Switzerland', 7.487, 'Bern'],
//     [9, 'Sweden', 7.314, 'Stockholm'],
//     [73, 'Belarus', 5.483, 'Minsk'],
//   ]
 
  createPdf() {
    var doc = new jsPDF();
 
    doc.setFontSize(18);
    doc.text('My PDF Table', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);
 
 
    (doc as any).autoTable({
      head: this.head,
      body: this.data.reportdetail,
      theme: 'plain',
      didDrawCell: data => {
        console.log(data.column.index)
      }
    })
 
    // Open PDF document in new tab
    doc.output('dataurlnewwindow')
 
    // Download PDF document  
    doc.save('table.pdf');
  }

  convert() {

   var doc = new jsPDF();
   var col = ["Id", "TypeID","Accnt","Amnt","Start","End","Contrapartida","End","Contrapartida","Contrapartida","End","Contrapartida"];
   var rows = [];

var rowCountModNew = [
["1721079361", "0001", "2100074911", "200", "22112017", "23112017", "51696", "23112017", "51696", "51696", "23112017", "51696"],
["1721079362", "0002", "2100074912", "300", "22112017", "23112017", "51691", "23112017", "51696", "51696", "23112017", "51696"],
["1721079363", "0003", "2100074913", "400", "22112017", "23112017", "51692", "23112017", "51696", "51696", "23112017", "51696"],
["1721079364", "0004", "2100074914", "500", "22112017", "23112017", "51693", "23112017", "51696", "51696", "23112017", "51696"]
]


rowCountModNew.forEach(element => {
     rows.push(element);

   });


   doc.autoTable(col, rows);
   doc.save('Test.pdf');
 }

 public convert1() {

   var doc = new jsPDF();
   var col = ["TraineeName","Functionname",'status', 'score',"TraineeName","Functionname",'status', 'score'];
   var col1 = ["TraineeName","Functionname",'status', 'score'];
   var rows = [];
   var rows1 = [];

this.data.reportdetail.forEach(element => {      
    var temp = [element.TraineeName,element.Functionname,(element.status==null)?'Not Available':element.status,element.score,
                element.TraineeName,element.Functionname,element.status,element.score];
    var temp1 = [element.TraineeName,element.Functionname,element.status,element.score];
    rows.push(temp);
    rows1.push(temp1);

});        

    doc.autoTable(col, rows, { startY: 10 });

   doc.autoTable(col1, rows1, { startY: 60 });
    doc.save('Test.pdf');
  }
}
