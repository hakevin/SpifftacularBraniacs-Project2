import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GoalService } from 'src/app/services/goals/goal.service';
import { Goal } from 'src/app/models/goal.model';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goal = this.goalService.goal;
  goals: Goal[];
  goalsSub: Subscription;
  constructor(private goalService: GoalService) { }

  ngOnInit() {
    this.goalService.getGoals();
    this.goalsSub = this.goalService.getGoalUpdateListener()
      .subscribe((goals: Goal[]) => {
        this.goals = goals;
      });
  }

}
