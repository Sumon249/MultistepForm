import { Injectable } from '@angular/core';
import PlanData from "../assets/PlanData.json"
@Injectable({
  providedIn: 'root'
})
export class PlanDataService {

  constructor() {
  }
  getPlanDetails(){
    return PlanData.plans;
  }
}
