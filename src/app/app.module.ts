import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ToastService, AngularToastifyModule } from 'angular-toastify'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularToastifyModule
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
