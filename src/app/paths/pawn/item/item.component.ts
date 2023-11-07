import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PawnService } from 'src/app/services/pawn.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class PawnItemComponent implements OnInit {
  item: any = {};

  constructor(
    private _route: ActivatedRoute,
    private pawnService: PawnService,
  ) {}

  ngOnInit(): void {
    this._route.queryParams.subscribe((queryParams) => {
      const itemValue = queryParams['item']; // Obtiene el valor del parámetro "item" desde los parámetros de consulta

      // Regresar a la pantalla principal si no hay parametro
      if (!itemValue) location.href = '/web/pawn';
      // console.log(`Valor del parámetro "item": ${itemValue}`);
      this.pawnService.tipoItem(itemValue).subscribe((data) => {
        // console.log(data);
        this.item=data
        console.log(this.item);
      },
      (error) => location.href = '/web/pawn'
      );
    });
  }
}
