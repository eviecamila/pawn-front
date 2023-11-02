import { Component, Input } from '@angular/core';
import { DarkModeService } from 'src/app/paths/ventas/services/dark-mode.service';

@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.css']
})
export class ItemcardComponent {
  constructor(public darkModeService: DarkModeService){}
  @Input() icon:string = 'question-diamond-fill';
}
