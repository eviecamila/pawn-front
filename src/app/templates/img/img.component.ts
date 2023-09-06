import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {
  @Input() p: string = '';  // Declare the input property
<<<<<<< HEAD

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
=======
  c: string = '';
  src: string = '';
  alt: string = '';
  width: string = '';

  constructor() {
    if (this.alt=='') this.alt="TOnto";
    if (this.width=='') this.width="100px";
    if (this.src=='') this.src='/assets/tdc.png';
    
    // this.alt = _alt;
    // this.width= _width;
    // this.src=_src;
   }

  ngOnInit(): void {
>>>>>>> 4a9cf046296e9e5e92bd1bfb93e9304b8bb3fd7b
  }
}
