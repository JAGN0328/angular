import { Component, OnInit } from '@angular/core';


interface personajes{
  name: string;
  imagen: String;
}

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
   

  constructor() { }

  ngOnInit(): void {
  }

}
