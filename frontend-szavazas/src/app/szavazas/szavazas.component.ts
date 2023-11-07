import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { KerdoivAPIService } from '../services/api/kerdoiv-api.service';

@Component({
  selector: 'app-szavazas',
  templateUrl: './szavazas.component.html',
  styleUrls: ['./szavazas.component.css']
})
export class SzavazasComponent implements OnInit{
  minoseg: number = 5;
  gyorsasag: number = 5;
  ar = 5;

  constructor(private service: KerdoivAPIService) { }

  ngOnInit(): void {
    this.service.getAllKerdoiv()
      .subscribe(data => {console.log(data)});
  }
  onSubmit() {
    //console.log(`Minőség: ${this.minoseg}, Gyorsaság: ${this.gyorsasag},  Ár: ${this.ar}`);
    this.service.createOneKerdoiv(this.minoseg, this.gyorsasag, this.ar)
      .subscribe(kerdoiv=> console.log(kerdoiv));
  }
}
