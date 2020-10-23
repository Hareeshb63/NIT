import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionsComponent } from './fashions/fashions.component';
import { FootwareComponent } from './footware/footware.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchComponent } from './search/search.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { PdfnavComponent } from './pdfnav/pdfnav.component';
import { ExcelexporComponent } from './excelexpor/excelexpor.component';
import { PdfmakeComponent } from './pdfmake/pdfmake.component';

const routes: Routes =[
    {path:'home', component: HomeComponent},
    {path:'electronics', component: ElectronicsComponent},
    {path:'fashions', component: FashionsComponent},
    {path:'footware', component:FootwareComponent},
    {path:'search/:category', component: SearchComponent},
    {path:'categories',component:CategorylistComponent},
    {path:'categories/:id',component:ProductlistComponent,
            children:[
                {path:'details/:id',component:ProductdetailsComponent}
            ]},
    {path:'pdfnav', component:PdfnavComponent},
    
    {path:'excel', component:ExcelexporComponent},
    {path:'pdfmake', component:PdfmakeComponent},
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'**', component: NotfoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}