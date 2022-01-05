import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BettingSuggestionComponent } from './betting-suggestion/betting-suggestion.component';
import { BettingComponent } from './betting.component';
import { CreateBetComponent } from './create-bet/create-bet.component';
import { ListComponent } from './list/list.component';

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
        component: ListComponent,
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BettingRoutingModule { }
