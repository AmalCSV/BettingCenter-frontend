import { RaceComponent } from './race/race.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BettingSuggestionComponent } from './betting-suggestion/betting-suggestion.component';
import { BettingComponent } from './betting.component';
import { CreateBcenterComponent } from './create-bcenter/create-bcenter.component';
import { CreateBetComponent } from './create-bet/create-bet.component';
import { ListBcenterComponent } from './list-bcenter/list-bcenter.component';
import { ListBetComponent } from './list-bet/list-bet.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Betting'
    },
    component: BettingComponent,
    children: [
      {
        path: '',
        redirectTo: 'all'
      },
      {
        path: 'all',
        component: ListBetComponent,
        data: {
          title: 'Betting List'
        }
      },
      {
        path: 'create-bet',
        component: CreateBetComponent,
        data: {
          title: 'Create Bet'
        }
      },
      {
        path: 'betting-suggeestion',
        component: BettingSuggestionComponent,
        data: {
          title: 'Betting Suggeestion'
        }
      },
      {
        path: 'create-center',
        component: CreateBcenterComponent,
        data: {
          title: 'Create Betting Center'
        }
      },
      {
        path: 'list-centers',
        component: ListBcenterComponent,
        data: {
          title: 'List Betting Centers'
        }
      },
      {
        path: 'race',
        component: RaceComponent,
        data: {
          title: 'Race Options'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BettingRoutingModule { }
