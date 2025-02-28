import { Component, Input } from '@angular/core';

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
  control:any;
  ngOnInit(): void {
    this.control = this.formGroup.controls[this.formGroupName].controls[this.controlname]

  }
}
