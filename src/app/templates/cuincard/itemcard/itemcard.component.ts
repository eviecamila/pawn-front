import { Component, Input, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';
// import { PawnService } from 'src/app/services/pawn.service';

@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.css']
})
export class ItemcardComponent {
  constructor(
    public darkModeService: DarkModeService,
    
    ){}
  @Input() icon:string = 'question-diamond-fill';
  @Input() name!:string;
}
