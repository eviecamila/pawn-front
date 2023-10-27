import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/dark-mode.service';

@Component({
  selector: 'app-switch-dark-mode',
  templateUrl: './switch-dark-mode.component.html',
  styleUrls: ['./switch-dark-mode.component.css']
})
export class SwitchDarkModeComponent {
  constructor(private darkModeService: DarkModeService) {}
  isChecked: boolean = false;
  get isDark(): boolean {
    this.isChecked = this.darkModeService.isDark
    return !this.darkModeService.isDark;
  }
  onChange(event: Event): void {
    this.darkModeService.toggleDarkMode();
  }
}
