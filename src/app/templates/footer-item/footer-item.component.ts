import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-footer-item',
  templateUrl: './footer-item.component.html',
  styleUrls: ['./footer-item.component.css']
})
export class FooterItemComponent implements OnInit {
  @Input() content!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
