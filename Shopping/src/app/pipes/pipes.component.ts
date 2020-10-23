import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent{

public msg = 'welCoMe to TYpeScriPT';
public price= 765134.7871;
public price2= 0.565000;
public dates= new Date();


public data =[
  {id:11,name:"john",},
  {id:12,name:"markk"}
];


public employees=[
  {name:'jonny',designation:'Developer'},
  {name:'Rockyy',designation:'Manager'},
  {name:'Kissho',designation:'Manager'},
  {name:'Ram',designation:'Developer'},
];
public designation= 'Developer';
public inviteMeeting={
  'Developer':'Meeting at 10 AM',
  'Manager': 'Meeting at 12.20PM'
}

}
