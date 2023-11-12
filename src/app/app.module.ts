import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteModule } from './modules/website/website.module';
import { AdministrativeModule } from './modules/administrative/administrative.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebsiteModule,
    AdministrativeModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
