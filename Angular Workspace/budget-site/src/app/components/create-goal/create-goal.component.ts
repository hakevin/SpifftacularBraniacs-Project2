import { Component, OnInit } from '@angular/core';
import { GoalService } from 'src/app/services/goals/goal.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.css']
})
export class CreateGoalComponent implements OnInit {
  itemName = '';
  cost: number;
  startDate = '';
  achievedDate = '';

  constructor(private goalService: GoalService) { }

  ngOnInit() {
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const goal = {
      itemName: form.value.item,
      cost: form.value.cost,
      startDate: form.value.enteredStartDate,
      achievedDate: form.value.enteredEndDate
    };


    this.goalService.addGoal(goal);

    console.log(goal);

    form.resetForm();
  }
}
