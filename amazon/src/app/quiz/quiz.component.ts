import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.sets1 = this.sets.filter(x => x.Q);
    alert(this.sets1[0].Q);
    console.log(this.sets1);

  }

  public sets1;
  public sets = [
    { Q: "Question1", a: "Ans11", b: "Ans21", c: "Ans31" },
    { Q: "Question2", a: "Ans12", b: "Ans22", c: "Ans32" },
    { Q: "Question3", a: "Ans13", b: "Ans23", c: "Ans33" },
    { Q: "Question4", a: "Ans14", b: "Ans24", c: "Ans34" },
    { Q: "Question5", a: "Ans15", b: "Ans25", c: "Ans35" },
    { Q: "Question6", a: "Ans16", b: "Ans26", c: "Ans36" },

  ]
  public i = 0;

  public nextButton() {
    if (this.i < this.sets.length) {
      this.i++;
      this.sets1 = this.sets[this.i];
      console.log(this.i);
      console.warn(this.sets1);

    }


  }

  public prevButton() {
    if (this.i < this.sets.length) {
      this.i--;
      this.sets1 = this.sets[this.i];
      console.log(this.i);
      console.warn(this.sets1);

    }
  }

}
