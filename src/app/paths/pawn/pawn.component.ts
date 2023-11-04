import { Component, OnInit } from '@angular/core';
import { PawnService } from 'src/app/services/pawn.service';

@Component({
  selector: 'app-pawn',
  templateUrl: './pawn.component.html',
  styleUrls: ['./pawn.component.css'],
  providers: [PawnService],
})
export class PawnComponent implements OnInit {
  tipoItem: string = 'Selecciona un tipo de ítem';
  dias!: number;
  monto!: number;
  tiposItem: any[] = []; // Inicializa como un arreglo vacío

  constructor(private pawn: PawnService) {}

  ngOnInit(): void {
    this.pawn.tiposItem().subscribe((data: any) => {
      this.tiposItem = data.tipos_item; // Asigna el arreglo de tipos de item
    });
  }

  calcularCuota() {
    // Aquí puedes realizar los cálculos según tus necesidades
    // Por ejemplo, calcula la cuota de empeño con la lógica deseada
    const tasaDeInteres = this.getTasaDeInteresPorTipoItem(this.tipoItem);
    // Realiza tus cálculos aquí con la tasa de interés y otros datos
    const interes = (this.monto) * (tasaDeInteres*.01) * (this.dias / 365),
    importe=this.monto+interes;

    // tasa_decimal = cache['tasa'] / 100.0 * 3 * 1.1

    // Puedes mostrar la cuota en la consola o en una variable, según tus necesidades
    console.log(`Capital inicial  : ${Number(this.monto.toFixed(2))}`);
    console.log(`Capital final    : ${Number(importe.toFixed(2))}`);
    console.log(`Intereses totales: ${Number(interes.toFixed(2))}`);
  }

  getTasaDeInteresPorTipoItem(tipo: string): number {
    // Puedes implementar una función que obtenga la tasa de interés según el tipo de item
    // Recorre this.tiposItem para encontrar el objeto que coincide con el tipo
    const tipoEncontrado = this.tiposItem.find((item) => item.tipo === tipo);
    return tipoEncontrado ? tipoEncontrado.tasa_interes : 0;
  }
}
