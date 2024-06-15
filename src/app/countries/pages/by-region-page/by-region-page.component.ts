import { Component, Input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
constructor(private countrieService : CountriesService){}
 @Input()
  region?:Country[] = []


searchByRegion(term : string){
  console.log({term});
 console.log("desde country");
  this.countrieService.searchRegion(term).subscribe((region) => {
  
   this.region = region;
    console.log(this.region);
 })
}
}
