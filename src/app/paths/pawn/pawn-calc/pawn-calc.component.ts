import { Component, OnInit } from '@angular/core';
import { PawnService } from 'src/app/services/pawn.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-pawn-calc',
  templateUrl: './pawn-calc.component.html',
  styleUrls: ['./pawn-calc.component.css'],
  providers: [PawnService, CurrencyPipe],
})
export class PawnCalcComponent implements OnInit {
  tipoItem: string = 'Selecciona un tipo de ítem';
  dias!: number;
  monto!: number;
  tiposItem: any[] = [];
  modo!: string;
  modal: boolean = false;
  valid: boolean = false;
  constructor(private pawn: PawnService, public darkModeService: DarkModeService, public currencyPipe: CurrencyPipe) {
    // Suscríbete a los cambios en el servicio darkModeService
    this.darkModeService.isDarkModeEnabled().subscribe((isDarkMode) => {
      // Actualiza la variable modo en función del estado del modo oscuro
      this.modo = !isDarkMode ? 'light' : 'dark';
    });
  }

  ngOnInit(): void {
    this.pawn.tiposItem().subscribe((data: any) => {
      this.tiposItem = data.tipos_item;
    });
  }

  calcularCuota() {
    const tasaDeInteres = this.getTasaDeInteresPorTipoItem(this.tipoItem);
    // Realiza tus cálculos aquí con la tasa de interés y otros datos
    const interes = (this.monto) * (tasaDeInteres * .01) * (this.dias / 365),
      importe = this.monto + interes;
    // tasa_decimal = cache['tasa'] / 100.0 * 3 * 1.1
    // Puedes mostrar la cuota en la consola o en una variable, según tus necesidades
    console.log(`Capital inicial  : ${Number(this.monto.toFixed(2))}`);
    console.log(`Capital final    : ${Number(importe.toFixed(2))}`);
    console.log(`Intereses totales: ${Number(interes.toFixed(2))}`);
    console.log(`Tasa de interes: ${Number(this.getTasaDeInteresPorTipoItem(this.tipoItem).toFixed(2))}`);
  }
  getTasaDeInteresPorTipoItem(tipo: string): number {
    const tipoEncontrado = this.tiposItem.find((item) => item.tipo === tipo);
    return tipoEncontrado ? tipoEncontrado.tasa_interes : 0;
  }
  validateForm() {
    // campos vacios nanai
    return this.tipoItem === 'Selecciona un tipo de ítem' || !this.dias || !this.monto ?
      false : true;
    //  Holdon fake & true
    // mis tuais lesbianas https://www.youtube.com/watch?v=zQELp93xxfo&pp=ygUNZmFrZSBhbmQgdHJ1ZQ%3D%3D
  }
  toggleModal() {
    this.modal = !this.modal;
    if (this.validateForm()) {
      this.calcularCuota();
      this.valid = true;
    }
  }
  hideAlert() { this.modal = false; }
}
