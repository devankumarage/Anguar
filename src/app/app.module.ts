import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
