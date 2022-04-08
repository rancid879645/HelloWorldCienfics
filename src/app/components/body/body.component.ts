import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mostrar:boolean = false;
  dia: number = 0;
  loadData:boolean = false;
  
  email:string = '';

  frase:any = {
    autor: "Galileo Galilei",
    mensaje: "No se puede enseñar nada a un hombre, solo se le puede ayudar a descubrirse a si mismo."
  }

  cientificos:string[] = ["Galileo Galilei", "Marie Curie", "Charles Darwin", "Neil deGrasse Tyson", "Issac Newton"];

  constructor() { }

  ngOnInit(): void {
  }

  changeStyles():string{
    
    if (this.mostrar)
      return 'blue';
    else 
      return 'red';
  }

  inputChange(valor: any){
    this.email = valor;
  }

}
