import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-chat-login-page',
  templateUrl: './chat-login-page.component.html',
  styleUrls: ['./chat-login-page.component.scss']
})
export class ChatLoginPageComponent {

  constructor(authService: AuthService) {

  }

}
