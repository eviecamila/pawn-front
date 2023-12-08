import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: [
    './top-bar.component.css',
    '../../../styles.css'
  ],
})



export class TopBarComponent implements OnInit {
  @Input() modo!: string

  @Input() admin: boolean = false
  @Input() isAuth!: boolean
  constructor(
    private auth: AuthService,
    public darkModeService: DarkModeService) {
    this.darkModeService.isDarkModeEnabled().subscribe((isDarkMode) => {
      // Actualiza la variable modo en función del estado del modo oscuro
      this.modo = !isDarkMode ? 'light' : 'dark';
    });
  }

  isMobile: boolean = false;
  isDesktop: boolean = true;
  isMenuOpen: boolean = false; // Variable para controlar el estado del menú

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Hay una X?', this.isMenuOpen)
  }


  closeMenu() {
    this.isMenuOpen = false;
  }

  ngOnInit() {
    this.detectScreenWidth();
    window.addEventListener('resize', () => this.detectScreenWidth());
    // Retrasar la apertura de la barra lateral para la animación
    setTimeout(() => {
      this.openSidebar();
    }, 400); // Cambia el valor según tus necesidades
    console.log('en la topbar dice que es' + this.isAuth)
  }

  detectScreenWidth() {
    this.isMobile = window.innerWidth <= 1000; // Ajusta el ancho según tus necesidades
    this.isDesktop = !this.isMobile;
    if (this.isDesktop) {
      this.closeMenu();
    }
  }
  getAdminItems() { return adminItems }
  getItems() { return Items }
  openSidebar() {
    // Obtener el elemento de la barra lateral
    let x: HTMLElement | null = document.querySelector('.sidebar');

    // Verificar si x no es nulo antes de intentar agregar una clase
    if (x !== null) {
      x.classList.add('sidebar-open');
    }
  }
  onLogout() {
    if (this.admin && this.isAuth)
      this.auth.logout().subscribe((data: any) => {
        if (data.status==='OK'){
          location.reload();
        }
      });
  }
  onLogin() {
    if (this.admin && !this.isAuth)
      location.href = 'admin/login';
  }
}


export let adminItems = [
  {
    name: 'Clientes',
    href: 'clients',
  },
  {
    name: 'Pertenencias',
    href: 'items',
  },
  {
    name: 'Empleados',
    href: 'rrhh',
  },
  {
    name: 'Abonos',
    href: 'pay',
  },
  {
    name: 'Cotizaciones',
    href: 'quotations',
  },
  {
    name: 'Inversiones',
    href: 'invest',
  },
];
export let Items = [
  {
    name: 'Empeños',
    href: 'pawn',
  },
  {
    name: 'Calcular Empeño',
    href: 'pawn/calc',
  },
  {
    name: 'Cotizar Ahora',
    href: 'pawn/quotations',
  },
  {
    name: 'Abonar',
    href: 'pay',
  },
  {
    name: 'Inversiones',
    href: 'invest',
  },
];
