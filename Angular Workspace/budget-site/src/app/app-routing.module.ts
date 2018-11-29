import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { RegisterComponent } from './components/register/register.component';
import { GoalComponent } from './components/goal/goal.component';
import { CreateGoalComponent } from './components/create-goal/create-goal.component';
import { FinanceChartComponent } from './finance-chart/finance-chart.component';
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
  component: FinanceChartComponent,
  path: 'app-finance-chart'
},{
  component: GoalComponent,
  path: 'goals'
}, {
  component: InvestmentComponent,
  path: 'invest'
}, {
  component: CreateGoalComponent,
  path: 'createGoal'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
