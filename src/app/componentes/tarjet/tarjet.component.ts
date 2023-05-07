import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tarjet',
  templateUrl: './tarjet.component.html',
  styleUrls: ['./tarjet.component.scss']
})
export class TarjetComponent {
  @Input() characters:any[] =[];
  paginaActual:number = 1;

  constructor(private router:Router){

  }

  showCharacter(character:any){
   this.router.navigate(['/character', character]);
  }

}
