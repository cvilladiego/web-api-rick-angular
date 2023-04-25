import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  hideComponent : boolean = false;
  constructor(private router:Router){
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        if(event.url === '/episodes'){
          this.hideComponent = true;
        }else{
          this.hideComponent = false;
        }

      }
    })
  }
  


}
