import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContryTableComponent } from './components/contry-table/contry-table.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    ContryTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class CountriesModule { }
