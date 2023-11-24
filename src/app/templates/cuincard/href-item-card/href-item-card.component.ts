import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-href-item-card',
  templateUrl: './href-item-card.component.html',
  styleUrls: ['./href-item-card.component.css']
})
export class HrefItemCardComponent {
  @Input() icon: string = 'question-diamond-fill';

  @Input() href!: string;

  constructor() { }
}
