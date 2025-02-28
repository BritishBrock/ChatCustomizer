import { style } from '@angular/animations';
import { StyleService } from './../style.service';
import { Component } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { FormControl, FormGroup } from '@angular/forms';
import { form, formComponents } from '../data/form';

@Component({
  selector: 'app-style-section',
  standalone:false,
  templateUrl: './style-section.component.html',
  styleUrl: './style-section.component.scss'
})
export class StyleSectionComponent {

  constructor(private styleService:StyleService){}
  isOpen:boolean[] = [false,false];

  stylesForm = form;
  typeMap = formComponents;
  ngOnInit(): void {
    this.stylesForm.valueChanges.subscribe((value)=>{
      this.styleService.updateStyle(value);
    })
  }


}
