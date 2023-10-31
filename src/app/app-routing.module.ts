import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'web', // Redirigir a la ruta "web" por defecto
    pathMatch: 'full'
  },
  {
    path: 'web',
    loadChildren: () => import('./modules/website/website.module').then(m => m.WebsiteModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/administrative/administrative.module').then(m => m.AdministrativeModule)
  },
  // Otras rutas
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
