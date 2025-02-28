import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color',
  standalone: false,

  templateUrl: './color.component.html',
  styleUrl: './color.component.scss'
})
export class ColorComponent {
  @Input() formGroupName!:any;
  @Input() controlname!:any;
  @Input() formGroup!:any;
  control:any;
  ngOnInit(): void {
    this.control = this.formGroup.controls[this.formGroupName].controls[this.controlname]

  }
}
