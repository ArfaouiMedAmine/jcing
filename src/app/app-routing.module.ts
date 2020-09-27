import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { UserBoardComponent } from './user-board/user-board.component';
import { SgBoardComponent } from './sg-board/sg-board.component';
import { TresorierBoardComponent } from './tresorier-board/tresorier-board.component';
import { PresBoardComponent } from './pres-board/pres-board.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: UserBoardComponent },
  { path: 'sg', component: SgBoardComponent },
  { path: 'tresorier', component: TresorierBoardComponent },
  { path: 'pres', component: PresBoardComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }