import { Component} from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li {
      cursor: pointer;
    }`
  ]
})
export class PorPaisComponent {

  termino: string = '';
  error: boolean = false;
  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];
  mostrarSugerencias: boolean = false;
  
  constructor(private paisesService: PaisesService) { }

  buscar(termino: string) {    
    this.termino = termino;
    this.error = false;
    this.paisesService.buscarPorPais(this.termino).subscribe(paisesResp => {
      this.paises = paisesResp;
    }, error => {
      this.paises = [];
      this.error = true;
    })
  }

  sugerencias(termino: string) {
    this.error = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisesService.buscarPorPais(termino).subscribe( paises => {
      this.paisesSugeridos = paises.splice(0,5);
    }, err => {
      this.error = true;
    })
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
    this.mostrarSugerencias = false;
  }
}
