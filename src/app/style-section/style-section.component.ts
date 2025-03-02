import { style } from '@angular/animations';
import { StyleService } from './../style.service';
import { Component } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { form, formComponents } from '../data/form';
import { cssProperties } from '../data/cssstyles';

@Component({
  selector: 'app-style-section',
  standalone:false,
  templateUrl: './style-section.component.html',
  styleUrl: './style-section.component.scss'
})
export class StyleSectionComponent {

  constructor(private styleService:StyleService,private fb: FormBuilder){}
  isOpen:boolean[] = [false,false];

  stylesForm = form;
  cssProprties = cssProperties;
  cssSelected?:string;
  typeMap = formComponents;
  ngOnInit(): void {


    this.stylesForm.valueChanges.subscribe((value)=>{

      this.styleService.updateStyle(value);
    })
  }

  addStyle(group:string){
   if(!this.cssSelected)return;
    let f = this.stylesForm.get(group) as FormGroup;

    f.addControl(this.cssSelected,new FormControl(""));



  }


}
