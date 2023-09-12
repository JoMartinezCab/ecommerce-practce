import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-result',
  templateUrl: './payment-result.component.html',
  styleUrls: ['./payment-result.component.css']
})
export class PaymentResultComponent {
  public details:any;
  public routeState: any;

  constructor(
    private router: Router
  ) {

    if(this.router.getCurrentNavigation()?.extras.state){
      this.routeState = this.router.getCurrentNavigation()?.extras.state;

      if(this.routeState){
        this.details = this.routeState.data;

        console.log(this.details);
      }
    }
  }
}
