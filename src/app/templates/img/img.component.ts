import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {
  @Input() p: string = '';  // Declare the input property
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
  }
}
