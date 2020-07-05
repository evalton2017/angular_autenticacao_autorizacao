import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {LoginModule, CadastroPjModule, CadastroPjRoutingModule} from './autenticacao'
import {AppRoutingModule} from './app-routing.module';
import {LoginRoutingModule} from './autenticacao/login/login-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LoginModule, 
    LoginRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,

    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
