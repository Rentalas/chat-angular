import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DaoService } from 'src/app/services/dao.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userToken: any;
  private isValid: boolean = false;

  constructor(private daoService: DaoService) { }

  authorize(name: string): Observable<boolean> {
    return this.daoService.validateName(name).pipe(
      tap(isValid => this.isValid = isValid),
    );
  }

  isAuthorized(): boolean {
    return this.isValid;
  }
}
