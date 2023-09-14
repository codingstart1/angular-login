import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './utils/loader/loader.component';
import { LoaderService } from './utils/loader/loader.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularToastifyModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ToastService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
