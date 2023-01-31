import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from 'src/app/interfaces/imovie';

@Component({
  selector: 'app-card-movies',
  templateUrl: './card-movies.component.html',
  styleUrls: ['./card-movies.component.css']
})
export class CardMoviesComponent implements OnInit {
  @Input('movie') movie!: Imovie;

  ngOnInit(): void{
    console.log(this.movie);
  }

  getImagen(){
    return this.movie.Poster !== 'N/A' ? this.movie.Poster : 'http://via.placeholder.com/400';
  }
}
