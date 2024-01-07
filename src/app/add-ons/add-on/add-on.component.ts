import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-on',
  templateUrl: './add-on.component.html',
  styleUrls: ['./add-on.component.css']
})
export class AddOnComponent {
 @Input() addonId;
 @Input() addonDetails;
 @Input() billingType;
 @Output() addonSelectedEvent = new EventEmitter<any>();

addonSelected: any;

  change(){
    this.addonSelectedEvent.emit(this.addonSelected);
  }
}
