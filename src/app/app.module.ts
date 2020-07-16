import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterGurdService } from './services/router-gurd.service';
import { ValidationComponent } from './services/validation/validation.component';
import { FormErrorConotrolModule } from './form-error-conotrol/form-error-conotrol.module';
@NgModule({
  declarations: [
    AppComponent,
    ValidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormErrorConotrolModule

  ],
  providers: [RouterGurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
