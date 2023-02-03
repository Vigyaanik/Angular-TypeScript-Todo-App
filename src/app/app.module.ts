import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/app.component.login';
import { BaseComponent } from './components/base/app.component.base';
import { JobComponent } from './components/home/app.component.home';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }

@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class BaseModule { }

@NgModule({
  declarations: [
    JobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [JobComponent]
})
export class JobModule { }


