import { Component, ViewChild, Output, EventEmitter, OnInit, OnDestroy} from '@angular/core';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.css']
})
export class QrScannerComponent implements OnInit {
  @ViewChild('action', { static: true }) action!: NgxScannerQrcodeComponent;
  @Output() scan = new EventEmitter<string>;

  toggleScanner() {
    if (this.action.isStart) {
      this.action.stop();
    } else {
      this.action.start();
    }
  }
  ngOnInit(): void {
    this.action.stop();
  }
  ngOnDestroy(): void {
  }
  onScan(qrData: any): void {
    this.scan.emit(qrData[0].value);
    this.action.stop();
  }
}
