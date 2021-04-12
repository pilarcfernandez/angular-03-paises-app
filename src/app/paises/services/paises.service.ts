import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/paises.interface';
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2/';  
  private httpParams = new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population')

  constructor(private http: HttpClient) { }

  buscarPorPais(termino: string): Observable<Pais[]> {
    const url = `${this.apiUrl}name/${termino}`
    return this.http.get<Pais[]>(url, { params: this.httpParams });    
  }

  buscarPorCapital(termino: string): Observable<Pais[]> {
    const url = `${this.apiUrl}capital/${termino}`
    return this.http.get<Pais[]>(url, { params: this.httpParams });    
  }

  obtenerPais(code: string): Observable<Pais> {
    const url = `${this.apiUrl}alpha/${code}`
    return this.http.get<Pais>(url);
  }

  buscarPorRegion(termino: string): Observable<Pais[]> {    
    const url = `${this.apiUrl}region/${termino}`
    return this.http.get<Pais[]>(url, { params: this.httpParams }).pipe(tap(console.log));    
  }


}
