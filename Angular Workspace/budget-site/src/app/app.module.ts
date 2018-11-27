import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InvestmentComponent } from './components/investment/investment.component';
import { GoalComponent } from './components/goal/goal.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { InvestmentsService } from './services/investments.service';
import { CreateGoalComponent } from './components/create-goal/create-goal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    GoalComponent,
    InvestmentComponent,
    SidenavComponent,
    CreateGoalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'goals', component: GoalComponent },
      { path: 'invest', component: InvestmentComponent },
      { path: 'createGoal', component: CreateGoalComponent }
    ])
  ],
  providers: [InvestmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
