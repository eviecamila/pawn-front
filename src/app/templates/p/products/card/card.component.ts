import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  alt = '';
  name = '';
  constructor() {
    if (this.name == '')this.name = "tdc.png"    
    if (this.alt == '')this.alt = "TDC PUTA"
   }

  ngOnInit(): void {
  }

}
