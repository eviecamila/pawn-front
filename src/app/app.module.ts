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
import { IndexComponent } from './components/index/index.component';
import { TemplateComponent } from './components/template/template.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PataComponent } from './templates/pata/pata.component';

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
    TemplateComponent,
    NotfoundComponent,
    PataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
