import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IApiResponse } from '../interfaces/iApiResponse';
import { Imovie } from '../interfaces/imovie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // d58aab0d key ombdapi
  private API_URL: string = 'http://www.omdbapi.com/?apikey=d58aab0d';

  constructor( private http:HttpClient) { }
  getMovies( searchTerm:string ): Observable<Imovie[]>{
    return this.http.get<IApiResponse>(`${this.API_URL}&s=${searchTerm}` ).pipe(
      map(Response =>{
        return Response.Search;
      })
    );
  }
}
