import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './views/login/login.component';
import { CadastroCreateComponent } from './componentes/cadastro/cadastro-create/cadastro-create.component';
import { CadastroDeleteComponent } from './componentes/cadastro/cadastro-delete/cadastro-delete.component';
import { CadastroTabelaComponent } from './componentes/cadastro/cadastro-tabela/cadastro-tabela.component'; 
import { CadastroUpdateComponent } from './componentes/cadastro/cadastro-update/cadastro-update.component'; 
import { CadastroReadComponent } from './componentes/cadastro/cadastro-read/cadastro-read.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CadastroCreateComponent,
    CadastroDeleteComponent,
    CadastroTabelaComponent,
    CadastroUpdateComponent,
    CadastroReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
