import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private  API_URL : string = 'https://restcountries.com/v3.1';

  constructor(private http : HttpClient) { }

  searchCapital(term : string ):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.API_URL}/capital/${term}`)
    .pipe(
      catchError(()=> of([]))
    );
  }

  searchCountry(term : string ): Observable<Country[]>{
 return this.http.get<Country[]>(`${this.API_URL}/name/${term}`)
    .pipe(
      catchError(()=> of([]))
    );
  }

  
  searchRegion(term : string ): Observable<Country[]>{
     return this.http.get<Country[]>(`${this.API_URL}/region/${term}`)
    .pipe(
      catchError(()=> of([]))
    );
  }

 searchCountryByAphaCode(code: string): Observable<Country | null>{
  return this.http.get<Country[]>(`${this.API_URL}/alpha/${code}`)
  .pipe(
    map(countries => countries.length > 0 ? countries[0] : null),
    catchError(()=> of(null))
  );
 }

}
