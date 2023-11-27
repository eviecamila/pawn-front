import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrativeRoutingModule } from './administrative-routing.module';
import { WebsiteModule } from '../website/website.module';
import { AdminComponent } from 'src/app/a_admin/admin/admin.component';
import { AdminIndexComponent } from 'src/app/a_admin/admin/admin-index/admin-index.component';
import { AdminTopBarComponent } from 'src/app/a_admin/admin/nav/top-bar/top-bar.component';
import { LoginComponent } from 'src/app/a_admin/auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { AbcComponent, AbcCardComponent, AbcCardContainerComponent, AbcModalComponent } from 'src/app/a_admin/admin/abc/abc.component';
import { NewItemComponent } from 'src/app/a_admin/item/new-item/new-item.component';

import { ItemsComponent } from 'src/app/a_admin/admin/abc/items/items.component';
import { ClientCardComponent, ClientsComponent } from 'src/app/a_admin/admin/abc/clients/clients.component';
import { EmployeeCardComponent, EmployeeComponent } from 'src/app/a_admin/admin/abc/employee/employee.component';
import { SellingsComponent } from 'src/app/a_admin/admin/abc/sellings/sellings.component';
import { PawnComponent } from 'src/app/a_admin/admin/abc/pawn/pawn.component';
import { QuotationsComponent } from 'src/app/a_admin/admin/abc/quotations/quotations.component';
@NgModule({
  declarations: [
    AdminComponent,
    AdminIndexComponent,
    AdminTopBarComponent,
    LoginComponent,
    AbcComponent,
    NewItemComponent,
    ClientsComponent,
    EmployeeComponent,
    ItemsComponent,
    SellingsComponent,
    PawnComponent,
    QuotationsComponent,
    AbcCardComponent,
    AbcCardContainerComponent,
    AbcModalComponent,
    EmployeeCardComponent,
    ClientCardComponent
  ],
  imports: [
    CommonModule,
    AdministrativeRoutingModule,
    WebsiteModule,
    FormsModule
    // Items,
    // adminItems
  ]
})
export class AdministrativeModule { }
