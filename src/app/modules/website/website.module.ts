import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from '../../app.component';
import { TopBarComponent } from '../../templates/top-bar/top-bar.component';
import { LogoComponent } from '../../templates/logo/logo.component';
import { ActionsComponent } from '../../templates/actions/actions.component';
import { ContentComponent } from '../../templates/content/content.component';
import { BgComponent } from '../../templates/bg/bg.component';
import { FooterItemComponent } from '../../templates/footer-item/footer-item.component';
import { IndexComponent } from '../../paths/index/index.component';
import { NotfoundComponent } from '../../paths/notfound/notfound.component';
import { PataComponent } from '../../templates/pata/pata.component';
import { VentasComponent } from '../../paths/ventas/ventas.component';
import { ImgComponent } from '../../templates/img/img.component';
import { LoginComponent } from '../../paths/login/login.component';
import { SidebarComponent } from '../../templates/sidebar/sidebar.component';
import { ProfilePictureComponent } from '../../templates/profile-picture/profile-picture.component';
import { SwitchDarkModeComponent } from '../../templates/switch-dark-mode/switch-dark-mode.component';
import { MenuComponent } from '../../administrative/menu/menu.component';
import { WebsiteComponent } from 'src/app/a_website/website/website.component';
import { CardComponent } from '../../templates/p/products/card/card.component';
import { PawnComponent } from '../../paths/pawn/pawn.component';
import { InvestComponent } from '../../paths/invest/invest.component';


import { WebsiteRoutingModule } from './website-routing.module';
import { FaqComponent } from 'src/app/paths/faq/faq.component';
import { FocusablecardComponent } from 'src/app/templates/cuincard/focusablecard/focusablecard.component';
import { ItemcardComponent } from 'src/app/templates/cuincard/itemcard/itemcard.component';
import { LinkComponent } from 'src/app/templates/actions/link/link.component';
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
    WebsiteRoutingModule
  ],
})
export class WebsiteModule { }
