import { Component, Input, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';
@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  @Input() admin: boolean = false;
  constructor(public darkModeService: DarkModeService) {}
  toggleDarkMode() {this.darkModeService.toggleDarkMode();}
  ngOnInit(): void {
  }

}
