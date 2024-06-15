import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

 public country? : Country | null;

  constructor(private activateRoute: ActivatedRoute,
            private countrisService : CountriesService,
            private router : Router
          
  ){}
  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap( ({id}) => this.countrisService.searchCountryByAphaCode(id) )
    )
    .subscribe( country => {
       if(!country)this.router.navigateByUrl('');
       return this.country = country;
    })

   /*  this.activateRoute.params.subscribe( ({id}) => {
      this.countrisService.searchCountryByAphaCode(id)
      .subscribe((country)=> {
        console.log({country});
      })
    })*/
  }


}
