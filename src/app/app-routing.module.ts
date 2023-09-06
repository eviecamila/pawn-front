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
  {path: '',redirectTo: 'index',pathMatch: 'full',},
<<<<<<< HEAD
  {path: 'newaccount',component: NewAccountComponent},
=======
  {path: 'new',component: NewAccountComponent},
>>>>>>> 4a9cf046296e9e5e92bd1bfb93e9304b8bb3fd7b
  {path: 'products',component: ProductsComponent},


  {path: '**',redirectTo: '404',pathMatch: 'full',},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
