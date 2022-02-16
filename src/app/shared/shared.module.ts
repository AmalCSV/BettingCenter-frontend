import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { TableListComponent } from './table-list/table-list.component';
import { AlertService } from './alert.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SharedApiService } from './shared-api.service';


@NgModule({
  declarations: [
    TableListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  exports: [
    TableListComponent
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    AlertService,
    SharedApiService
  ]
})
export class SharedModule { }
