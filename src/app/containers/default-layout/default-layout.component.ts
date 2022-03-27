import { Router } from '@angular/router';
import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { SharedApiService } from '../../shared/shared-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  public closingTime: any;

  constructor(private router: Router, ) {

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
