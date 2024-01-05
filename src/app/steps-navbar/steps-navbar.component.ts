import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-steps-navbar',
  templateUrl: './steps-navbar.component.html',
  styleUrls: ['./steps-navbar.component.css']
})
export class StepsNavbarComponent {
  @Input() selected = 0;
  steps = ["Your info", "Select Plan", "Add-ons", "Summary"];
}
