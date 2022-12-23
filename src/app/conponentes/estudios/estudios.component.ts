import { NgForOfContext } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Educacion } from "src/app/model/educacion";
import { EducacionService } from "src/app/servicios/educacion.service";


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
 
  public educaciones:Educacion[]=[];
  public editEducacion: Educacion | undefined;
  public deleteEducacion :Educacion | undefined;
  
  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
    this.getEducaciones();
    
  }

  public getEducaciones(): void {
    this.educacionService. getEducacion().subscribe({
      next:(response:Educacion[]) =>{
      this.educaciones = response;
      },
      error:(error:HttpErrorResponse) =>{
        alert(error.message);
      }

    })
   
  }

  public onOpenModal(mode:  String, educacion? :Educacion) : void{
    const container= document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');

    if(mode==='add'){
      button.setAttribute('data-target', '#addEducacionModal');

  } else if(mode==='delete'){
    this.deleteEducacion=educacion;
    button.setAttribute('data-target','#deleteEducacionModal');

  }else if(mode==='edit'){
  this.editEducacion=educacion;
  button.setAttribute('data-target','#editEducacionModal');
  
  }
  container?.appendChild(button);
  button.click();

 }
 public onAddEducacion(addForm: NgForm):void{
  document.getElementById('add-educacion-form')?.click();
  this.educacionService.addEducacion(addForm.value).subscribe({
    next:(response :Educacion)=> {
      console.log(response);
      this.getEducaciones();
      addForm.reset();
    },

    error:(error:HttpErrorResponse)=>{
    alert(error.message);
    addForm.reset();
    }
  
  })
 }
 public onUpdateEducacion(educacion: Educacion){
  this.editEducacion=educacion;
  document.getElementById('add-educacion-form')?.click();
  this.educacionService.updateEducacion(educacion).subscribe({
    next:(response :Educacion)=> {
      console.log(response);
      this.getEducaciones();
     
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  })
 }

 public onDeleteEducacion(idEdu: number):void{
  
  this.educacionService.deleteEducacion(idEdu).subscribe({
    next:(response:void) => {
      console.log(response);
      this.getEducaciones();
     
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  })
 }

}