import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../../dark-mode.service';
import { ActionsComponent } from '../actions/actions.component';
// import { DarkModeService } from 'angular-dark-mode';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css',
  '../../../styles.css',
]
})
export class TopBarComponent implements OnInit {
  constructor(public darkModeService: DarkModeService) {}
  toggleDarkMode() {this.darkModeService.toggleDarkMode();}
  ngOnInit(): void {
  }

}
