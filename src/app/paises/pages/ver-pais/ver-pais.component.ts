import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/paises.interface';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;

  constructor(private activatedRoute: ActivatedRoute, private paisesService: PaisesService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.paisesService.obtenerPais(id)),
        tap(console.log)
      )
      .subscribe( resp => {
        this.pais = resp
      }
    );


    // this.activatedRoute.params
    //   // Desestructurar params para quedarnos solo con el ID
    //   .subscribe(({id}) => {        
    //     this.paisesService.obtenerPais(id)
    //       .subscribe(pais => {
    //         console.log(pais)
    //       });
    // })
  }

}
