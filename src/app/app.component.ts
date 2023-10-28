import { Component, OnInit } from '@angular/core';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    // Check a condition (e.g., user preference) to determine if dark mode should be enabled.
    const shouldEnableDarkMode = true; // Replace with your logic
    this.darkModeService.toggleDarkMode();
  }
 toggle(){

    var a: DarkModeService = DarkModeService.getInstance();

    a.toggleDarkMode();
  }

}
