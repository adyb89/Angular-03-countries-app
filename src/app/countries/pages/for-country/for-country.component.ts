import { Component, TemplateRef } from '@angular/core';
import { map } from 'rxjs';
import { Country } from '../../models/country.model';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styleUrls: ['./for-country.component.css']
})
export class ForCountryComponent {

  error: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  searchTerm: string = '';

  constructor( private countryService: CountryService ) { }

  search( term: string ): void {
    if (term) {
      this.error = false;
      this.countryService.searchCountry(term)
        .subscribe( (countries: Country[]) => {
          this.countries = countries;
          this.suggestedCountries = [];
        },
        err => {
          this.error = true;
          this.countries = [];
        }
        );
    }
  }

  suggestions( term: string ): void {
    this.error = false; 
    this.searchTerm = term;

    this.countryService.searchCountry(term)        
        .subscribe( names => this.suggestedCountries = names.splice(0, 5),
          error => this.suggestedCountries = [] );
  }

  searchSuggested( term: string ): void {
    this.search(term);
  }
}
