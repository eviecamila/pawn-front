import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// JSON GLOBAL
import { indexAbcs } from '../admin-index/admin-index.component';
@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css'],
})
export class AbcComponent implements OnInit {
  data: any = {};
  selectedMode:string='Selecciona un modo';
  constructor(private route: ActivatedRoute) {}
  instance!: any;
  ngOnInit() {}

  onActivate(component: any) {
    this.instance=component;
    component.data.subscribe((data: any) => {this.data = data;});
  }

  onModeChange(){this.instance.mode=this.selectedMode;}
}

export const Abcs: any = {
  employee: 0,
  client: 1,
  items: 2,
  ventas: 3,
  pawn: 4,
};
