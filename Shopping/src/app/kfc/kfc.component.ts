import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kfc',
  templateUrl: './kfc.component.html',
  styleUrls: ['./kfc.component.css']
})
export class KfcComponent{
  public selectedStep= 'info';
  public userName= '';
  public mealName= '';
  public adonWings= false;
  public adonKrusher= false;
  public adonName= '';
  public mealCost= 0;
  public adonCost= 0;
  public totalAmount=0;

  public selectedWizardStep(obj){
    this.selectedStep= obj.target.value;
    if(this.selectedStep=='summary'){
      this.billSummary();
    }
  }
  
  public billSummary(){
    this.adonName='';
    this.selectedStep='summary';
    // radio
    if(this.mealName=='burger'){
      this.mealCost= 100;
    }
    if(this.mealName=='roller'){
      this.mealCost= 50;
    }

    // checkbox
    if(this.adonWings==true){
      this.adonName+='Hot Wings<br>'
      this.adonCost=99;
      this.mealCost=this.mealCost + this.adonCost;
    }
    if(this.adonKrusher==true){
      this.adonName+='Krusher<br>'
      this.adonCost=149;
      this.mealCost=this.mealCost + this.adonCost;
    }
    this.totalAmount=this.mealCost;
  }
}


