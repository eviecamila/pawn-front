import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {
  @Input() p: string = '';  // Declare the input property

  src: string = '';
  alt: string = '';
  width: string = '';
  c: string = '';

  constructor() { }

  ngOnInit(): void {
    if (this.p) {
      const a = this.p.split(',');
      console.log(a[2])
      if (a.length == 3) {
        this.src = a[0].trim();this.alt = a[1].trim();this.width="width: "+a[2];
      }
      else if (a.length ==4)
      {
        this.src = a[0].trim();this.alt = a[1].trim();
        this.width="width: "+a[2];this.c = a[3];
      }
    }
  }
}
