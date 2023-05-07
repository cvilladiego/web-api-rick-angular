import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CharactersComponent } from './componentes/characters/characters.component';
import { EpisodesComponent } from './componentes/episodes/episodes.component';
import { SearchComponent } from './componentes/search/search.component';
import { CharacterComponent } from './componentes/character/character.component';

const routes: Routes = [
  {path:'characters', component:CharactersComponent, title:'Characters'},
  {path:'character/:id', component:CharacterComponent, title:'Detalle de personaje'},
  {path:'episodes', component:EpisodesComponent, title:'Episodes'},
  {path:'search', component:SearchComponent, title:'Search'},
  {path:'**', component:CharactersComponent, title:'Characters'},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
