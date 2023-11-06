import { Component } from '@angular/core';

@Component({
  selector: 'app-szavazas',
  templateUrl: './szavazas.component.html',
  styleUrls: ['./szavazas.component.css']
})
export class SzavazasComponent {
  minoseg: number = 5;
  gyorsasag: number = 5;
  ar = 5;

  onSubmit() {
    console.log(`Minőség: ${this.minoseg}, Gyorsaság: ${this.gyorsasag},  Ár: ${this.ar}`);
  }
}
