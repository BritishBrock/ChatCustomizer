import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','./chat.scss']
})
export class AppComponent {
  title = 'ChatCustomizer';

  message:string = "";
    
  addMessage(){

    
  }

}
