// pawn-item.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PawnService } from 'src/app/services/pawn.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DarkModeService } from 'src/app/services/dark-mode.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('open', style({ height: '*' })),
      state('closed', style({ height: '0', overflow: 'hidden' })),
      transition('open <=> closed', [animate('0.2s ease-in-out')]),
    ]),
  ],
})
export class PawnItemComponent implements OnInit {
  item: any = {};
  isCollapsibleActive = false;
  modo!: string;
  constructor(
    private _route: ActivatedRoute,
    private pawnService: PawnService,
    private router: Router,
    public darkModeService: DarkModeService,
  ) {
    this.darkModeService.isDarkModeEnabled().subscribe((isDarkMode) => {
      // Actualiza la variable modo en función del estado del modo oscuro
      this.modo = !isDarkMode ? 'light' : 'dark';
    });
  }

  ngOnInit(): void {
    this._route.queryParams.subscribe((queryParams) => {
      const itemValue = queryParams['item'];

      if (!itemValue) this.router.navigate(['/web/pawn']);

      this.pawnService.tipoItem(itemValue).subscribe(
        (data) => {
          this.item = data;
          console.log(this.item);
        },
        (error) => this.router.navigate(['/web/pawn'])
      );
    });
  }

  // pawn-item.component.ts
  toggleCollapsible() {
    this.isCollapsibleActive = !this.isCollapsibleActive;
  }

}
