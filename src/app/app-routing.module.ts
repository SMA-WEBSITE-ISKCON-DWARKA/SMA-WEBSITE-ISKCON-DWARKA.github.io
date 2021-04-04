import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestRoutingComponent} from './components/test-routing/test-routing.component';

const routes: Routes = [{
  component: TestRoutingComponent,
  path: 'test-routing'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
