import { Component, Input, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { ScreenService } from 'src/app/services/screen.service';
@Component({
  selector: 'app-pata',
  templateUrl: './pata.component.html',
  styleUrls: ['./pata.component.css']
})
export class PataComponent implements OnInit {
  _items = items
  @Input() modo!: string;
  constructor(
    public darkModeService: DarkModeService,
    public screen: ScreenService
  ) {
  }
  ngOnInit(): void {
  }
}

export const items = [
  {
    name: 'Cotiza tu articulo',
    href: '/web/pawn/quotations',
  },
  {
    name: 'Calcula el prestamo por tu articulo',
    href: '/web/pawn/calc',
    even: 1,
  },
  {
    name: 'Invierte tu dinero ahora mismo',
    href: '/web/invest',
  },
  {
    name: 'When te drogas',
    href: '/setup',
    even: 1,
  },
  {
    name: 'Como llegar?',
    href: 'https://maps.app.goo.gl/zXHxXAL9PLSyBhv49',
    targetBlank: 1
  },

]
