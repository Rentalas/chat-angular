import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserNameController } from 'src/back/controller';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  constructor(private apiService: UserNameController) { }

  validateName(name): Observable<boolean> {
    return this.apiService.registerName(name);
  }
}
