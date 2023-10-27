import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/dark-mode.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  modoOscuro:boolean = false;

  isSidebarOpen = false;
  getMode(){return !this.darkModeService.isDark?"Claro":"Oscuro";}
  constructor(private darkModeService: DarkModeService) {}
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    // this.modoOscuro.isChecked = !this.modoOscuro.isChecked; // Cambia el estado del modo oscuro
  }
}
