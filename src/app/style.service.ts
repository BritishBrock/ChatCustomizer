
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


      addStyle(section:string,styleName:string,value:string){
        if (!this.style[section]) {
          this.style[section] = {};
        }
        if (!this.style[section][styleName]) {
          this.style[section][styleName] = {};
        }
        this.style[section][styleName].value = value;
        this.stylesListener.next(this.style);
      }

}
