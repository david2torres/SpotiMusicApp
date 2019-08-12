import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent{

  artist:any = {};
  loadingArtist: boolean;
  topTracks: any [] = [];

  constructor(private activatedRoute:ActivatedRoute, private spotifyService:SpotifyService) {
      this.loadingArtist = true;
      this.activatedRoute.params.subscribe(params =>{
        this.getArtist(params['id']);
        this.getTopTracks(params['id']);
      })
  }

  getArtist(id:string){
    this.loadingArtist = true;
    this.spotifyService.getArtist(id)
        .subscribe(response => {
            console.log(response);
            this.artist = response;
            this.loadingArtist = false;
        });
  }

  getTopTracks(id: string){
    this.spotifyService.getTopTracks(id)
        .subscribe(response => {
          this.topTracks = response;
          console.log(response);
        })
  }
}
