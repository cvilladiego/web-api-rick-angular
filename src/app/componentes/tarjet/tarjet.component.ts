import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjet',
  templateUrl: './tarjet.component.html',
  styleUrls: ['./tarjet.component.scss']
})
export class TarjetComponent {
  @Input() characters:any[] =[];
  paginaActual:number = 1;

}
