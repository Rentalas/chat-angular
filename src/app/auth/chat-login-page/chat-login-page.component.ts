import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat-login-page',
  templateUrl: './chat-login-page.component.html',
  styleUrls: ['./chat-login-page.component.scss']
})
export class ChatLoginPageComponent {

  name = new FormControl('');
  hasError: boolean;
  errorMessage='You shall not pass';

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  logIn() {
    console.log('start', this.name.value);

    this.authService.authorize(this.name.value).pipe(
      take(1),
    ).subscribe(isAutorized => {
      console.log(isAutorized);

      if(!isAutorized) {
        this.hasError = true;
        return
      }

      this.hasError = false;
      console.log('we here');

      this.router.navigate(["chat"])
    });
  }
}
