import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { JspdfComponent } from './jspdf/jspdf.component';
import { AuthGuard } from './auth.guard';
import { QuizComponent } from './quiz/quiz.component';
import { SearchComponent } from './search/search.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategorylistComponent },
  {
    path: 'products/:id', component: ProductlistComponent,
    children: [{ path: 'productdetails/:id', component: ProductdetailsComponent }]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard] },
  { path: 'pdf', component: JspdfComponent },
  { path: 'quize', component: QuizComponent },
  { path: 'search', component: SearchComponent },
  { path: 'admin', component: AdminComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
