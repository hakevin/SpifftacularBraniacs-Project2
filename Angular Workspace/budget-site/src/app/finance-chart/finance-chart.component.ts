import { Component, OnInit } from '@angular/core';
import { DashboardComponent} from 'src/app/components/dashboard/dashboard.component';
import { FinanceService } from 'src/app/services/budget/finance.service';
@Component({
  selector: 'app-finance-chart',
  templateUrl: './finance-chart.component.html',
  styleUrls: ['./finance-chart.component.css']
})
export class FinanceChartComponent {

  constructor(private financeService: FinanceService) { }

   // lineChart
   public lineChartData:Array<any> = [
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'expenditures'},
    // {data: [this.financeService.wage], label: 'expenditures'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'finances'},
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: false
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(242, 38, 19, .8)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(34, 167, 240, 0.8)',
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
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
// public barChartOptions:any = {
//   scaleShowVerticalLines: false,
//   responsive: true
// };
// public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
// public barChartType:string = 'bar';
// public barChartLegend:boolean = true;

// public barChartData:any[] = [
//   {data: [65, 59, 80, 81, 56, 55, 40], label: 'expenditures'},
//   {data: [28, 48, 40, 19, 86, 27, 90], label: 'finances'}
// ];

// // events
// public chartClicked(e:any):void {
//   console.log(e);
// }

// public chartHovered(e:any):void {
//   console.log(e);
// }
// };