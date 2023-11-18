import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrativeRoutingModule } from './administrative-routing.module';
import { WebsiteModule } from '../website/website.module';
import { AdminComponent } from 'src/app/a_admin/admin/admin.component';
import { AdminIndexComponent } from 'src/app/a_admin/admin/admin-index/admin-index.component';
import { AdminTopBarComponent } from 'src/app/a_admin/admin/nav/top-bar/top-bar.component';
import { LoginComponent } from 'src/app/a_admin/auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { AbcComponent } from 'src/app/a_admin/admin/abc/abc.component';
@NgModule({
  declarations: [
    AdminComponent,
    AdminIndexComponent,
    AdminTopBarComponent,
    LoginComponent,
    AbcComponent
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
