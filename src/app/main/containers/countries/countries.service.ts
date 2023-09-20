import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getCountriesList(): Observable<any[]> {
    return this.http.get<any[]>(
      'http://universities.hipolabs.com/search?country=United+States'
    );
  }
}
