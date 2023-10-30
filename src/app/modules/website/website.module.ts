import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdministrativeModule } from '../../modules/administrative/administrative.module';

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
import { NewAccountComponent } from '../../paths/new-account/new-account.component';
import { ProductsComponent } from '../../paths/products/products.component';
import { ImgComponent } from '../../templates/img/img.component';
import { LoginComponent } from '../../paths/login/login.component';
import { SidebarComponent } from '../../templates/sidebar/sidebar.component';
import { ProfilePictureComponent } from '../../templates/profile-picture/profile-picture.component';
import { SwitchDarkModeComponent } from '../../templates/switch-dark-mode/switch-dark-mode.component';
import { MenuComponent } from '../../administrative/menu/menu.component';
import { WebsiteComponent } from 'src/app/a_website/website/website.component';
import { RouterModule } from '@angular/router';
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
    NewAccountComponent,
    ProductsComponent,
    ImgComponent,
    LoginComponent,
    SidebarComponent,
    ProfilePictureComponent,
    SwitchDarkModeComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    RouterModule.forChild([ // Define rutas específicas para este módulo
  {path: 'web/**', component: WebsiteComponent},


  // {path: '**',redirectTo: '404',pathMatch: 'full',},
      // Otras rutas del módulo
    ]),
  ],
})
export class WebsiteModule { }
