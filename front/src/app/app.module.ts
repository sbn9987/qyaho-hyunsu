import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { QrscanComponent } from './components/Qrscan/qrscan.component';
import { GeneratorComponent } from './components/generator/generator.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import {NgQrScannerModule } from 'angular2-qrscanner';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { JwtModule } from '@auth0/angular-jwt';
import { BusinessComponent } from './components/business/business.component';
import { BusinessloginComponent } from './components/businesslogin/businesslogin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    GeneratorComponent,
    QrscanComponent,
    BusinessComponent,
    BusinessloginComponent
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlashMessagesModule,
    NgxQRCodeModule,
    NgQrScannerModule,
    TooltipModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('id_token');
        }
      }
    })
  ],
  providers: [ValidateService, AuthService, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
