import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './templates/top-bar/top-bar.component';
import { LogoComponent } from './templates/logo/logo.component';
import { ActionsComponent } from './templates/actions/actions.component';
import { ContentComponent } from './templates/content/content.component';
import { BgComponent } from './templates/bg/bg.component';
import { FooterItemComponent } from './templates/footer-item/footer-item.component';
import { IndexComponent } from './paths/index/index.component';
import { NotfoundComponent } from './paths/notfound/notfound.component';
import { PataComponent } from './templates/pata/pata.component';
import { NewAccountComponent } from './paths/new-account/new-account.component';
import { ProductsComponent } from './paths/products/products.component';
import { ImgComponent } from './templates/img/img.component';
import { FrameComponent } from './templates/p/products/frame/frame.component';
import { CardComponent } from './templates/p/products/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
