import { Component, OnInit} from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';
import { PawnService } from 'src/app/services/pawn.service';
@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
  items:any=[]

  constructor(
    public screen: ScreenService,
    public pawnService: PawnService
    ){}
    ngOnInit(): void {
        this.pawnService.tiposItem().subscribe((item:any)=>{
          this.items = item.tipos_item;
        })
    }
}
