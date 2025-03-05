import { Component } from '@angular/core';
import { styleI } from '../interfaces/style';

@Component({
  selector: 'app-main-page',
  standalone: false,

  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  currentImage = 0;
  styles:styleI[] = [{
    "username": {
      "background-color": "",
      "padding": "",
      "color": "",
      "margin": ""
    },
    "message": {
      "background-color": "",
      "padding": "",
      "color": "#00ffaa",
      "margin": ""
    },
    "colon": {
      "background-color": "",
      "padding": "",
      "color": "",
      "margin": ""
    },
    "chat-line": {
      "background-color": "#ff0000",
      "padding": "20px",
      "margin": "20px 0px 0px 0px "
    }
  },
  {
    "username": {
      "background-color": "",
      "padding": "",
      "color": "",
      "margin": ""
    },
    "message": {
      "background-color": "",
      "padding": "",
      "color": "#00ffaa",
      "margin": ""
    },
    "colon": {
      "background-color": "",
      "padding": "",
      "color": "",
      "margin": ""
    },
    "chat-line": {
      "background-color": "blue",
      "padding": "20px",
      "margin": "20px 0px 0px 0px "
    }
  }




]
ngAfterViewInit(): void {

 this.loadStyle(0)
}
  loadStyle(dir:number){
    this.currentImage+=dir;
    if(this.currentImage > this.styles.length-1)this.currentImage = 0;
    if(this.currentImage < 0)this.currentImage = this.styles.length -1;

    let style = this.styles[this.currentImage];
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


  }
}
