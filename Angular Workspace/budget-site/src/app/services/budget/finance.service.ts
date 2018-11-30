import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from '../user-data.service';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  wage;
  expenditure;

  constructor(private http: HttpClient, private userDataService: UserDataService) { }

  getWage() {
    const id = this.userDataService.getData();
    console.log(id);
    const url = `${environment.server}/finances/${id.id}`;
    this.http.get(url)
      .subscribe((payload) => {
        console.log(payload);
        this.wage = payload;
        console.log(this.wage);
        this.getType();
        return this.wage;
      },
        (error) => console.log(error));
  }

  getType() {
    const url = `${environment.server}/expenditures/finance/${this.wage.id}`;
    console.log(this.wage.id);
    this.http.get(url)
      .subscribe((payload) => {
        console.log(payload);
        this.expenditure = payload;
        console.log(this.expenditure);
        this.userDataService.setExpenditures(this.expenditure);
        return this.expenditure;
      },
        (error) => console.log(error));
  }

  addWage(wage: any) {
    const url = `${environment.server}/finances`;
    this.http.post(url, wage)
      .subscribe((wageInfo) => {
        console.log(wageInfo);
        this.wage = wageInfo;
        console.log(wage);
        console.log(this.wage);
        return this.wage;
      },
        (error) => console.log(error));
  }

  addType(type: any) {
    const url = `${environment.server}/expenditures`;
    this.http.post(url, type)
      .subscribe((typeInfo) => {
        console.log(typeInfo);
        this.expenditure = typeInfo;
        console.log(type);
        console.log(this.expenditure);
        return this.expenditure;
      },
        (error) => console.log(error));
  }
}
