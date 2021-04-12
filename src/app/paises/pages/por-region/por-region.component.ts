import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button: {
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent  {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = ''; 
  paises: Pais[] = [];

  constructor(private paisesSvc: PaisesService) {}

  getbuttonCSS(region: string) {
    return (region === this.regionActiva) ? 'btn-primary': 'btn-outline-primary';
  }

  activarRegion(region: string) {
    if (this.regionActiva !== region) {
      this.paises = [];
      this.paisesSvc.buscarPorRegion(region).subscribe(paises => this.paises = paises);
    }    
  }
}
