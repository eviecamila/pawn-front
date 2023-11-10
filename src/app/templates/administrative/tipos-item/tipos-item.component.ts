import { Component, OnInit } from '@angular/core';
import { PawnService } from 'src/app/services/pawn.service';
import items from 'src/assets/data/bs5_icons.json';


@Component({
  selector: 'app-tipos-item',
  templateUrl: './tipos-item.component.html',
  styleUrls: ['./tipos-item.component.css']
})
export class TiposItemComponent implements OnInit {
  icons!: any;
  tipoItem!: any;

  constructor(public pawnService: PawnService) {}

  ngOnInit() {
    this.icons = items.items;  // Accede a 'items' directamente desde 'jsonData'
    console.log(this.icons);
  }
}
