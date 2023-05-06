import { Component } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(private onecharacter: CharactersService){

  }

  character:string = '';
  searchCaracters:any[] = [];
  paginaActual:number = 1;
  loading!:boolean;

  searchCharacter(character:string){
    this.loading = true;
    console.log(character);
    this.onecharacter.searchOneCharacter( character )
    .subscribe( (data:any) => {
      //console.log(data.results);
      this.searchCaracters = data.results;
      this.loading = false;
      console.log(this.searchCaracters);
    });

  }


}
