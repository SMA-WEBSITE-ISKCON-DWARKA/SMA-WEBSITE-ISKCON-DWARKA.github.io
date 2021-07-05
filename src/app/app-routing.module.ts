import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/core/login/login.component';
import {DashboardComponent} from './components/core/dashboard/dashboard.component';
import {AdminLoginComponent} from './components/admin/admin-login/admin-login.component';

const routes: Routes = [{
  component: LoginComponent,
  path: 'login'
}, {
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  component: DashboardComponent,
  path: 'dashboard'
}, {
  component: AdminLoginComponent,
  path: 'admin-login'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
