import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/dark-mode.service';
@Component({
  selector: 'app-pata',
  templateUrl: './pata.component.html',
  styleUrls: ['./pata.component.css']
})
export class PataComponent implements OnInit {

  constructor(public darkModeService: DarkModeService) {}
  toggleDarkMode() {this.darkModeService.toggleDarkMode();}
  ngOnInit(): void {
  }
}
