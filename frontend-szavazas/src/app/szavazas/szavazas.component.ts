import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { KerdoivAPIService } from '../services/api/kerdoiv-api.service';

@Component({
  selector: 'app-szavazas',
  templateUrl: './szavazas.component.html',
  styleUrls: ['./szavazas.component.css']
})
export class SzavazasComponent implements OnInit{
  minoseg: number = 3;
  gyorsasag: number = 3;
  ar = 3;
  marSzavazott: boolean = false;

  constructor(private service: KerdoivAPIService) { }

  ngOnInit(): void {
    //this.service.getAllKerdoiv()
    //  .subscribe(data => {console.log(data)});

    this.service.marSzavazott()
      .subscribe(x=> { 
        this.marSzavazott = x.szavazott;
        console.log("this.marSzavazott?", this.marSzavazott);
      });      
  }

  
  onSubmit() {
    //console.log(`Minőség: ${this.minoseg}, Gyorsaság: ${this.gyorsasag},  Ár: ${this.ar}`);
    this.service.createOneKerdoiv(this.minoseg, this.gyorsasag, this.ar)
      .subscribe(kerdoiv=> console.log(kerdoiv));
  }
}
