import { Injectable } from '@angular/core';
import { Encabezado } from '../model/encabezado';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncabezadoService {

  private apiServeUrl=environment.apiServerUrl;


  constructor(private http:HttpClient) { }
 
  public getEncabezado():Observable<Encabezado>{
    return this.http.get<Encabezado>(`${this.apiServeUrl}/encabezado/id/1`);    
  }

  public addEncabezado(encabezado:Encabezado):Observable<Encabezado>{
    return this.http.post<Encabezado>(`${this.apiServeUrl}/encabezado/id`,encabezado);
  }

  public deleteEncabezado(encabezado : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServeUrl}/encabezado/delete/${encabezado}`);
  }

  public updateEncabezado(encabezado:Encabezado):Observable<Encabezado>{
    return this.http.put<Encabezado>(`${this.apiServeUrl}/encabezado/update`,encabezado);
  }

  odtenerDatos():Observable<any>{
    return this.http.get("./assets/data/data.json");

  }

}
