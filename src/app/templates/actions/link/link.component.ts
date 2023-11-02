import { Component, Input } from '@angular/core';
import { DarkModeService } from 'src/app/paths/ventas/services/dark-mode.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  constructor(public darkModeService: DarkModeService){}
  @Input() href: string = '';
}
