import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.css']
})
export class PlanCardComponent implements OnInit{

  @Input() currPlan: { "imgUrl": string, "name": string, "monthly_price": string, "yearly_price": string };
  @Input() billingType;
  @Input() price;

  plan:string;
  @Output() planSelected: EventEmitter<any> = new EventEmitter;

  constructor() {


  }
  onPlanSelect($event: any) {
    this.planSelected.emit(this.plan);

  }
  ngOnInit(): void {

  }
}
