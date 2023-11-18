import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.css']
})
export class ItemcardComponent {
  // El icono a mostrar, con un valor por defecto.
  @Input() icon: string = 'question-diamond-fill';
  constructor() { }
}
