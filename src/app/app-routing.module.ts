import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForCapitalComponent } from './countries/pages/for-capital/for-capital.component';
import { ForContinentComponent } from './countries/pages/for-continent/for-continent.component';
import { ForCountryComponent } from './countries/pages/for-country/for-country.component';
import { SeeCountryComponent } from './countries/pages/see-country/see-country.component';

const routes: Routes = [
    { path: '', component: ForCountryComponent, pathMatch: 'full' },
    { path: 'continent', component: ForContinentComponent },
    { path: 'capital', component: ForCapitalComponent },
    { path: 'country/:id', component: SeeCountryComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule {}