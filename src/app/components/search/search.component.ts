import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{

  artists: any[] = [];
  songs: any[] = [];
  loading: boolean;

  constructor(private search:SpotifyService) { }

  buscar(termino:string){

    console.log(termino);
    this.loading=true;
    this.search.getArtists(termino)
        .subscribe((response: any) =>{
          this.artists=response;
          this.songs=response;
          this.loading=false;
      });
  }
}
