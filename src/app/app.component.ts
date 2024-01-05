import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  currentRoute: any;
  routeStepMapping = {
    "info": 0,
    "select-plan": 1,
    "select-addons": 2,
    "finish": 3
  }
  currentStep: number;

  constructor(private route:ActivatedRoute, private router:Router){
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Get the current activated route
      this.currentRoute = this.getActiveRoute(this.route);
      this.currentStep = this.routeStepMapping[this.currentRoute];
    });
  }

  getActiveRoute(route: any): any {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.routeConfig?.path || '';
  }

}
