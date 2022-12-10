import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/persona.model';
import { PersonaService } from '../../servicios/persona.service';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  
public usuario:Usuario |undefined;
public editUsuario:Usuario |undefined;
 

  constructor(public personaService:PersonaService) { }

  ngOnInit(): void {

    this.getUser();
  }

  public getUser(): void {
    this.personaService. getUser().subscribe({
      next:(response:Usuario) =>{
      this.usuario = response;
      },
      error:(error:HttpErrorResponse) =>{
        alert(error.message);
      }

    })
   
  }

}
