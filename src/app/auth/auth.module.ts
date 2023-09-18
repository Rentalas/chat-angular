import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatLoginPageComponent } from './chat-login-page/chat-login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [ChatLoginPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
