import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MenuComponent} from './menu/menu.component';
import {OrderComponent} from './order/order.component';


const routes: Routes = [
  {path: 'register' , component:RegisterComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'order', component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
