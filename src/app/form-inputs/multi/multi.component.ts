import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-multi',
  standalone: false,

  templateUrl: './multi.component.html',
  styleUrl: './multi.component.scss'
})
export class MultiComponent {
  @Input() formGroupName!:any;
  @Input() controlname!:any;
  @Input() formGroup!:any;
  control!:FormControl;
  direction:number = 0;
  directionValues:string[] = ["","","",""];


  ngOnInit(): void {
    this.control = this.formGroup.controls[this.formGroupName].controls[this.controlname]
  }


  update(){
    this.control.patchValue(""+(this.directionValues[0] != "" ? this.directionValues[0] : "0px") + " "+(this.directionValues[1] != "" ? this.directionValues[1] : "0px") + " "+(this.directionValues[2] != "" ? this.directionValues[2] : "0px") + " "+(this.directionValues[3] != "" ? this.directionValues[3] : "0px") + " ")
  }

}
