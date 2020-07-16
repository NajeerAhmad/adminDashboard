import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationComponent } from 'src/app/services/validation/validation.component';

@Component({
  selector: 'app-form-error-control-message',
  template: `<div class="errormsg fontSize" *ngIf="errorMessage !== null">{{errorMessage}}</div>`,
  styleUrls: ['./form-error-control-message.component.css']
})
export class FormErrorControlMessageComponent {

  @Input() control: FormControl;
  @Input() name: string;
  @Input() message?: string;
  @Input() errorMessages?: any;

  get errorMessage() {
    if (this.control) {
      for (const propertyName in this.control.errors) {
        if (
          this.control.errors.hasOwnProperty(propertyName) &&
          (this.control.touched && this.control.invalid)
        ) {
          // showing error  message only when move out from field or remove focus.
          if (this.errorMessages && this.errorMessages[propertyName]) {
            return this.errorMessages[propertyName];
          } else {
            return ValidationComponent.getValidatorErrorMessage(
              propertyName,
              this.control.errors[propertyName],
              this.name,
              this.message
            );
          }
        }
      }
    }
    return null;
  }

}
