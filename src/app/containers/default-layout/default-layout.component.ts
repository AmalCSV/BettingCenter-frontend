import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import { SharedApiService } from '../../shared/shared-api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements AfterViewInit{
  public sidebarMinimized = false;
  public navItems = navItems;
  public closingTime = [];

  constructor(private router: Router, private datePipe: DatePipe) {

  }

  ngAfterViewInit() {
   const closeList  = sessionStorage.getItem('bettingClose');
   this.closingTime = closeList ? JSON.parse(closeList).filter(f => {
    const today = this.datePipe.transform(new Date(), 'yyyy-MM-dd')
     if(f.bettingDate === today) {
      return f;
     }
   }): [];
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    sessionStorage.removeItem('authData');
    this.router.navigate(['/auth/sign-in']);
  }

  // getClosingTime() {
  //   this.sharedApiService.bettingClosing().subscribe((res : any) => {
  //     this.closingTime = res.Success ? res.data : {};
  //   }, error => {
  //     console.log(error)
  //   });
  // }
}
