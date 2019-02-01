import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroisComponent } from './pages/herois/herois.component';
import { ViloesComponent } from './pages/viloes/viloes.component';
import { IdentidadessecretasComponent } from './pages/identidadessecretas/identidadessecretas.component';


  

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroisComponent,
    ViloesComponent,
    IdentidadessecretasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
