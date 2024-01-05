import { Component } from '@angular/core';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.css']
})
export class AddOnsComponent {
  addons = [{
    "name": "Online Service",
    "desc": "Access to multiplayer service",
    "price": "+$1/mo"
  },
  {
    "name": "Larger storage",
    "desc": "Extra 1TB of cloud storage",
    "price": "+$2/mo"
  },
  {
    "name": "Customizable profile",
    "desc": "Custom Theme on Profile",
    "price": "+$2/mo"
  }
]
}
