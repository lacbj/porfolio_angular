import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user:any = {};//variable agregada antes no habia nada
  
  
  constructor() { }

  ngOnInit(): void {
    
    this.user = JSON.stringify(localStorage.getItem("user"));
    if(!this.user){
      location.href = "/";
    }
    
  }//este metodo agregado antes estaba vacio

 
  logout(){

    localStorage.removeItem("user");
    location.href = "/";
  }//este metodo tambien agregado

}
