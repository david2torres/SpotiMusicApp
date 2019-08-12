import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('SERVICIO CREADO');
   }

   getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCXiD6OUlegteTUzUY9p9APNMYzfnZOLXXrIuZoMWg4BZE3m8XtwUOoqh8kvHkTQtlk5O0Wc0hQBbmz1SY'
    });

    return this.http.get(url, {headers});
   }

   getNewReleases(){
      return this.getQuery('browse/new-releases')
      .pipe( map(response=>{
          return response['albums'].items;
      }));
   }

   getArtists(termino:string){
    return this.getQuery(`search?q=${termino}&type=track%2Cartist&limit=15`)
      .pipe(map(response =>{
        return response['artists'].items;
      }));
   }

   getArtist(id:string){
    return this.getQuery(`artists/${id}`);
      // .pipe(map(response => response['artists'].items));
   }

   getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(response => response['tracks']));
   }
}
