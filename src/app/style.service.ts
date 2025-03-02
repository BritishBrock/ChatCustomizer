
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { styleI } from './interfaces/style';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor() { }


     style:styleI = {};
     stylesListener:Subject<object> = new Subject();
     styles:styleI[] = [];

     updateStyle(styles:any){
      this.style = {};
       Object.entries(styles).every(([section , stylesObj])=>{
        Object.entries(stylesObj as Object).every(([styleName , value])=>{
              if (!this.style[section]) {
                this.style[section] = {};
              }
              this.style[section][styleName] = value as string;
              return true;
          })
        return true;
        })

        this.stylesListener.next(this.style);
      }


      saveCSS(){
        this.styles.push(this.style);
        localStorage.setItem("styles",JSON.stringify(this.styles));
      }
      loadCSS(){
        let json = localStorage.getItem("styles") ?? "";
        if(json == "")return;
        this.styles = JSON.parse(json)
      }
}
