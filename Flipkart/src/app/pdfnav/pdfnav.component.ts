import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, } from '@ng-bootstrap/ng-bootstrap';
import { ModelService } from "../model.service"


@Component({
  selector: 'app-pdfnav',
  templateUrl: './pdfnav.component.html',
  styleUrls: ['./pdfnav.component.css']
})
export class PdfnavComponent implements OnInit {

  closeResult = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public selected;
  public mgntSrc;

  public open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    console.log(this.modalService)
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public managments = [
    {name: 'Finance', pdf: 'finance.pdf'},
    {name: 'test', pdf: 'assets/test1.pdf'},
    {name: 'Hr', pdf: 'hr.pdf'},
    {name: 'IT', pdf: 'it.pdf'},
    {name: 'R&D', pdf: 'r&d.pdf'},
    {name: 'Sales & Marketing', pdf: 'assets/test.pdf'},
    {name: 'Supply chain Marketing', pdf: 'supplychainmkt.pdf'},
    {name: 'html', pdf: 'assets/html.pdf'}
  ]
  public path;
  public selectFunction(event) {
    console.log(event.target.value);
    this.selected = this.managments.filter(x=>x.name == event.target.value);
    this.path = "assets/" + this.selected[0].name + ".pdf";
  }

  // public show = false;
  // public showFun = false;
  // public showFunction() {
  //   this.showFun = true;
  // }
  // public selectedMgnt(index) {
  //   this.show = true;
  //   console.log(index);
  //   console.log(this.managments[index].pdf);
  //   this.mgntSrc = this.managments[index].pdf
  // }
}
