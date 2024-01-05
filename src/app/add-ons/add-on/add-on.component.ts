import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-on',
  templateUrl: './add-on.component.html',
  styleUrls: ['./add-on.component.css']
})
export class AddOnComponent {
 @Input() addonId;
 @Input() addonDetails;

}
