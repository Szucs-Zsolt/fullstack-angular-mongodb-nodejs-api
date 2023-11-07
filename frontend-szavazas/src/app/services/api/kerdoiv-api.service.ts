import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KerdoivModel } from './models/kerdoiv-model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})


export class KerdoivAPIService {
  private apiUrl = "http://localhost:5000"

  constructor(private http: HttpClient) { }

  getAllKerdoiv(): Observable<KerdoivModel[]> {
    const endpointUrl = `${this.apiUrl}/kerdoiv/letoltes/`;
    return this.http.get<KerdoivModel[]>(endpointUrl);
  }
  createOneKerdoiv(minoseg: number, gyorsasag: number, ar: number) {
    const endpointUrl = `${this.apiUrl}/kerdoiv/bekuldes/`;
    let kerdoiv: KerdoivModel = {
      minoseg: minoseg,
      gyorsasag: gyorsasag,
      ar: ar
    };

    let result = this.http.post(endpointUrl, kerdoiv, httpOptions);
    console.log(result);
    return result;
  }

}
