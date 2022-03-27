import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { ConfigComponent } from './config/config.component';
import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { SettingService } from './setting.service';
import { ClosingTimeComponent } from './closing-time/closing-time.component';
@NgModule({
  declarations: [
    SettingComponent,
    ConfigComponent,
    ClosingTimeComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    SettingService
  ]
})
export class SettingModule { }
