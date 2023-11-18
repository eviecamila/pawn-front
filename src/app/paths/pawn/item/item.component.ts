// pawn-item.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PawnService } from 'src/app/services/pawn.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class PawnItemComponent implements OnInit {
  item: any = {};
  @Input() modo!:string;
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


}
