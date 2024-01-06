import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RetrieveDataService } from '../retrieve-data.service';

@Component({
  selector: 'app-finishing-up',
  templateUrl: './finishing-up.component.html',
  styleUrls: ['./finishing-up.component.css']
})
export class FinishingUpComponent implements OnInit{
  selectedPlan;
  billingType;
  planPrice;
  constructor(private route:ActivatedRoute, private router:Router, private retrieveDataService: RetrieveDataService){

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedPlan = params.plan;
      this.billingType = params.billing;
    })
    this.planPrice = this.retrieveDataService.getPlanPrice(this.selectedPlan, this.billingType);
  }

}
