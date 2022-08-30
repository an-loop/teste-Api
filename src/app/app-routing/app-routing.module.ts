import { Component, NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { CadastroCreateComponent } from '../componentes/cadastro/cadastro-create/cadastro-create.component';
import { CadastroDeleteComponent } from '../componentes/cadastro/cadastro-delete/cadastro-delete.component';
import { CadastroReadComponent } from '../componentes/cadastro/cadastro-read/cadastro-read.component';
import { CadastroTabelaComponent } from '../componentes/cadastro/cadastro-tabela/cadastro-tabela.component'; 
import { CadastroUpdateComponent } from '../componentes/cadastro/cadastro-update/cadastro-update.component'; 
import { HomeComponent } from '../views/home/home.component';
import { LoginComponent } from '../views/login/login.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "cadastro", component: CadastroCreateComponent},
  {path: "deletar", component: CadastroDeleteComponent},
  {path: "atualizar", component: CadastroUpdateComponent},
  {path: "tabela", component: CadastroTabelaComponent},
  {path: "ler", component: CadastroReadComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
