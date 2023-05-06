
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
  loading!:boolean;
  constructor(private characters: CharactersService){}



  ngOnInit(): void {
    this.loading = true;
    console.log('componente inicalizado')
    this.characters.getAllCharacters()
    .subscribe( character =>{
     
      this.Allcharacters = character;
      this.loading = false;
      console.log(this.Allcharacters);
    })   
  }

}
