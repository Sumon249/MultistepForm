import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOnsComponent } from './add-ons/add-ons.component';
import { FinishingUpComponent } from './finishing-up/finishing-up.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PlanSelectComponent } from './plan-select/plan-select.component';

const routes: Routes = [
  {path:'',component:PersonalInfoComponent},
  {path:'info', component:PersonalInfoComponent},
  {path: 'select-plan', component:PlanSelectComponent},
  {path: 'select-addons', component:AddOnsComponent},
  {path: 'finish', component:FinishingUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
