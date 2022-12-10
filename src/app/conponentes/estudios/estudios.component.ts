import { NgForOfContext } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Educacion } from "src/app/model/educacion";
import { EducacionService } from "src/app/servicios/educacion.service";


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  public educaciones:Educacion[]=[];

  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
    this.getEducaciones();
    
  }

  public getEducaciones():void{
    this.educacionService.getEducacion().subscribe(
     (Response:Educacion[]) =>{
      this.educaciones=Response;
      console.log(this.educaciones);
      }
    // error:(error:HttpErrorResponse) =>{
     //   alert(error.message);
     // }

    )
  }
}
