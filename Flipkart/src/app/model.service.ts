import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
public modals;
  constructor() { }


  add(modal:any){
    this.modals.push(modal);
  }

  remove(id:string){
    this.modals= this.modals.filter(x=> x.id !==id);
  }

  open(id: string){
    const modal: any= this.modals.filter(x=> x.id=== id)[0];
    return modal.open();
}

close(id: string){
  const modal: any= this.modals.filter(x=> x.id=== id)[0];
    modal.close();
}
}

