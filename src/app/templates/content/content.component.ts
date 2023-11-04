<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
=======
import { Component, Input, OnInit } from '@angular/core';
import { DarkModeService } from '../../paths/ventas/services/dark-mode.service';
>>>>>>> Stashed changes
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()title!:string;
  constructor(public darkModeService: DarkModeService) {}
  toggleDarkMode() {this.darkModeService.toggleDarkMode();}
  ngOnInit(): void {
  }
}
