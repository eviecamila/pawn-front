import { Component, OnInit , Input} from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';
@Component({
  selector: 'app-footer-item',
  templateUrl: './footer-item.component.html',
  styleUrls: ['./footer-item.component.css']
})
export class FooterItemComponent implements OnInit {
  @Input() href!: string;
  constructor(public darkModeService: DarkModeService) {}
  toggleDarkMode() {this.darkModeService.toggleDarkMode();}
  ngOnInit(): void {
  }
}
