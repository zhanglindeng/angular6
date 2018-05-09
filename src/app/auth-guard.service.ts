import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  // TODO canActivate
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log(route.component); // undefined
    console.log(state.url); // /home


    return true;
  }


  constructor() {
  }


}
