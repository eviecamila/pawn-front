import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrativeRoutingModule } from './administrative-routing.module';
import { WebsiteModule } from '../website/website.module';
import { AdminComponent } from 'src/app/a_admin/admin/admin.component';
import { AdminIndexComponent } from 'src/app/a_admin/admin/admin-index/admin-index.component';
import { FormsModule } from '@angular/forms';
import { AbcComponent, AbcCardComponent, AbcCardContainerComponent, AbcModalComponent } from 'src/app/a_admin/admin/abc/abc.component';
import { NewItemComponent } from 'src/app/a_admin/item/new-item/new-item.component';

import { ItemCardComponent, ItemsComponent } from 'src/app/a_admin/admin/abc/items/items.component';
import { ClientCardComponent, ClientsComponent } from 'src/app/a_admin/admin/abc/clients/clients.component';
import { EmployeeCardComponent, EmployeeComponent } from 'src/app/a_admin/admin/abc/employee/employee.component';
import { SellingsComponent } from 'src/app/a_admin/admin/abc/sellings/sellings.component';
import { PawnCardComponent, PawnComponent, PawnPayComponent } from 'src/app/a_admin/admin/abc/pawn/pawn.component';
import { QuotationsComponent } from 'src/app/a_admin/admin/abc/quotations/quotations.component';
import { CreateModalComponent } from 'src/app/a_admin/admin/abc/components/modal-new';
import { EditItemComponent } from 'src/app/a_admin/item/edit-item/edit-item.component';
import { PendingQuotationsComponent } from 'src/app/a_admin/admin/quotations/quotations.component';
import { AuthorizeItemComponent } from 'src/app/a_admin/item/authorize-item/authorize-item.component';
import { EditQuotationComponent } from 'src/app/a_admin/item/quotation/quotation.component';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
@NgModule({
  declarations: [
    AdminComponent,
    AdminIndexComponent,
    AbcComponent,
    ClientsComponent,
    EmployeeComponent,
    ItemsComponent,
    SellingsComponent,
    PawnComponent,
    AbcCardComponent,
    AbcCardContainerComponent,
    AbcModalComponent,
    EmployeeCardComponent,
    ClientCardComponent,
    CreateModalComponent,
    QuotationsComponent,
    PendingQuotationsComponent,
    ItemCardComponent,
    EditItemComponent,
    NewItemComponent,
    AuthorizeItemComponent,
    EditQuotationComponent,
    PawnCardComponent,
    PawnPayComponent
  ],
  imports: [
    CommonModule,
    AdministrativeRoutingModule,
    WebsiteModule,
    FormsModule,
    SharedModule,
    AuthModule
    // Items,
    // adminItems
  ]
})
export class AdministrativeModule { }
