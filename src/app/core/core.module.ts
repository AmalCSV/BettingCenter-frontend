import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BettingLoaderComponent } from './betting-loader/betting-loader.component';
import { LoaderInterceptorService } from './loader-interceptor.service';
import { LoaderService } from './loader.service';

@NgModule({
  declarations: [
    BettingLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BettingLoaderComponent
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    },
  ]
})
export class CoreModule { }
