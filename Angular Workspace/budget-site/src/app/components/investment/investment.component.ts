import { Component, OnInit } from '@angular/core';
import { InvestmentsService } from 'src/app/services/investments.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {
  investmentSubscription: Subscription;
  presentation;
  stockInfo;
  stockPresent = document.getElementById('stockInfo');
  companyList = ['AAPL', 'ADBE', 'AMD', 'AMZN', 'BABA', 'CRM', 'DIS', 'EBAY',
    'F', 'FB', 'FIT', 'GE', 'GOOG', 'GPRO', 'GRPN', 'KO', 'MSFT', 'NKE',
    'NVDA', 'P', 'PYPL', 'S', 'SBUX', 'SIRI', 'T', 'TWTR', 'UAA'];

  constructor(private investService: InvestmentsService) { }

  ngOnInit() {
    // this.investService.getInvestments(this.investService.investments){
    //   console.log(this.investService.investments);
    // }
    this.investmentSubscription = this.investService.getInvestments(this.investService.investments).subscribe((payload) => {
      console.log(payload);
      this.stockInfo = payload;
      console.log(this.stockInfo);
      // this.presentStock();
      return this.stockInfo;
    });


  }

  onInvest() {
    // this.investService.getInvestments(this.investService.investments){
    // this.investments = this.investService.investments;
    //   console.log(this.investments);
    // }

  }

  presentStock = function () {
    for (let i = 0; i < 10; i++) {
      this.presentation =
        `<div class="presentationDiv col-md-4">
            <h2>"${this.stockInfo[this.companyList[i]].quote.companyName}"</h2>
            <hr>
            <h4>${this.stockInfo[this.this.companyList[i]].quote.symbol}</h4>
            <hr>
            <p>Primary Exchange: <span class="changeP">${this.stockInfo[this.companyList[i]].quote.primaryExchange}</span></p>
            <p>Latest Price: <span class="aboveZero">$${this.stockInfo[this.companyList[i]].quote.latestPrice}</span></p>
            <p>Change: <span class="changeP">${this.stockInfo[this.companyList[i]].quote.changePercent}</span></p>
            <p>52 Week Low: <span class="aboveZero">$${this.stockInfo[this.companyList[i]].quote.week52Low}</span></p>
            <p>52 Week High: <span class="aboveZero">$${this.stockInfo[this.companyList[i]].quote.week52High}</span></p>
            </div>`;
      this.stockPresent.insertAdjacentHTML('beforeend', this.presentation);
      console.log(this.presentation);
    }
  };
}
