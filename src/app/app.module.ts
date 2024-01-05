import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepsNavbarComponent } from './steps-navbar/steps-navbar.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PlanSelectComponent } from './plan-select/plan-select.component';
import { PlanCardComponent } from './plan-select/plan-card/plan-card.component';
import { AddOnsComponent } from './add-ons/add-ons.component';
import { FinishingUpComponent } from './finishing-up/finishing-up.component';
import { FormsModule } from '@angular/forms';
import { AddOnComponent } from './add-ons/add-on/add-on.component';

@NgModule({
  declarations: [
    AppComponent,
    StepsNavbarComponent,
    PersonalInfoComponent,
    PlanSelectComponent,
    PlanCardComponent,
    AddOnsComponent,
    FinishingUpComponent,
    AddOnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
