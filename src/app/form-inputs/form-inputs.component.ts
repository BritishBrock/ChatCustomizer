import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { formComponents } from '../data/form';

@Component({
  selector: 'app-form-inputs',
  standalone: false,

  templateUrl: './form-inputs.component.html',
  styleUrl: './form-inputs.component.scss'
})
export class FormInputsComponent {
  @Input() formGroupName!:any;
  @Input() controlname!:any;
  @Input() formGroup!:any;
  control:any;
  type:any;
  ngOnInit(): void {
    this.type = formComponents[this.controlname];
    this.control = this.formGroup.controls[this.formGroupName]?.controls[this.controlname]

  }
}
