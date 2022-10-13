import { Component } from '@angular/core';
import { Country } from '../../models/country.model';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html'
})
export class ForCountryComponent {

  error: boolean = false;
  countries: Country[] = [];

  constructor( private countryService: CountryService ) { }

  search( term: string ): void {
    if (term) {
      this.error = false;
      this.countryService.searchCountry(term)
        .subscribe( (countries: Country[]) => {
          this.countries = countries;
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
  }
}
