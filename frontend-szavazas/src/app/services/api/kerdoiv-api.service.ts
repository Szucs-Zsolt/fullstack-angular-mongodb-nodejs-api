import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KerdoivModel } from './models/kerdoiv-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KerdoivAPIService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

	constructor(private http: HttpClient) { }

  getAllKerdoiv(): Observable<KerdoivModel[]> {
    return this.http.get<KerdoivModel[]>("http://localhost:5000/kerdoiv/letoltes/");
  }

}
