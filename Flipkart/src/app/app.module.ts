import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FashionsComponent } from './fashions/fashions.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FootwareComponent } from './footware/footware.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { QuillComponent } from './quill/quill.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { DataService } from './data.service';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { PdftestComponent } from './pdftest/pdftest.component';
import { PdfnavComponent } from './pdfnav/pdfnav.component';
import { SafepipePipe } from './safepipe.pipe';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModelService } from "./model.service";

import { ExcelService } from "./excel.service";
import { ExcelexporComponent } from './excelexpor/excelexpor.component';
import { PdfmakeComponent } from './pdfmake/pdfmake.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FashionsComponent,
    ElectronicsComponent,
    FootwareComponent,
    NotfoundComponent,
    SearchComponent,
    QuillComponent,
    CategorylistComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    PdftestComponent,
    PdfnavComponent,
    SafepipePipe,
    ExcelexporComponent,
    PdfmakeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    NgbModule,
    HttpClientModule
  ],
  providers: [DataService,ModelService,ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
