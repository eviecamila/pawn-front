import { Component, OnInit} from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // modoOscuro:boolean = this.getModeBit();
  isSidebarOpen = false;
  getModeBit(){return !this.darkModeService.isDark}
  getMode(){return this.getModeBit()?"Claro":"Oscuro";}
  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {

  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    // this.modoOscuro.isChecked = !this.modoOscuro.isChecked; // Cambia el estado del modo oscuro
  }
}
