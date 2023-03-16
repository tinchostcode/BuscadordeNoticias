
//Modulos
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

//componentes 
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoNoticiasComponent,
    NavbarComponent,
    SpinnerComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule, //form
    HttpClientModule, //http
   NgxPaginationModule // paginacion
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
