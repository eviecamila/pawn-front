import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../../dark-mode.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css', '../../../styles.css'],
})
export class TopBarComponent implements OnInit {
  constructor(public darkModeService: DarkModeService) {}

  isMobile: boolean = false;
  isDesktop: boolean = true;
  isMenuOpen: boolean = false; // Variable para controlar el estado del menú

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Hay una X?',this.isMenuOpen)
  }


  closeMenu() {
    this.isMenuOpen = false;
  }

  ngOnInit() {
    this.detectScreenWidth();
    window.addEventListener('resize', () => this.detectScreenWidth());
  }

  detectScreenWidth() {
    this.isMobile = window.innerWidth <= 768; // Ajusta el ancho según tus necesidades
    this.isDesktop = !this.isMobile;
  }
}
