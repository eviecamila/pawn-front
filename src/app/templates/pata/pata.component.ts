import { Component, Input, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { ScreenService } from 'src/app/services/screen.service';
@Component({
  selector: 'app-pata',
  templateUrl: './pata.component.html',
  styleUrls: ['./pata.component.css']
})
export class PataComponent implements OnInit {
  @Input() modo!: string;
  constructor(
    public darkModeService: DarkModeService,
    public screen: ScreenService
  ) {
  }
  ngOnInit(): void {
  }
}
