import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { RegisterComponent } from './components/register/register.component';
import { GoalComponent } from './components/goal/goal.component';

const routes: Routes = [{
  component: LoginComponent,
  path: ''
}, {
  component: RegisterComponent,
  path: 'register'
}, {
  component: DashboardComponent,
  path: 'dashboard'
}, {
  component: GoalComponent,
  path: 'goals'
}, {
  component: InvestmentComponent,
  path: 'invest'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
