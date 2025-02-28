import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  standalone: false,

  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent {
  @Input() formGroupName!:any;
  @Input() controlname!:any;
  @Input() formGroup!:any;
  control:any;
  ngOnInit(): void {
    this.control = this.formGroup.controls[this.formGroupName].controls[this.controlname]

  }
}
