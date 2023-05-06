import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InformationComponent } from './componentes/information/information.component';
import { CharactersComponent } from './componentes/characters/characters.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './componentes/footer/footer.component';
import { EpisodesComponent } from './componentes/episodes/episodes.component';
import { SearchComponent } from './componentes/search/search.component';
import { FormsModule } from '@angular/forms';
import { TarjetComponent } from './componentes/tarjet/tarjet.component';
import { LoadingComponent } from './componentes/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InformationComponent,
    CharactersComponent,
    FooterComponent,
    EpisodesComponent,
    SearchComponent,
    TarjetComponent,
    LoadingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
