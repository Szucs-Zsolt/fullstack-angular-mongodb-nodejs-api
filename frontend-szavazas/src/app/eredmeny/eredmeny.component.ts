import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KerdoivAPIService } from '../services/api/kerdoiv-api.service';

@Component({
  selector: 'app-eredmeny',
  templateUrl: './eredmeny.component.html',
  styleUrls: ['./eredmeny.component.css']
})
export class EredmenyComponent implements OnInit {
  szavazasEredmenye: any = []

  constructor(private service: KerdoivAPIService) { }

  ngOnInit(): void {
    this.service.szavazasEredmenye()
      .subscribe(data => {this.szavazasEredmenye = data;});
    }

}
