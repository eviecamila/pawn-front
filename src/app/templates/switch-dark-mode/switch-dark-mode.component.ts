import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-switch-dark-mode',
  templateUrl: './switch-dark-mode.component.html',
  styleUrls: ['./switch-dark-mode.component.css']
})
export class SwitchDarkModeComponent implements OnInit {
  constructor(private darkModeService: DarkModeService) {}
  isChecked: boolean = false;
  isDark(): boolean {
    this.isChecked = this.darkModeService.isDark
    return !this.darkModeService.isDark;
  }
  ngOnInit(): void {
    let _switch:any = document.querySelector('#mode-switch');
    _switch.checked = localStorage['theme'] == 'L';
  }
  onChange(event: Event): void {
    this.darkModeService.toggleDarkMode();
  }
}
