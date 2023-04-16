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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InformationComponent,
    CharactersComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
