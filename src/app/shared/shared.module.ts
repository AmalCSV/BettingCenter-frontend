import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { TableListComponent } from './table-list/table-list.component';



@NgModule({
  declarations: [
    TableListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    TableListComponent
  ],
  providers: [
    AuthenticationService,
    AuthGuardService
  ]
})
export class SharedModule { }
