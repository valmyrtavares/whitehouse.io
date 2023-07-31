import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminGuardService implements CanActivate {
  currentRoute: boolean = false;
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    start: RouterStateSnapshot
  ): boolean {
    if (this.currentRoute) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
