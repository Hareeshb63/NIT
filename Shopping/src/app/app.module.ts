import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { loginComponent } from './login.component';
import { addressComponent} from './addess.component';

import { Twoway1Component } from './twoway1/twoway1.component';
import { IfdemoComponent } from './ifdemo/ifdemo.component';
import { TwobindComponent } from './twobind/twobind.component';
import { NgifComponent } from './ngif/ngif.component';
import { IfelsedemoComponent } from './ifelsedemo/ifelsedemo.component';
import { FordemoComponent } from './fordemo/fordemo.component';
import { NeastedComponent } from './neasted/neasted.component';
import { LikesComponent } from './likes/likes.component';
import { TrackComponent } from './track/track.component';
import { ConditionComponent } from './condition/condition.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CartComponent } from './cart/cart.component';
import { KfcComponent } from './kfc/kfc.component';
import { ClassComponent } from './class/class.component';
import { DemostyleComponent } from './demostyle/demostyle.component';
import { FticketComponent } from './fticket/fticket.component';
import { Event1Component } from './event1/event1.component';
import { KeydemoComponent } from './keydemo/keydemo.component';
import { NgForindexComponent } from './ng-forindex/ng-forindex.component'
import { MouseoverComponent } from './mouseover/mouseover.component';
import { Color1Component } from './color1/color1.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { SubmitComponent } from './submit/submit.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Co1productsdataComponent } from './co1productsdata/co1productsdata.component';
import { Co1filterComponent } from './co1filter/co1filter.component';
import { Com1produtsdataComponent } from './com1produtsdata/com1produtsdata.component';
import { Com1filterComponent } from './com1filter/com1filter.component';
import { Com2productComponent } from './com2product/com2product.component';
import { Com2filterComponent } from './com2filter/com2filter.component';
import { PipesComponent } from './pipes/pipes.component';
import { SentenceCase } from './sentence.pipe';
import { CaptchaService } from './captcha.service';
import { ProductserviceService } from './productservice.service';
import { ProductgetbyservComponent } from './productgetbyserv/productgetbyserv.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { InputstatevalidationComponent } from './inputstatevalidation/inputstatevalidation.component';
import { CustomevalidationComponent } from './customevalidation/customevalidation.component';
import { CountrycodeComponent } from './countrycode/countrycode.component';
import { NestedformComponent } from './nestedform/nestedform.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { BuilderarrayComponent } from './builderarray/builderarray.component';





@NgModule({
  declarations: [
    AppComponent,loginComponent,addressComponent,Twoway1Component,
     IfdemoComponent, TwobindComponent, NgifComponent, IfelsedemoComponent,
      FordemoComponent, NeastedComponent, LikesComponent, TrackComponent,
       ConditionComponent,
       CheckboxComponent,
       CartComponent,
       KfcComponent,
       ClassComponent,
       DemostyleComponent,
       FticketComponent,
       Event1Component,
       KeydemoComponent,
       NgForindexComponent,
       MouseoverComponent,
       Color1Component,
       DragdropComponent,
       SubmitComponent,
       ParentComponent,
       ChildComponent,
       Co1productsdataComponent,
       Co1filterComponent,
       Com1produtsdataComponent,
       Com1filterComponent,
       Com2productComponent,
       Com2filterComponent,
       PipesComponent,
       SentenceCase,
       ProductgetbyservComponent,
       TemplateformComponent,
       FormvalidationComponent,
       InputstatevalidationComponent,
       CustomevalidationComponent,
       CountrycodeComponent,
       NestedformComponent,
       FormbuilderComponent,
       BuilderarrayComponent,
       
      
      
       
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [CaptchaService,ProductserviceService],
  bootstrap: [CartComponent]
})
export class AppModule { }
