import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private episodes:HttpClient) {
    console.log('servicio de epsidios iniciado');
   }

   getAllEpisodes(){
    return this.episodes.get('https://rickandmortyapi.com/api/episode');
   }
}
