import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BettingRoutingModule } from './betting-routing.module';
import { BettingSuggestionComponent } from './betting-suggestion/betting-suggestion.component';
import { BettingComponent } from './betting.component';
import { BettingService } from './betting.service';
import { CreateBcenterComponent } from './create-bcenter/create-bcenter.component';
import { CreateBetComponent } from './create-bet/create-bet.component';
import { ListBcenterComponent } from './list-bcenter/list-bcenter.component';
import { ListBetComponent } from './list-bet/list-bet.component';
import { RaceComponent } from './race/race.component';
import { CalculateWinningComponent } from './calculate-winning/calculate-winning.component';



@NgModule({
  declarations: [
    BettingComponent,
    CreateBetComponent,
    BettingSuggestionComponent,
    CreateBcenterComponent,
    ListBcenterComponent,
    ListBetComponent,
    RaceComponent,
    CalculateWinningComponent
  ],
  imports: [
    CommonModule,
    BettingRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    BettingService
  ]
})
export class BettingModule { }
