import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private apiURL = "http://hansel-001-site1.atempurl.com/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.apiURL + '/Persona/GetPersonas')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(persona:any): Observable<Persona> {
    return this.httpClient.post<Persona>(this.apiURL + '/Persona/InsertPersonas', JSON.stringify(persona), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:any): Observable<Persona> {
    return this.httpClient.get<Persona>(this.apiURL + '/Persona/GetPersonasById/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, persona:any): Observable<Persona> {
    return this.httpClient.put<Persona>(this.apiURL + '/Persona/UpdatePersona/' +id, JSON.stringify(persona), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  createPhoto(persona:any) {
    return this.httpClient.post(this.apiURL + '/Persona/InsertPersonas', persona);
  }

  delete(id:number){
    return this.httpClient.delete<Persona>(this.apiURL + '/Persona/DeletePersonas/'+id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
