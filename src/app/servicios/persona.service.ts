import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/persona.model';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private apiServeUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getUser():Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiServeUrl}/usuario/id/1`);
  }

  public updateUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.apiServeUrl}/usuario/update`,usuario);
  }
}
