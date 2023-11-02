import { Component, OnInit, Input } from '@angular/core';
import { DarkModeService } from 'src/app/paths/ventas/services/dark-mode.service';
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',

  styleUrls: [
    './actions.component.css',
    // '../../../../src/styles.css',
  ]
})
export class ActionsComponent implements OnInit {
  @Input() content!: string;
  @Input() url!: string;
  constructor(public darkModeService: DarkModeService) {}
  toggleDarkMode() {this.darkModeService.toggleDarkMode();}
  ngOnInit(): void {
  }

}
