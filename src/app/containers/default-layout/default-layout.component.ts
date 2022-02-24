import { Router } from '@angular/router';
import {Component} from '@angular/core';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private router: Router) {

  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    sessionStorage.removeItem('authData');
    this.router.navigate(['/auth/sign-in']);
  }
}
