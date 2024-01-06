import { Injectable } from '@angular/core';
import PlanData from "../assets/PlanData.json"
import AddonData from "../assets/AddonData.json"
@Injectable({
  providedIn: 'root'
})
export class RetrieveDataService {
  plans = [];
  constructor() {
  }
  getPlanDetails(){
    return PlanData.plans;
  }

  getPlanPrice(planName:string, billingType:string){
    this.plans = PlanData.plans.filter(plan => {
      return plan.name.toLowerCase() === planName.toLowerCase();
    });

    if(billingType === 'monthly'){
      return this.plans[0].monthly_price;
    }

    else if(billingType === 'yearly'){
      return this.plans[0].yearly_price;
    }
  }

  getAddonDetails(){
    return AddonData.addons;
  }

}
