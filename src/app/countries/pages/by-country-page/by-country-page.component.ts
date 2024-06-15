import { CountriesService } from './../../services/countries.service';
import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

 constructor(private countrieService : CountriesService ){}

 @Input()
  countries?:Country[] = []

searchByCountry(term : string){
  console.log({term});
 console.log("desde country");
  this.countrieService.searchCountry(term).subscribe((countri) => {
  
   this.countries = countri;
    console.log(this.countries);
 })
}

}
