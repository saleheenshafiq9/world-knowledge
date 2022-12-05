import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Capital } from './capitals';
import { Observable } from 'rxjs';
import 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class CapitalsService {

  private _url: string = '/assets/data/capitals.json';

  constructor(private http: HttpClient) { }
  
  getCapitals(): Observable<Capital[]> {
    return this.http.get<Capital[]>(this._url);
  }
}
