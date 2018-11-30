import { Component, OnInit } from '@angular/core';
import { FinanceService } from 'src/app/services/budget/finance.service';

@Component({
  selector: 'app-finance-chart',
  templateUrl: './finance-chart.component.html',
  styleUrls: ['./finance-chart.component.css']
})
export class FinanceChartComponent implements OnInit {

  public lineChartData: Array<any>;
  public lineChartLabels: Array<any> = new Array<any>();
  public lineChartOptions: any = {
    responsive: true
  };
  data;
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'pie';

  constructor(private financeService: FinanceService) {
    this.lineChartData = [
      { data: [], label: 'Data Set 1' },
      { data: [], label: 'Data Set 2' },
      { data: [], label: 'Data Set 2' },
      ];
   }

  ngOnInit() {
    this.randomize();
  }

  public randomize(): void {
    let _lineChartData: Array<any> = new Array<any>();
    for ( let i = 0; i < this.financeService.expenditure.length; i++) {
        let tmp = { 'data': [this.financeService.expenditure[i].monthlyCost], 'label': this.financeService.expenditure[i].expenditureType};
        this.lineChartLabels.push(this.financeService.expenditure[i].expenditureType);
        _lineChartData.push(tmp);
    }
    let tmp = { 'data': this.financeService.wage.wage, 'label': 'Monthly income'};
    this.lineChartLabels.push('Monthly Income');
    _lineChartData.push(tmp);
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
