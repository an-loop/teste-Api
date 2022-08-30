import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../cadastre/cadastro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private httpClient: HttpClient) { }
  url = "http://localhost:3001/login"

cadastro(usuario: User): Observable<any> {
  return this.httpClient.post(this.url,JSON.stringify(usuario),{
    headers: new HttpHeaders ({'Content-Type': 'application/json'}),
    observe: "response"
  })
}

}
