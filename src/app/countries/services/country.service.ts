import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl: string = environment.apiUrl;

  constructor( private http:HttpClient ) { }

  searchCountry( term: string ): Observable<Country[]> {
    const url: string = `${this.baseUrl}/name/${term}`;
    return this.http.get<Country[]>(url);
  }
  
  searchCountryByCapital( term: string ): Observable<Country[]> {
    const url: string = `${this.baseUrl}/capital/${term}`;
    return this.http.get<Country[]>(url);
  }
}
