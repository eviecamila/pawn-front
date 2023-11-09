import { Component, ViewChild } from '@angular/core';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.css']
})
export class QrScannerComponent {
  @ViewChild('action', { static: true }) action!: NgxScannerQrcodeComponent;

  toggleScanner() {
    if (this.action.isStart) {
      this.action.stop();
    } else {
      this.action.start();
    }
  }
  showAlert(qrData: any){
    // console.log(qrData);
    alert('QR Detectado:\n' + qrData[0].value);
  }
}
