import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  modo!: string;
  user: any = { username: '', email: '', groups: { name: '' } }
  isAuth!: boolean;
  ready: boolean = false
  constructor(
    private darkModeService: DarkModeService,
    private auth: AuthService
  ) {
    this.darkModeService.isDarkModeEnabled().subscribe((isDarkMode) => {
      // Actualiza la variable modo en función del estado del modo oscuro
      this.modo = !isDarkMode ? 'light' : 'dark';
    });
    this.isAuth = this.auth.isAuth()
    if (this.isAuth) {
      this.auth.currentUser(localStorage.getItem('token')).subscribe((res) => {
        this.user = res;
        this.ready = true
      });
    }
    else location.href = 'admin/login'
  }
  async ngOnInit() {
    await this.ready;
  }
}
