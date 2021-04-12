import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  error: boolean = false;
  paises: Pais[] = [];
  
  constructor(private paisesService: PaisesService) { }

  buscar(termino: string) {    
    this.termino = termino;
    this.error = false;
    this.paisesService.buscarPorCapital(this.termino).subscribe(paisesResp => {
      this.paises = paisesResp;
    }, error => {
      this.paises = [];
      this.error = true;
    })
  }

  sugerencias(termino: string) {
    this.error = false;
    
  }

}
