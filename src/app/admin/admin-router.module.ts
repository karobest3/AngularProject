import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component'

import { ProductComponent } from './product/product.component';
import { MainComponent } from './layout/main/main.component';
import { HomePageComponent } from './home-page/home-page.component';



const routes: Routes = [
  {
    path: 'admin', component: MainComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'customers', component: ListCustomerComponent },
      { path: ':category/:brand', component: ProductComponent }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AdminRouterModule { }
