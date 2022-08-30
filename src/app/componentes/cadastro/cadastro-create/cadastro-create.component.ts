import { Component, OnInit } from '@angular/core';
import { User } from 'moduls/user';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css']
})
export class CadastroCreateComponent implements OnInit {


  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
  }

  userModel = new User ();
  receberDados() {
    console.log(this.userModel)
    this.cadastroService.cadastro(this.userModel).subscribe((response) =>{
      console.log(response)
    })

    alert("Você foi cadastrado(a) com sucesso");
  }

}
