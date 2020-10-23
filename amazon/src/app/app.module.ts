import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ConsumeComponent } from './consume/consume.component';
import { ApidataService } from './apidata.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { Demo1Component } from './demo1/demo1.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service'
// Material Component
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialdemoComponent } from './materialdemo/materialdemo.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { EmployeesComponent } from './employees/employees.component';
import { JspdfComponent } from './jspdf/jspdf.component';
import { ExcelService } from './excel.service';
import { AuthGuard } from './auth.guard';
import {TokenInterceptorService} from './token-interceptor.service';
import { QuizComponent } from './quiz/quiz.component';
import { SearchComponent } from './search/search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// image upload
import { FileUploader } from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    CategorylistComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    NotfoundComponent,
    HomeComponent,
    ConsumeComponent,
    Demo1Component,
    MaterialdemoComponent,
    RegisterComponent,
    LoginComponent,
    EmployeesComponent,
    JspdfComponent,
    QuizComponent,
    SearchComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,
    // Material
    MatNativeDateModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    Ng2SearchPipeModule,
    // 
    FileUploader
    
    

  ],
  providers: [ApidataService,AuthService,AuthGuard,ExcelService,
    { provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
