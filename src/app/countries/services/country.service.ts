import { HttpClient, HttpParams } from '@angular/common/http';
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
    return this.http.get<Country[]>(url, { params: this.params });
  }
  
  searchCountryByCapital( term: string ): Observable<Country[]> {
    const url: string = `${this.baseUrl}/capital/${term}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }

  searchCountryByCode( term: string ): Observable<Country> {
    const url: string = `${this.baseUrl}/alpha/${term}`;
    return this.http.get<Country>(url);
  }
  searchCountryByContinent( term: string ): Observable<Country[]> {
    const url: string = `${this.baseUrl}/region/${term}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }

  get params(): HttpParams {
    return new HttpParams()
      .set('fields', 'name,capital,flag,alpha2Code,population');
  }
}
