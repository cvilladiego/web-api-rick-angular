import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  

  constructor(private http: HttpClient) {
    console.log('servicio iniciado');

   }

   getAllCharacters(){
    return this.http.get('https://rickandmortyapi.com/api/character');
    
   }

   searchOneCharacter( character:string){
    return this.http.get(`https://rickandmortyapi.com/api/character/?name=${character}`)

   }
}
