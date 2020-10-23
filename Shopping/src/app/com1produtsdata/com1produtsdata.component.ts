import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com1produtsdata',
  templateUrl: './com1produtsdata.component.html',
  styleUrls: ['./com1produtsdata.component.css']
})
export class Com1produtsdataComponent{
  public products=[
    {name:'Tv', price:29000, category:'Electronics'},
    {name:'Mobile', price:13000, category:'Electronics'},
    {name:'Peter England', price:2670, category:'Cloths'},
    {name:'Raymonds', price:2099, category:'Cloths'},
    {name:'RoadSter', price:4999, category:'Cloths'},
  ];

    public selectCategory='All';

    public pAllCount=this.products.length;
    public pElectronicsCount=this.products.filter(x=>x.category== 'Electronics').length;
    public pClothsCount=this.products.filter(x=>x.category== 'Cloths').length;

    public bindFun(eve){
      this.selectCategory= eve;
    }
}
