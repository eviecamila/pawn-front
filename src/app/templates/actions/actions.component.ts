import { Component, OnInit, Input } from '@angular/core';
import { DarkModeService } from 'src/app/dark-mode.service';
@Component({
  selector: 'app-actions',
  template:`
  <div [ngClass]="{
  'darker-mode': darkModeService.isDarkModeEnabled() | async,
  'light-mode': !(darkModeService.isDarkModeEnabled() | async)
}"><a href="{{url}}"><ng-content></ng-content></a></div>
  `,

  styleUrls: ['./actions.component.css','../../../../src/styles.css']
})
export class ActionsComponent implements OnInit {
  @Input() content!: string;
  @Input() url!: string;
  constructor(public darkModeService: DarkModeService) {}
  toggleDarkMode() {this.darkModeService.toggleDarkMode();}
  ngOnInit(): void {
  }

}
