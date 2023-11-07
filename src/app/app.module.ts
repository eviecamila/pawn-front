import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteModule } from './modules/website/website.module';
import { AdministrativeModule } from './modules/administrative/administrative.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebsiteModule,
    AdministrativeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
