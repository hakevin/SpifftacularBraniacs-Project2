import { Component, OnInit } from '@angular/core';
import { FinanceService } from 'src/app/services/budget/finance.service';
import { NgForm } from '@angular/forms';
import { GoalService } from 'src/app/services/goals/goal.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user = this.loginService.user;
  wages = this.financeService.wage;
  expenditures = this.financeService.expenditure;
  // expenditure = this.financeService.expenditure
  constructor(
    public financeService: FinanceService,
    private goalService: GoalService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.goalService.getGoals();
    this.financeService.getWage();
    this.financeService.getType();
  }

  onWageSubmit(form: NgForm) {
    const wage = {
      wage: form.value.wage,
      userId: this.loginService.user.id,
    };
    this.financeService.addWage(wage);
    console.log(wage);

    form.resetForm();
  }

  onExpenseSubmit(form: NgForm) {
    const expense = {
      expenditureType: form.value.type,
      monthlyCost: form.value.wage,
      financeId: this.loginService.user.id
    };
    this.financeService.addType(expense);

    console.log(expense);

    form.resetForm();
  }
}
