import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo!: string;
  public texto!: string;
  public tituloDestaque!: string;
  public textoDestaque!: string

  constructor() { }

  onSubmit(form: NgForm) {
    let dados = `
    Nome: ${form.value.nome}
    Email: ${form.value.email}`;

    alert(`Seu Cadastro foi realizado com suscesso! Seja bem vindo(a) ${form.value.nome}`)
    console.log(dados)
  }

  ngOnInit(): void {
  }

}

