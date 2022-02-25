import { AuthGuardService } from './../shared/auth-guard.service';
import { ConfigComponent } from './config/config.component';
import { SettingComponent } from './setting.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Setting'
    },
    component: SettingComponent,
    children: [
      {
        path: '',
        redirectTo: 'config'
      },
      {
        path: 'config',
        component: ConfigComponent,
        data: {
          title: 'Configuration'
        },
        canActivate: [AuthGuardService]
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
