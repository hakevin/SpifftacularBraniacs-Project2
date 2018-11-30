import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  data;
  wage;
  expenditures;

  constructor() { }

  getData() {
    return this.data;
  }

  getExpenditures() {
    return this.expenditures;
  }

  setExpenditures(e) {
    this.expenditures = e;
  }

  clearExpenditures() {
    this.expenditures = undefined;
  }

  getWage() {
    return this.wage;
  }

  setWage(w) {
    this.wage = w;
  }

  clearWage() {
    this.wage = undefined;
  }

  setData(data) {
    this.data = data;
  }

  clearData() {
    this.data = undefined;
  }

}
