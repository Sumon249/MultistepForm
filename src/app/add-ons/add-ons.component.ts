import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RetrieveDataService } from '../retrieve-data.service';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.css']
})
export class AddOnsComponent implements OnInit {
  billingType;
  addons;
  currentParams;
  constructor(private router:Router, private route:ActivatedRoute, private retrieveDataService: RetrieveDataService){

  }
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.billingType = params.billing;
      console.log(params.billing);
    });
    this.addons = this.retrieveDataService.getAddonDetails();
    this.currentParams = this.route.snapshot.queryParams;
  }

  navigateNextPage() {
    this.router.navigate(['/finish'], {queryParams: this.currentParams})
  }
  navigatePrevPage() {
    this.router.navigate(['/select-plan'],  {queryParams: this.currentParams});
  }
}
