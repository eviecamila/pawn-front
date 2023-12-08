import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiposItemComponent } from './templates/administrative/tipos-item/tipos-item.component';
import { WebsiteComponent } from './a_website/website/website.component';
import { setupTestingRouter } from '@angular/router/testing';
import { SetupComponent } from './paths/setup/setup.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'setup', // Redirigir a la ruta "web" por defecto
    pathMatch: 'full'
  },
  {
    path: 'web',
    loadChildren: () => import('./modules/website/website.module').then(m => m.WebsiteModule)
  },
  {
    path: 'setup',
    component: SetupComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/administrative/administrative.module').then(m => m.AdministrativeModule)
  },
  {
    path: '**',
    redirectTo: 'setup', // Redirigir a la ruta "web" por defecto
    pathMatch: 'full'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
