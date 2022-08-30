import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public titulo!: string;
  public texto!: string;
  public tituloDestaque!: string;
  public textoDestaque!: string

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    let dados =`
    
    Nome: ${form.value.nome}
    Email: ${form.value.email}
    Senha: ${form.value.senha}`;

    alert(`Bem-vindo(a) a Game Mania, ${form.value.email}! aqui você encontrará os melhores produtos!`)
    console.log(dados);
  }

}
