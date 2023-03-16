import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
@Output() parametrosSelecionados = new EventEmitter<any>();


  categoriaSelecionada='general'
  paisSelecionado='us'
  
  categorias:any[]=[
    {value:'general',nombre:'General'},
    {value:'business',nombre:'Negocios'},
    {value:'entertainment',nombre:'Entretenimiento'},
    {value:'healt',nombre:'Salud'},
    {value:'science',nombre:'Ciencia'},
    {value:'sport',nombre:'Deportes'},
    {value:'technology',nombre:'Tecnologia'},
  ];

  paises:any[]=[
    {value:'ar',nombre:'Argentina'},
    {value:'br',nombre:'Brasil'},
    {value:'fr',nombre:'Francia'},
    {value:'us',nombre:'Estados Unidos'},
    {value:'mx',nombre:'Mexico'},
    {value:'gb',nombre:'Reino Unido'},

    
  ];
buscarNoticia(){
  const parametros={
    categoria:this.categoriaSelecionada,
    pais:this.paisSelecionado}
  this.parametrosSelecionados.emit(parametros)
  }

}

