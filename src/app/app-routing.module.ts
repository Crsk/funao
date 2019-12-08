import { LoginGuard } from './shared/guards/login.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '🔪', pathMatch: 'full' },
  // loginGuard is used to prevent entering to the login page if the user is already logged in
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule), canActivate: [LoginGuard] },
  { path: '🔪', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'account', loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule), canActivate: [AuthGuard] },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
  { path: '**', redirectTo: '🔪' } // redirect to home any wrong path
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})

export class AppRoutingModule { }
