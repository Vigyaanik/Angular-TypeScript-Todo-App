import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/app.component.login';
import { BaseComponent } from './components/base/app.component.base';
import { JobComponent } from './components/home/app.component.home';
import { JobAddComponent } from './components/add-job/app.component.add-job';
import { JobUpdateComponent } from './components/update-job/app.component.update-job';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: '', component: BaseComponent, canActivate: [AuthGuard] },
  {path: 'home', component: JobComponent, canActivate: [AuthGuard]  },
  {path: 'add-job', component: JobAddComponent, canActivate: [AuthGuard]  },
  {path: 'edit-job/:jobId', component: JobUpdateComponent, canActivate: [AuthGuard]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
