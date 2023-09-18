import { Component } from '@angular/core';
import { Message, User } from '../models/models';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  messages: Message[];
  users: User[];

  private getMessages() {

  }

  private getUsers() {

  }
}
