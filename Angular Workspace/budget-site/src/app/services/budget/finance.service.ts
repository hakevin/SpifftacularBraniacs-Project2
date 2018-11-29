import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  wage;


  constructor(private http: HttpClient) { }

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
}
