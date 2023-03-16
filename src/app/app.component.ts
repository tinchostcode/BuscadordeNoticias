import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listNoticias:any[]=[];
  loading=false;
  constructor(private noticiaService:NoticiaService){

  }
  title = 'noticias';
  buscarNoticias(parametros:any){
    this.loading=true;
    this.listNoticias=[];
    console.log(parametros);
    setTimeout(() => {
      this.noticiaService.getNoticias(parametros).subscribe(data=>{
        this.loading=false;
          console.log(data);
    
        this.listNoticias=data.articles; // adonde va a ir a buscar los datos de la API.articles
        }, error =>{
          console.log(error);
          this.loading=false;
        })
    }, 1000);
  }
}
