import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvestmentsService {
  investments: [];

  constructor(private http: HttpClient) { }

  private investUrl = 'https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,tsl,s,goog,dis'
    + 'amd,fit,ko,nu,twtr,nke,t,ge,ebay,msft,gpro,sbux,baba,pypl,f,amzn,'
    + 'nvda,siri,grpn,crm,uaa,p,adbe&types=quote,news,chart&range=1m&last=5';

  // getInvestments(investments: any) {
  //   this.http.get(this.investUrl)
  //     .subscribe((investData) => {
  //       console.log(investData);
  //       investments = investData;
  //       console.log(investments);
  //       return investments;
  //     });
  // }
  getInvestments(investments) {
    return this.http.get(this.investUrl, investments);
  }
}
