import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ForCapitalComponent } from './pages/for-capital/for-capital.component';
import { ForCountryComponent } from './pages/for-country/for-country.component';
import { ForContinentComponent } from './pages/for-continent/for-continent.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    ForCapitalComponent,
    ForCountryComponent,
    ForContinentComponent,
    SeeCountryComponent,
    CountryTableComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ForCapitalComponent,
    ForCountryComponent,
    ForContinentComponent,
    SeeCountryComponent
  ]
})
export class CountriesModule { }
