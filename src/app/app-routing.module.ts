import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
const routes: Routes = [
  // {
  //   path: 'index/',
  //   loadChildren: () => import('./components/index/index.component').then(x => x.IndexComponent),
  //   canActivate: [GuardGuard]

  // },
  {
    path: 'index',
    component: IndexComponent,
    // canActivate: [GuardGuard]

  },
  {
    path: '404',
    component: NotfoundComponent,

  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',

  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
