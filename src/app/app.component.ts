import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StyleService } from './style.service';

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


  ngOnInit(): void {
    this.styleService.stylesListener.subscribe(style=>{

      console.log(style)
      Object.entries(style).every(([key1 , value1])=>{
          Object.entries(value1).every(([key2 , value2])=>{

              let c:any = document.getElementsByClassName(key1);
              for(let r of c){
                r.style[key2] = value2 ;
              }
              return true;
          })
          return true;
      })

    })
  }

  addMessage(){
    this.messages.push(this.message);
    this.message = "";

  }

}
