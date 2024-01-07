import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RetrieveDataService } from '../retrieve-data.service';

@Component({
  selector: 'app-plan-select',
  templateUrl: './plan-select.component.html',
  styleUrls: ['./plan-select.component.css']
})
export class PlanSelectComponent implements OnInit{



  plans = [];
  selectedBillingType = "yearly";
  selectedPlan = 'arcade';
  isBillingSelected = true;
  constructor(private retrieveDataService:RetrieveDataService, private router:Router, private route:ActivatedRoute ){

  }
  ngOnInit(): void {
    this.plans = [...this.retrieveDataService.getPlanDetails()];

  }
  onPlanSelect(selectedPlan: any) {
    this.selectedPlan = selectedPlan;
  }
  updateBillingType() {
    this.selectedBillingType = this.isBillingSelected ? 'yearly' : 'monthly';
    console.log(this.selectedBillingType);

  }
  navigateNextPage() {

    this.router.navigate(['/select-addons'], {queryParams: {'billing': this.selectedBillingType, 'plan': this.selectedPlan}})
  }
  navigatePrevPage() {
    this.router.navigate(['/info']);
  }
}
