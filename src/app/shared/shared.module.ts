import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { TableListComponent } from './table-list/table-list.component';
import { SharedApiService } from './shared-api.service';
import { AlertComponent } from './alert/alert.component';
import { EndTimeComponent } from './end-time/end-time.component';


@NgModule({
  declarations: [
    TableListComponent,
    AlertComponent,
    EndTimeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    TableListComponent,
    AlertComponent
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    SharedApiService
  ]
})
export class SharedModule { }
