import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-pw',
  templateUrl: './change-pw.component.html',
  styleUrls: ['./change-pw.component.css', './../profile.component.css']
})
export class ChangePwComponent {
  constructor(private auth: AuthService, private toastr: ToastrService) {
    this.auth.currentUser(localStorage.getItem('token')).subscribe((res: any) => {
      this.rfc = res.rfc;
    });
  }
  rfc!:string;
  oldPassword!: string;
  newPassword!: string;
  confirmPassword!: string;

  // Método para cambiar la contraseña
  cambiarContrasena() {
    if (this.oldPassword && this.newPassword && this.confirmPassword && this.confirmPassword == this.newPassword) {
      this.auth.changePassword({
        rfc:this.rfc,
        opw:this.oldPassword,
        npw:this.newPassword
      }).subscribe((data: any) => {
        if (data.status === 'OK') { this.toastr.success(data.message);}
        else { this.toastr.error(data.message);}
      });
    }
  }
}
