import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth/services/auth.service";

@Injectable({providedIn: "root"})
export class RoleGuard {
    constructor(
        private authService: AuthService,
        private router: Router,
        ) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(!this.authService.isAuthorized()) {
            this.router.navigate(['login']);
            return false;
        }

        return true;
    }
}

