import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorService } from './error.service';
import { LoaderService } from './loader.service';
import { LoaderInterceptorService } from './loader-interceptor.service';
import { BettingLoaderComponent } from './betting-loader/betting-loader.component';

@NgModule({
  declarations: [
    
  
    BettingLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ErrorService,
    LoaderService,
    LoaderInterceptorService
  ]
})
export class CoreModule { }
