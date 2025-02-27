import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone:false,
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  @Output() infoOut:EventEmitter<boolean> = new EventEmitter<boolean>();



  out(){
    document.getElementById("infopanel")?.addEventListener("animationend",()=>{
      document.getElementById("infopanel")?.classList.remove("infopanel2");
      this.infoOut.emit(false);
    })
    document.getElementById("infopanel")?.classList.add("infopanel2");
  }
}
