import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BettingRoutingModule } from './betting-routing.module';
import { BettingComponent } from './betting.component';
import { ListComponent } from './list/list.component';
import { BettingService } from './betting.service';
import { SharedModule } from '../shared/shared.module';
import { CreateBetComponent } from './create-bet/create-bet.component';
import { BettingSuggestionComponent } from './betting-suggestion/betting-suggestion.component';


@NgModule({
  declarations: [
    BettingComponent,
    ListComponent,
    CreateBetComponent,
    BettingSuggestionComponent
  ],
  imports: [
    CommonModule,
    BettingRoutingModule,
    SharedModule
  ],
  providers: [
    BettingService
  ]
})
export class BettingModule { }
