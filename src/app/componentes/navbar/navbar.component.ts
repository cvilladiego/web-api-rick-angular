import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showMenu = false;

  toogleMenu(){
    this.showMenu = !this.showMenu;
  }

  showNewWindows(){
    window.open('https://rickandmortyapi.com/');
  }

}
