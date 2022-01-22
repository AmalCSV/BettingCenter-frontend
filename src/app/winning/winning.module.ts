import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WinningRoutingModule } from './winning-routing.module';
import { WinningComponent } from './winning.component';
import { AddWinningComponent } from './add-winning/add-winning.component';
import { ListWinningComponent } from './list-winning/list-winning.component';


@NgModule({
  declarations: [
    WinningComponent,
    AddWinningComponent,
    ListWinningComponent
  ],
  imports: [
    CommonModule,
    WinningRoutingModule
  ]
})
export class WinningModule { }
