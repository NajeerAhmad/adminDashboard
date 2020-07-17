import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterGurdService } from './services/router-gurd.service';
import { ValidationComponent } from './services/validation/validation.component';
import { FormErrorConotrolModule } from './form-error-conotrol/form-error-conotrol.module';
import { LogoutComponent } from './logout/logout.component';
import { DashboardLayoutComponent } from './dash-board-component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminModule } from './admin/admin.module';
@NgModule({
  declarations: [
    AppComponent,
    ValidationComponent,
    LogoutComponent,
    DashboardLayoutComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormErrorConotrolModule,
    AdminModule
  ],
  providers: [RouterGurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
