import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminIndexComponent } from 'src/app/a_admin/admin/admin-index/admin-index.component';
import { AdminComponent } from 'src/app/a_admin/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
      },
      {
        path: 'index',
        component: AdminIndexComponent,
        children: [

        ]
      }
    ]
  },
  // {
  //   path: 'pawn',
  //   children: [
  //     {
  //       path: '',
  //       component: PawnComponent,
  //     },
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrativeRoutingModule { }
