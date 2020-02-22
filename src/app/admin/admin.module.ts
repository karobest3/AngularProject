import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../../environments/environment";
import { AdminRouterModule } from "./admin-router.module"
import { HeaderComponent } from './layout/header/header.component'
import { FooterComponent } from './layout/footer/footer.component'
import { ProductComponent } from './product/product.component'
import { HomePageComponent } from './home-page/home-page.component';
import { MainComponent } from './layout/main/main.component';

@NgModule({
  declarations: [
    HeaderComponent, FooterComponent,ProductComponent,MainComponent,HomePageComponent
  ],
  imports: [
    CommonModule,
    AdminRouterModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,


  ]
})
export class AdminModule { }
