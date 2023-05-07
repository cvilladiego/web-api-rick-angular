import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  personaje:any = {};
  episodes:any[] = [];
  constructor(private router:ActivatedRoute, private character:CharactersService){
    router.params.subscribe(  params =>{
      const { id } = params;
      this.getSingleCharacter(id);
      console.log(id);
    })

  }


  getSingleCharacter(id:number){
    this.character.viewSingleCharacter(id)
    .subscribe( character => {
      this.personaje = character;
      this.episodes = this.personaje.episode;
      console.log(this.personaje);
      console.log(this.episodes);
    })

  }

}
