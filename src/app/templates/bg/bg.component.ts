import { Component, Input, OnInit } from '@angular/core';
import { FooterItemComponent } from '../footer-item/footer-item.component';
@Component({
  selector: 'app-bg',
  templateUrl: './bg.component.html',
  styleUrls: ['./bg.component.css']
})
export class BgComponent implements OnInit {
  @Input() modo!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
