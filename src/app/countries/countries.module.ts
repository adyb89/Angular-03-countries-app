import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForCapitalComponent } from './pages/for-capital/for-capital.component';
import { ForCountryComponent } from './pages/for-country/for-country.component';
import { ForContinentComponent } from './pages/for-continent/for-continent.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';



@NgModule({
  declarations: [
    ForCapitalComponent,
    ForCountryComponent,
    ForContinentComponent,
    SeeCountryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ForCapitalComponent,
    ForCountryComponent,
    ForContinentComponent,
    SeeCountryComponent
  ]
})
export class CountriesModule { }
