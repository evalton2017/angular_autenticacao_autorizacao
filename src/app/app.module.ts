import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LoginModule, CadastroPjModule, CadastroPjRoutingModule} from './autenticacao'
import {AppRoutingModule} from './app-routing.module';
import {LoginRoutingModule} from './autenticacao/login/login-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { CadastroPfModule } from './autenticacao/cadastro-pf';
import { CadastroPfRoutingModule } from './autenticacao/cadastro-pf/cadastro-pf-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FuncionarioModule } from './funcionario';
import { FuncionarioRoutingModule } from './funcionario/components/funcionario-routing.module';
import { AdminModule, AdminRoutingModule } from './admin';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule, 
    LoginRoutingModule,
    //modulos material
    MatToolbarModule,
    MatIconModule,    
    FlexLayoutModule,
    FuncionarioModule,
    FuncionarioRoutingModule,
 
    CadastroPjModule,
    CadastroPjRoutingModule,
    CadastroPfRoutingModule,
    CadastroPfModule,
    AdminModule,
    AdminRoutingModule,

    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
