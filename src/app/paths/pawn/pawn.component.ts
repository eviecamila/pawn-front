import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PawnService } from 'src/app/services/pawn.service';
// Pruebas tontas unitarias
import { HiworldService } from 'src/app/services/hiworld.service';
@Component({
  selector: 'app-pawn',
  templateUrl: './pawn.component.html',
  styleUrls: ['./pawn.component.css'],
  providers: [PawnService]
})
export class PawnComponent implements OnInit {
  constructor(
    private pawn: PawnService,
    private hi: HiworldService,
  ) { }
  monto: number = 0;
  tasa: number = 0;
  plazo: number = 0;
  resultado: number = 0;

  tiposItem!: any;
  ngOnInit(): void {
    this.pawn.tiposItem().subscribe(data => { this.tiposItem = data; console.log(this.tiposItem); });
    this.hi.wasa().subscribe(data => { console.log(data) });
  }
  calcularCuota() {
    // Convierte la tasa de interés de porcentaje a fracción decimal
    const tasaDecimal = this.tasa / 100;

    // Calcula la cuota mensual
    const cuota = (this.monto * tasaDecimal) / (1 - Math.pow(1 + tasaDecimal, -this.plazo));

    // Actualiza el resultado
    this.resultado = cuota;
    console.log(this.resultado);
  }
}
