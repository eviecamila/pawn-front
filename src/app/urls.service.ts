import { Injectable } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { GuardGuard } from './guard/guard.guard';
const r: Routes=[
  {
    path: 'index/',
    loadChildren: () => import('./components/index/index.component').then(x => x.IndexComponent),
    canActivate: [GuardGuard]

  },
  {
    path: '',
    redirectTo: 'index/',
    pathMatch: 'full',

  },
  {
    path: '**',
    redirectTo: 'index/',
    pathMatch: 'full',

  }
]
@Injectable({
  providedIn: 'root'
})
export class UrlsService {

  constructor() { }

}
