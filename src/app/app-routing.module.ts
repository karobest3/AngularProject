import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRouterModule } from './admin/admin-router.module';


import { HomePageComponent } from './user/components/home-page/home-page.component';
import { ProductsComponent } from './user/components/products/products.component';
import { MainComponent } from './user/layout/main/main.component';


const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'products', component: ProductsComponent }
    ]
  }
];

@NgModule({
  imports: [
    AdminRouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
