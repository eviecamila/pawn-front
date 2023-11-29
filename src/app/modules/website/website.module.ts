import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from 'src/app/app.component';
import { TopBarComponent } from 'src/app/templates/top-bar/top-bar.component';
import { LogoComponent } from 'src/app/templates/logo/logo.component';
import { ActionsComponent } from 'src/app/templates/actions/actions.component';
import { ContentComponent } from 'src/app/templates/content/content.component';
import { FooterItemComponent } from 'src/app/templates/footer-item/footer-item.component';
import { IndexComponent } from 'src/app/paths/index/index.component';
import { NotfoundComponent } from 'src/app/paths/notfound/notfound.component';
import { PataComponent } from 'src/app/templates/pata/pata.component';
import { VentasComponent } from 'src/app/paths/ventas/ventas.component';
import { ImgComponent } from 'src/app/templates/img/img.component';
import { SidebarComponent } from 'src/app/templates/sidebar/sidebar.component';
import { ProfilePictureComponent } from 'src/app/templates/profile-picture/profile-picture.component';
import { SwitchDarkModeComponent } from 'src/app/templates/switch-dark-mode/switch-dark-mode.component';
import { MenuComponent } from 'src/app/administrative/menu/menu.component';
import { WebsiteComponent } from 'src/app/a_website/website/website.component';
import { CardComponent } from 'src/app/templates/p/products/card/card.component';
import { PawnComponent } from 'src/app/paths/pawn/pawn.component';
import { InvestComponent } from 'src/app/paths/invest/invest.component';


import { WebsiteRoutingModule } from './website-routing.module';
import { FaqComponent } from 'src/app/paths/faq/faq.component';
import { FocusablecardComponent } from 'src/app/templates/cuincard/focusablecard/focusablecard.component';
import { ItemcardComponent } from 'src/app/templates/cuincard/itemcard/itemcard.component';
import { LinkComponent } from 'src/app/templates/actions/link/link.component';
import { FormsModule } from '@angular/forms';
import { PawnCalcComponent } from 'src/app/paths/pawn/pawn-calc/pawn-calc.component';
import { ItemlistComponent } from 'src/app/paths/pawn/itemlist/itemlist.component';
import { PawnItemComponent } from 'src/app/paths/pawn/item/item.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { QrScannerComponent } from 'src/app/templates/qr-scanner/qr-scanner.component';
import { CotizacionComponent } from 'src/app/templates/website/cotizacion/cotizacion.component';
import { RegisterClientComponent } from 'src/app/templates/website/register-client/register-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TiposItemComponent } from 'src/app/templates/administrative/tipos-item/tipos-item.component';
import { CollapsibleMenuComponent } from 'src/app/templates/collapsible-menu/collapsible-menu.component';
import { HrefItemCardComponent } from 'src/app/templates/cuincard/href-item-card/href-item-card.component';

@NgModule({
  declarations: [
    WebsiteComponent,
    TopBarComponent,
    LogoComponent,
    ActionsComponent,
    ContentComponent,
    FooterItemComponent,
    IndexComponent,
    NotfoundComponent,
    PataComponent,
    VentasComponent,
    ImgComponent,
    SidebarComponent,
    ProfilePictureComponent,
    SwitchDarkModeComponent,
    MenuComponent,
    CardComponent,
    PawnComponent,
    InvestComponent,
    FaqComponent,
    ItemcardComponent,
    FocusablecardComponent,
    LinkComponent,
    PawnCalcComponent,
    ItemlistComponent,
    PawnItemComponent,
    QrScannerComponent,
    CotizacionComponent,
    RegisterClientComponent,
    TiposItemComponent,
    CollapsibleMenuComponent,
    HrefItemCardComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    WebsiteRoutingModule,
    FormsModule,
    NgxScannerQrcodeModule,
    ReactiveFormsModule,
  ],
  exports: [
    PataComponent,
    FooterItemComponent,
    TopBarComponent,
    WebsiteComponent,
    ContentComponent,
    LogoComponent,
    SwitchDarkModeComponent,
    // FocusablecardComponent
    ItemcardComponent,
    HrefItemCardComponent,
    QrScannerComponent

  ],
})
export class WebsiteModule { }
