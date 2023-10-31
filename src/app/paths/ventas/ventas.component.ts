import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-products',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  constructor(public darkModeService: DarkModeService) {}

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  pico() {
    console.log('pico() method called');
    this.toggleDarkMode();
    this.darkModeService.isDarkModeEnabled().subscribe((isDarkMode) => {
      console.log('Is Dark Mode Enabled:', isDarkMode);
    });
  }


  ngOnInit(): void {
    // You can use the service and its methods here if needed.
  }
}
