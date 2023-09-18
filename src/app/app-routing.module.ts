import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate, mapToResolve } from '@angular/router';
import { ChatLoginPageComponent } from './auth/chat-login-page/chat-login-page.component';
import { RoleGuard } from './role.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule),
    canActivate: mapToCanActivate([RoleGuard]),
  },
  {
    path: '',
    pathMatch: "full",
    redirectTo: 'chat'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
