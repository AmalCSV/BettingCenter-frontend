import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BettingCentersRoutingModule } from './betting-centers-routing.module';
import { BettingCentersComponent } from './betting-centers.component';
import { CreateCenterComponent } from './create-center/create-center.component';
import { ListCenterComponent } from './list-center/list-center.component';


@NgModule({
  declarations: [
    BettingCentersComponent,
    CreateCenterComponent,
    ListCenterComponent
  ],
  imports: [
    CommonModule,
    BettingCentersRoutingModule
  ]
})
export class BettingCentersModule { }
