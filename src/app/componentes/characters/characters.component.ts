
import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';



@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  Allcharacters: any = [];
  paginaActual:number = 1;
  constructor(private characters: CharactersService){}



  ngOnInit(): void {
    console.log('componente inicalizado')
    this.characters.getAllCharacters()
    .subscribe( character =>{
     
      this.Allcharacters = character;
      console.log(this.Allcharacters);
    })   
  }

}
