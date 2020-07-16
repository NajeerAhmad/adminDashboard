import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormErrorControlMessageComponent } from './form-error-control-message/form-error-control-message.component';


const routes: Routes = [
  // { path: '', component: FormErrorControlMessageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormErrorConotrolRoutingModule { }
