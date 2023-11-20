import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcComponent } from 'src/app/a_admin/admin/abc/abc.component';
import { AdminIndexComponent } from 'src/app/a_admin/admin/admin-index/admin-index.component';
import { AdminComponent } from 'src/app/a_admin/admin/admin.component';
import { LoginComponent } from 'src/app/a_admin/auth/login/login.component';
import { NewItemComponent } from 'src/app/a_admin/item/new-item/new-item.component';
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
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'abc',
        children: [
          {
            path: '',
            component: AbcComponent
          },
          {
            path: '**',
            redirectTo: '',
          }
        ]
      },

    ]

  },
  {
    path: 'newitem',
    component: NewItemComponent,
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
