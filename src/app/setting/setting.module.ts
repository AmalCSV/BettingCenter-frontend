import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { ConfigComponent } from './config/config.component';
import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { SettingService } from './setting.service';
@NgModule({
  declarations: [
    SettingComponent,
    ConfigComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    SharedModule
  ],
  providers: [
    SettingService
  ]
})
export class SettingModule { }
