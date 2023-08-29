import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LogoComponent } from './logo/logo.component';
import { ActionsComponent } from './actions/actions.component';
import { ContentComponent } from './content/content.component';
import { BgComponent } from './bg/bg.component';
import { FooterItemComponent } from './footer-item/footer-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LogoComponent,
    ActionsComponent,
    ContentComponent,
    BgComponent,
    FooterItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
