import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KerdoivAPIService } from '../services/api/kerdoiv-api.service';
import { KerdoivModel } from '../services/api/models/kerdoiv-model';

@Component({
  selector: 'app-szavazas',
  templateUrl: './szavazas.component.html',
  styleUrls: ['./szavazas.component.css']
})
export class SzavazasComponent implements OnInit {
  minoseg: number = 3;
  gyorsasag: number = 3;
  ar = 3;
  marSzavazott: boolean = false;
  osszesLeadottSzavazat: KerdoivModel[] = [];

  constructor(
    private service: KerdoivAPIService,
    private router:Router) { }


  ngOnInit(): void {
    //this.service.getAllKerdoiv()
    //  .subscribe(data => {console.log(data)});

    this.service.getAllKerdoiv()
      .subscribe(data => {this.osszesLeadottSzavazat = data;});
      
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

      //this.router.navigate([this.router.url]);  
      window.location.reload();
  }

  frissit(): void {
    console.log("frissit() lefutott");
    this.router.navigate([this.router.url]);
  }
}
