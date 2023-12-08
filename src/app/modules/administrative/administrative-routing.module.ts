import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcComponent } from 'src/app/a_admin/admin/abc/abc.component';
import { ClientsComponent } from 'src/app/a_admin/admin/abc/clients/clients.component';
import { EmployeeComponent } from 'src/app/a_admin/admin/abc/employee/employee.component';
import { ItemsComponent } from 'src/app/a_admin/admin/abc/items/items.component';
import { PawnComponent } from 'src/app/a_admin/admin/abc/pawn/pawn.component';
import { SellingsComponent } from 'src/app/a_admin/admin/abc/sellings/sellings.component';
import { AdminIndexComponent } from 'src/app/a_admin/admin/admin-index/admin-index.component';
import { AdminComponent } from 'src/app/a_admin/admin/admin.component';
import { LoginComponent } from 'src/app/a_admin/admin/auth/login/login.component';
import { PendingQuotationsComponent } from 'src/app/a_admin/admin/quotations/quotations.component';
import { NewClientComponent } from 'src/app/a_admin/client/new-client/new-client.component';
import { EditItemComponent } from 'src/app/a_admin/item/edit-item/edit-item.component';
import { NewItemComponent } from 'src/app/a_admin/item/new-item/new-item.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
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
        path: 'abc',
        component: AbcComponent,
        children: [
          {
            path: '',
            redirectTo: '/404',
            pathMatch: 'full',
          },
          {
            path: 'client',
            component: ClientsComponent,
          },
          {
            path: 'items',
            component: ItemsComponent
          },
          {
            path: 'pawn',
            component: PawnComponent
          },
          {
            path: 'employee',
            component: EmployeeComponent,
          },
          {
            path: 'sellings',
            component: SellingsComponent,
          },
          {
            path: '**',
            redirectTo: '',
          }
        ]
      },

      {
        path: 'quotations',
        component: PendingQuotationsComponent,
      },
      {
        path: 'newitem',
        component: NewItemComponent,
      },
      {
        path: 'newclient',
        component: NewClientComponent,
      },
      {
        path: 'edititem',
        component: EditItemComponent,
      },
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
