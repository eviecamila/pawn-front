import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  private static instance: ScreenService;
  constructor() { }
  static getInstance() {
    if (!ScreenService.instance) {
      ScreenService.instance = new ScreenService();
    }
    return ScreenService.instance;
  }
  isMobile() {return window.innerWidth<=768;}
  isDesktop() {return window.innerWidth>=769;}
}
