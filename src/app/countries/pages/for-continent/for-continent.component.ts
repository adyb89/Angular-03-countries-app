import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../../models/country.model';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-continent',
  templateUrl: './for-continent.component.html',
  styleUrls: ['./for-continent.component.css']
})
export class ForContinentComponent {

  continents: string[] = [ 'africa', 'americas', 'asia', 'europe', 'oceania'];
  activeContinent: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService,
              private router: Router 
             ) { }

  activateContinent( continent: string ): void {
    if (continent === this.activeContinent) { return; }

    this.activeContinent = continent;
    this.countries = [];

    this.countryService.searchCountryByContinent(continent)
        .subscribe(countries => this.countries = countries,
              error => this.router.navigateByUrl('/country') );
  }

  classCSS( continent: string ): string {
    return (continent === this.activeContinent) ?
          'btn btn-primary' :
          'btn btn-outline-primary';
  }

}
