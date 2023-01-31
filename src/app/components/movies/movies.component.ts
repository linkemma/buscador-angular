import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { debounceTime, distinct, filter, fromEvent, map, tap } from 'rxjs';
import { Imovie } from 'src/app/interfaces/imovie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:  Imovie[] = [];
  @ViewChild('movieSearchInput', { static: true }) movieSearchInput!: ElementRef
  
  constructor( private movieService: MovieService ){}

  ngOnInit():void {
    fromEvent<Event>(this.movieSearchInput.nativeElement, 'keyup').pipe(
      map((event : Event)=>{
        const searchTerm =  (event.target as HTMLInputElement).value;
        return searchTerm;
      }),
      filter((searchTerm:string)=> searchTerm.length > 3),
      debounceTime(500),
      distinct(),
      tap((searchTerm: string)=> console.log(searchTerm))
      ).subscribe((searchTerm : string)=>{
        this.getMovies(searchTerm);
      });
  }
  getMovies(searchTerm : string) {
    this.movieService.getMovies(searchTerm).subscribe(Imovie => {
      this.movies = Imovie !== undefined ? Imovie = Imovie : [];
    })
  }

}
