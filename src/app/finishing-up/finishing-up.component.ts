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
  addons = [];
  selectedAddonId = [];
  selectedAddons = [];
  finalPrice:number;

  constructor(private route:ActivatedRoute, private router:Router, private retrieveDataService: RetrieveDataService){

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedPlan = params.plan;
      this.billingType = params.billing;
      this.selectedAddonId = params.addons;

    })
    this.planPrice = this.retrieveDataService.getPlanPrice(this.selectedPlan, this.billingType);
    this.addons = this.retrieveDataService.getAddonDetails();
    this.selectedAddonId.map(addonId => {
      this.selectedAddons.push(this.addons[addonId]);
    });
    console.log(this.selectedAddons);
    this.finalPrice =  this.calculateFinalPrice();
    console.log(this.finalPrice);

  }

  calculateFinalPrice(){
    let addonsPrice:number = 0;
    let total;
    if(this.billingType === 'monthly'){
      this.selectedAddons.map(addon => {
        addonsPrice += parseInt(addon.monthly_price) ;
      })
    }
    else if(this.billingType === 'yearly') {

      this.selectedAddons.map(addon => {
        addonsPrice += parseInt(addon.yearly_price);
      })
    }
    total = addonsPrice + parseInt(this.planPrice);
    return total;
  }
  navigateNextPage() {
    this.router.navigate(['/finish'], {queryParamsHandling: 'merge'})
  }
  navigatePrevPage() {
    this.router.navigate(['/select-addons'],  {queryParamsHandling: 'merge'});
  }
}
