import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component'
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';



const routes: Routes = [
  { path: 'admin' , component: MainComponent,children: [
    {path: 'admin' , component: HomePageComponent},
    {path:'customers',component:ListCustomerComponent}
  ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [HomePageComponent, HeaderComponent, FooterComponent, MainComponent]
})
export class AdminRouterModule { }
