import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StyleService } from './style.service';
import { styleI } from './interfaces/style';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','./chat.scss']
})
export class AppComponent {

    constructor(private styleService:StyleService){}
  title = 'ChatCustomizer';

  message:string = "";
  messages:String[] = [];
  info:boolean = false;
  messageBox:boolean = false;
  toLoadIn:any;
  style?:any;
  styles?:styleI[];
  ngOnInit(): void {
    this.styleService.loadCSS();
    this.styles = this.styleService.styles;
    this.styleService.stylesListener.subscribe(style=>{
      this.style = style;
      Object.entries(style).every(([key1 , value1])=>{
          Object.entries(value1).every(([key2 , value2])=>{

              let c:any = document.getElementsByClassName(key1);
              for(let r of c){
                r.style.setProperty(key2,value2)
              }
              return true;
          })
          return true;
      })

    })
  }
  loadStyle(){
    if(!this.styles || this.styles.length == 0) return;
    this.styleService.updateStyle(this.styles![this.toLoadIn]);
  }
  addMessage(){
    this.messages.push(this.message);
    this.message = "";

  }
  closeInfo(){
    this.info = false;
  }

  exportCSS(){
    let string = "";
    Object.entries(this.style).every(([key1 , value1])=>{
      string += "."+key1 +JSON.stringify(value1) + " "
      return true;
    })
    navigator.clipboard.writeText(string);
  }

  saveCSS(){
    this.styleService.saveCSS();
  }


}
