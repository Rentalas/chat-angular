import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatLoginPageComponent } from './auth/chat-login-page/chat-login-page.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule),
    canActivate: [RoleGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
