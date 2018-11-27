import { Injectable } from '@angular/core';
import { Goal } from 'src/app/models/goal.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  private goals: Goal[] = [];
  private goalsUpdated = new Subject<Goal[]>();

  constructor() { }

  getGoals() {
    return [...this.goals];
  }

  getPostUpdateListener() {
    return this.goalsUpdated.asObservable();
  }

  addPost(item: string, cost: number, startDate: string, reachedDate: string) {
    const goal: Goal = {
      // title: title,
      // content: content
      item: item,
      cost: cost,
      startDate: startDate,
      reachedDate: reachedDate
    };

    this.goals.push(goal);
    this.goalsUpdated.next([...this.goals]);
    console.log(goal);
  }
}
