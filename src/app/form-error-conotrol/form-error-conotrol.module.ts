import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormErrorConotrolRoutingModule } from './form-error-conotrol-routing.module';
import { FormErrorControlMessageComponent } from './form-error-control-message/form-error-control-message.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormErrorControlMessageComponent],
  imports: [
    CommonModule,
    FormsModule,
    FormErrorConotrolRoutingModule
  ],
  exports: [FormErrorControlMessageComponent]
})
export class FormErrorConotrolModule { }
