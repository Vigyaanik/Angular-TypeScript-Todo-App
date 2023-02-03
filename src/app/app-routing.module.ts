import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/app.component.login';
import { BaseComponent } from './components/base/app.component.base';
import { JobComponent } from './components/home/app.component.home';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: '', component: BaseComponent },
  {path: 'home', component: JobComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
