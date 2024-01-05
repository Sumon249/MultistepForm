import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.css']
})
export class PlanCardComponent implements OnInit{
@Input() currPlan:{"imgUrl": string, "name":string, "monthly_price":string, "yearly_price": string};
  constructor(){


  }
  ngOnInit(): void {
    console.log(this.currPlan.name);
  }
}
