import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireDatabaseModule } from "@angular/fire/database";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './admin/customer/create-customer/create-customer.component';
import { ListCustomerComponent } from './admin/customer/list-customer/list-customer.component';
import { FooterComponent } from './user/layout/footer/footer.component';
import { HeaderComponent } from './user/layout/header/header.component';
import { HomePageComponent } from './user/components/home-page/home-page.component';
import { ProductsComponent } from './user/components/products/products.component';
import { MainComponent } from './user/layout/main/main.component';

import { environment } from "../environments/environment";
import { AdminModule } from "./admin/admin.module";
import { AdminRouterModule } from "./admin/admin-router.module"

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    ListCustomerComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    ProductsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AdminModule,
    // AdminRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
