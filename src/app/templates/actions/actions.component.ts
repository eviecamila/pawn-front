import { Component, OnInit, Input } from '@angular/core';
import { DarkModeService } from 'src/app/dark-mode.service';
@Component({
  selector: 'app-actions',
  template:`
  <div [ngClass]="{
  'dark-mode': darkModeService.isDarkModeEnabled() | async,
  'light-mode': !(darkModeService.isDarkModeEnabled() | async)
}"><a href="{{url}}"><ng-content></ng-content></a></div>
  `,

  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  @Input() content!: string;
  @Input() url!: string;
<<<<<<< HEAD
  constructor(public darkModeService: DarkModeService) {}
  toggleDarkMode() {this.darkModeService.toggleDarkMode();}
=======
  constructor() { }

>>>>>>> 4a9cf046296e9e5e92bd1bfb93e9304b8bb3fd7b
  ngOnInit(): void {
  }

}
