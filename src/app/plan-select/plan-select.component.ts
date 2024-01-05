import { Component, OnInit } from '@angular/core';
import { PlanDataService } from '../plan-data.service';

@Component({
  selector: 'app-plan-select',
  templateUrl: './plan-select.component.html',
  styleUrls: ['./plan-select.component.css']
})
export class PlanSelectComponent implements OnInit{
  plans = [];
  selectedBillingType = false; //False - Monthly &&  True - Yearly
  constructor(private planDataService:PlanDataService ){

  }
  ngOnInit(): void {
    this.plans = [...this.planDataService.getPlanDetails()];
  }
}
