import { Component, Input } from '@angular/core';
import { DarkModeService } from 'src/app/paths/ventas/services/dark-mode.service';

@Component({
  selector: 'app-focusablecard',
  templateUrl: './focusablecard.component.html',
  styleUrls: ['./focusablecard.component.css']
})
export class FocusablecardComponent {
  constructor(public darkModeService: DarkModeService){}
}
