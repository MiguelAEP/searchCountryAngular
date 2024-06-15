import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

public countries? : Country [] = []

constructor(private countryService : CountriesService){}

searchByCapital(term : string){
  console.log({term});
 console.log("desde capital");
  this.countryService.searchCapital(term).subscribe((capital) => {
   console.log(capital);
   this.countries = capital;
 })
}



}
