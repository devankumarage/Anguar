import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  //{ path:  '', redirectTo:  'accounts', pathMatch:  'full' },
  {
    path:  'accounts',
    component:  AccountListComponent
  },
  {
    path:  'products',
    component:  ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
