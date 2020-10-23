import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../excel.service';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-jspdf',
  templateUrl: './jspdf.component.html',
  styleUrls: ['./jspdf.component.css']
})
export class JspdfComponent implements OnInit {

   // public data = { "reportdetail": [{ "TraineeName": "Murgesh", "Functionname": "Hr", "status": null, "score": "9" }] }
   public data;
   head1 = [['ID', 'Country', 'Rank', 'Capital']]
 
  data1 = [
    [1, 'Finland', 7.632, 'Helsinki'],
    [2, 'Norway', 7.594, 'Oslo'],
    [3, 'Denmark', 7.555, 'Copenhagen'],
    [4, 'Iceland', 7.495, 'Reykjavík'],
    [5, 'Switzerland', 7.487, 'Bern'],
    [9, 'Sweden', 7.314, 'Stockholm'],
    [73, 'Belarus', 5.483, 'Minsk'],
  ]
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

  public convert1() {

    var doc = new jsPDF();
    var col = ["TraineeName","Functionname",'status', 'score',"TraineeName","Functionname",'status', 'score'];
    var col = ["TraineeName","Functionname",'status', 'score'];
    var rows = [];
 
 this.data.reportdetail.forEach(element => {      
     var temp = ["TraineeName","Functionname",'status', 'score'];
     rows.push(temp);
 
 });        
 
     doc.autoTable(col, rows, { startY: 10 });
     doc.save('Test.pdf');
   }

   
   createPdf1() {
    var doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('My PDF Table', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);


    (doc as any).autoTable({
      head: this.head1,
      body: this.data1,
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
}
