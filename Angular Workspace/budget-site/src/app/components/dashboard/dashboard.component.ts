import { Component, OnInit } from '@angular/core';
import { FinanceService } from 'src/app/services/budget/finance.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private financeService: FinanceService) { }

  ngOnInit() {
  }

  onWageSubmit(form: NgForm) {
    const wage = {
      wage: form.value.wage,
      userId: 3,
    };
    this.financeService.addWage(wage);
    console.log(wage);

    form.resetForm();
  }
}
 