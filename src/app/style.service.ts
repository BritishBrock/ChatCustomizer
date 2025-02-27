
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


      addStyle(sections:string[],styles:any){
        for(let i = 0; i < sections.length;i++){

          Object.entries(styles[i]).every(([key , value])=>{
            if (!this.style[sections[i]]) {
              this.style[sections[i]] = {};
            }
            this.style[sections[i]][key] = value as string;
            return true;
          })
        }



        this.stylesListener.next(this.style);
      }

}
