import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// JSON GLOBAL
import { indexAbcs } from '../admin-index/admin-index.component';
@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) { }
  item: string = 'non found'
  icon: string = 'question-circle-fill'
  description: string = 'Macana, que no existe dije w';
  form: SafeHtml = '';
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      // Supongamos que tienes un parámetro de consulta llamado 'param'
      const tipoValue = params['tipo'];
      // Aquí puedes hacer algo con paramValue
      if (tipoValue) {
        this.item ='ABC de '+ indexAbcs[Abcs[tipoValue]].name;
        this.icon = indexAbcs[Abcs[tipoValue]].icon;
        this.description = indexAbcs[Abcs[tipoValue]].description;
        this.form = this.sanitizer.bypassSecurityTrustHtml(indexAbcs[Abcs[tipoValue]].form);
      }
      console.log(indexAbcs[Abcs[tipoValue]]);
    });


  }
}
export const Abcs:any= {
  employee:0,
  client:1,
  items:2,
  ventas:3,
  pawn:4,
}
