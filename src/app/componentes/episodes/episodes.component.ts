import { Component, OnInit } from '@angular/core';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  allEpisodes :any = [''];
  constructor(private episodes: EpisodesService){ }


  ngOnInit(): void {
    this.episodes.getAllEpisodes()
    .subscribe( episode => {
      this.allEpisodes= episode;
      console.log(this.allEpisodes); 
    })
    
  }

  

}
