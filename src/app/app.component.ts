import { Component, OnInit } from '@angular/core';
import { CharactersService } from './services/characters.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rick-api';
  characters:any = [];


  constructor(private characterservice:CharactersService){
    console.log('El componente se ha creado');


  }

  ngOnInit(): void {
    // console.log('componenente inicializado');
    // this.characterservice.getAllCharacters().subscribe(character => {
     
    //   this.characters = character;
    //   console.log(this.characters);
    // });
   
    
    
  }
}
