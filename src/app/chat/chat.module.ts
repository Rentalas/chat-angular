import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatUserListComponent } from './chat-user-list/chat-user-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatComponent,
    ChatInputComponent,
    ChatUserListComponent,
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ChatModule { }
