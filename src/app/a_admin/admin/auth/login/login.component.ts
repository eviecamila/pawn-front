import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  usernameFocused = false;
  passwordFocused = false;
  modo!: string
  constructor(
    private dark: DarkModeService,
    private auth: AuthService,
    private toastr: ToastrService
  ) {
    this.dark.isDarkModeEnabled().subscribe(modo => {
      this.modo = !modo ? 'light' : 'dark';
    })
    if (this.auth.isAuth()) location.href = '/admin/'
  }
  onSubmit() {
    this.login()
  }

  login() {
    $.blockUI({
      message: '<i class="icon-spinner4 spinner"></i>',
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
    this.auth.login({
      username: this.username,
      password: this.password
    }).subscribe(
      (res) => {
        if (res['error']) {
          this.toastr.warning('Usuario o contraseña incorrectos.');
          location.reload();
        } else {
          window.location.href = '/admin';
        }
        $.unblockUI();
      },
      (error) => {
        this.toastr.warning(error.error.message);
        $.unblockUI();
      }
    );
  }
}
