import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../models/country.model';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html'
})
export class SeeCountryComponent implements OnInit {

country!: Country;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params
        .pipe( 
          switchMap( ( { id } ) => this.countryService.searchCountryByCode( id )) 
        )
        .subscribe( (country) => {
          this.country = country;
        },
        error => this.router.navigateByUrl('/country'));        
          
  }

}
