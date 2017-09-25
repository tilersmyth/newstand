import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardLogin implements CanActivate {

  constructor(public auth: AuthService, private router: Router) {}

  canActivate() {
    if(this.auth.loggedIn && this.auth.currentUser.status === 'pending'){
      this.router.navigate(['/me/account']);
      return true;
    }

    return this.auth.loggedIn;
  }

}
