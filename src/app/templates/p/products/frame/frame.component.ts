import { Component, OnInit } from '@angular/core';
import { ImgComponent } from 'src/app/templates/img/img.component';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  alt:string ='';
  title:string ='';
  src:string='';
  constructor() {}
  items: ImgComponent[]=[
    // new ImgComponent('tonta', 'imgs.png', 'asd'),
    // new ImgComponent('tonta', 'imgs.png', 'asd'),
    // new ImgComponent('tonta', 'imgs.png', 'asd'),
  ];
  ngOnInit(): void {
    
  }

}
