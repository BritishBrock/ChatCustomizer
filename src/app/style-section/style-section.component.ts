import { StyleService } from './../style.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-style-section',
  standalone:false,
  templateUrl: './style-section.component.html',
  styleUrl: './style-section.component.scss'
})
export class StyleSectionComponent {

  constructor(private styleService:StyleService){}
  isOpen:boolean[] = [false,false];

  test:any;

  updateStyle(){
    this.styleService.addStyle("username","color","red");
  }
}
