import { Component, OnInit } from '@angular/core';
import { TopBarComponent } from 'src/app/templates/top-bar/top-bar.component';
import { BgComponent } from 'src/app/templates/bg/bg.component';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}
