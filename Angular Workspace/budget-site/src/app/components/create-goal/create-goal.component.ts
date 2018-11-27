import { Component, OnInit } from '@angular/core';
import { GoalService } from 'src/app/services/goals/goal.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.css']
})
export class CreateGoalComponent implements OnInit {
  enteredItem = '';
  enteredCost: number;
  enteredStartDate = '';
  enteredEndDate = '';

  constructor(private goalService: GoalService) { }

  ngOnInit() {
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.goalService.addPost(
      this.enteredItem = form.value.item,
      this.enteredCost = form.value.cost,
      this.enteredStartDate = form.value.enteredStartDate,
      this.enteredEndDate = form.value.enteredEndDate);
    console.log(
      this.enteredItem,
      this.enteredCost,
      this.enteredEndDate,
      this.enteredStartDate
    );

    form.resetForm();
  }
}
