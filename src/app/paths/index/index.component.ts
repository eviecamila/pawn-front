import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ScreenService } from 'src/app/services/screen.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private router: Router,
    public screen: ScreenService,
    public darkModeService: DarkModeService,
  ) { }

  ngOnInit(): void {
  }

}
