import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from 'src/app/app.component';
import { TopBarComponent } from 'src/app/templates/top-bar/top-bar.component';
import { LogoComponent } from 'src/app/templates/logo/logo.component';
import { ActionsComponent } from 'src/app/templates/actions/actions.component';
import { ContentComponent } from 'src/app/templates/content/content.component';
import { BgComponent } from 'src/app/templates/bg/bg.component';
import { FooterItemComponent } from 'src/app/templates/footer-item/footer-item.component';
import { IndexComponent } from 'src/app/paths/index/index.component';
import { NotfoundComponent } from 'src/app/paths/notfound/notfound.component';
import { PataComponent } from 'src/app/templates/pata/pata.component';
import { VentasComponent } from 'src/app/paths/ventas/ventas.component';
import { ImgComponent } from 'src/app/templates/img/img.component';
import { LoginComponent } from 'src/app/paths/login/login.component';
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
@NgModule({
  declarations: [
    WebsiteComponent,
    TopBarComponent,
    LogoComponent,
    ActionsComponent,
    ContentComponent,
    BgComponent,
    FooterItemComponent,
    IndexComponent,
    NotfoundComponent,
    PataComponent,
    VentasComponent,
    ImgComponent,
    LoginComponent,
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
    LinkComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    WebsiteRoutingModule,
    FormsModule
  ],
})
export class WebsiteModule { }
