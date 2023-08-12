import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class RoleGuard {
    canActivate(userName: string): Observable<boolean> {

    }
}

export const canActivateRoleGuard: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    }