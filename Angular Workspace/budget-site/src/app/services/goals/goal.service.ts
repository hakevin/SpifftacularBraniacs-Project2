import { Injectable } from '@angular/core';
import { Goal } from 'src/app/models/goal.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  private goals: Goal[] = [];
  private goalsUpdated = new Subject<Goal[]>();
  goal;

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getGoals() {
    const id = this.loginService.user.id;
    const url = `${environment.server}/goals/finance/${id}`;
    this.http.get(url)
      .subscribe((payload) => {
        // console.log(payload);
        this.goal = payload;
        console.log(this.goal);
        return this.goal;
      },
        (error) => console.log(error));
  }

  getGoalUpdateListener() {
    return this.goalsUpdated.asObservable();
  }

  addGoal(goal: any) {
    const url = `${environment.server}/goals`;
    this.http.post(url, goal)
      .subscribe((goalInfo) => {
        console.log(goalInfo);
        this.goal = goalInfo;
        console.log(this.goal);
        return this.goal;
      },
        (error) => console.log(error));
  }

}

