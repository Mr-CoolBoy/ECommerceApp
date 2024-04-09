import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './UserServiceComponent/login/login.component';
import { SignUpComponent } from './UserServiceComponent/sign-up/sign-up.component';
import { HomeComponent } from './UserServiceComponent/home/home.component';
import { ProductsComponent } from './ProductServiceComponent/products/products.component';
import { OrdersComponent } from './OrderServiceComponent/orders/orders.component';


const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignUpComponent},
  {path:"home", component:HomeComponent},
  {path:"products", component:ProductsComponent},
  {path:"orders", component:OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
