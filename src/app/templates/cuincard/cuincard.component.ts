import { Component, Input } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';
@Component({
  selector: 'app-item-card',
  templateUrl: './cuincard.component.html',
  styleUrls: ['./cuincard.component.css']
})
export class ItemCardComponent {
  constructor(public darkModeService: DarkModeService){}
  @Input() title:string = 'Item';
  @Input() icon:string = 'question-diamond-fill';

}
