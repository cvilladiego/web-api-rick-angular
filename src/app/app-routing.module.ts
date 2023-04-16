import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CharactersComponent } from './componentes/characters/characters.component';

const routes: Routes = [
  {path:'characters', component:CharactersComponent, title:'Characters'},
  {path:'**', component:CharactersComponent, title:'Characters'},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
