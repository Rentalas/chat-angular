import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ChatLoginPageComponent } from './chat-login-page/chat-login-page.component';

const routes: Route[] = [
  {path: '', component: ChatLoginPageComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
