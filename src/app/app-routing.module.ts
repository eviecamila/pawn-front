// Base imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// TEMPLATES
import { IndexComponent } from './paths/index/index.component';
import { NotfoundComponent } from './paths/notfound/notfound.component';
import { NewAccountComponent } from './paths/new-account/new-account.component';
import { ProductsComponent } from './paths/products/products.component';
const routes: Routes = [
  {path: 'index',component: IndexComponent,},
  {path: '404',component: NotfoundComponent,},
  {path: 'newaccount',component: NewAccountComponent},
  {path: 'products',component: ProductsComponent},
  {path: '',redirectTo: 'index',pathMatch: 'full',},
  {path: '**',redirectTo: 'index',pathMatch: 'full'},


  {path: '**',redirectTo: '404',pathMatch: 'full',},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
