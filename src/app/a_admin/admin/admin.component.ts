import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';
declare var $: any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  modo!: string;
  user: any = { username: '', email: '', groups: { name: '' } }
  isAuth!: boolean;
  ready: boolean = false;
  detector!: InactividadDetector
  constructor(
    private darkModeService: DarkModeService,
    private auth: AuthService
  ) {
    // 5 minutos o logout
    this.detector = new InactividadDetector(300000);

    // DarkMode
    this.darkModeService.isDarkModeEnabled().subscribe((isDarkMode) => { this.modo = !isDarkMode ? 'light' : 'dark'; });

    // Verificar si esta logeado
    this.isAuth = this.auth.isAuth()
    if (this.isAuth) {
      this.auth.currentUser(localStorage.getItem('token')).subscribe((res) => {
        this.user = res; this.ready = true
      });
    }
    else {
      this.auth.logout().subscribe((res) => {}) ;
      location.href = 'admin/login'
    }

    // Eventos de inactividad
    this.detector.detectedSubject.subscribe((data: any) => {
      if (data) {
        $.blockUI({
          message: '<div class="text-center">Tiempo de inactividad superado<br>Cerrando sesion</div><br><div style="display:grid;place-items:center"><img width="15%" src="assets/cagando.gif" style="position:relative;right:0%;top:30%"></div>',
          overlayCSS: {
            backgroundColor: '#1b2024',
            opacity: 0.8,
            zIndex: 1200,
            cursor: 'wait',
          },
          css: {
            border: 0,
            color: '#fff',
            padding: 0,
            zIndex: 1201,
            backgroundColor: 'transparent',
          },
        });
        this.auth.logout().subscribe((data: any) => {
          if (data.status === 'OK') { setTimeout(() => { location.reload(); }, 2000); }
        });
      }
    })
  }
  async ngOnInit() {
    await this.ready;
  }
}
export class InactividadDetector {
  private tiempoInactividad: number;
  private temporizador: any;
  public detectedSubject: Subject<boolean> = new Subject<boolean>();

  constructor(tiempoInactividad: number) {
    this.tiempoInactividad = tiempoInactividad;

    document.addEventListener('mousemove', this.reiniciarTemporizador.bind(this));
    document.addEventListener('keydown', this.reiniciarTemporizador.bind(this));

    this.iniciarTemporizador();
  }

  reiniciarTemporizador() {
    if (this.temporizador !== null) {
      clearTimeout(this.temporizador);
      this.iniciarTemporizador();
    }
  }

  iniciarTemporizador() {
    this.temporizador = setTimeout(() => {
      // Emitir evento de detección de inactividad
      this.detectedSubject.next(true);
    }, this.tiempoInactividad);
  }
}
