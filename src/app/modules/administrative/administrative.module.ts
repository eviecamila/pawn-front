import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrativeRoutingModule } from './administrative-routing.module';
import { WebsiteModule } from '../website/website.module';
import { IndexComponent } from 'src/app/paths/index/index.component';
import { AdminComponent } from 'src/app/a_admin/admin/admin.component';
import { AdminIndexComponent } from 'src/app/a_admin/admin/admin-index/admin-index.component';
import { AdminTopBarComponent } from 'src/app/a_admin/admin/nav/top-bar/top-bar.component';
import { Items } from 'src/app/templates/top-bar/top-bar.component';
import { adminItems } from 'src/app/templates/top-bar/top-bar.component';
@NgModule({
  declarations: [
    AdminComponent,
    AdminIndexComponent,
    AdminTopBarComponent
  ],
  imports: [
    CommonModule,
    AdministrativeRoutingModule,
    WebsiteModule,
    // Items,
    // adminItems
  ]
})
export class AdministrativeModule { }
