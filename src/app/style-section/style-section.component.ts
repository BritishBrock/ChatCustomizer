import { style } from '@angular/animations';
import { StyleService } from './../style.service';
import { Component } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-style-section',
  standalone:false,
  templateUrl: './style-section.component.html',
  styleUrl: './style-section.component.scss'
})
export class StyleSectionComponent {

  constructor(private styleService:StyleService){}
  isOpen:boolean[] = [false,false];

  sections = ["username","message"];
  mes = MessageComponent;

  styles:any = [
      {
        "backgroundColor":"",
        "color":"",
      },
      {"color":""}
    ]

  updateStyle(){
        this.styleService.addStyle(this.sections,this.styles);
  }
}
