import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { GameFormComponent } from './game-form/game-form.component';
 
const appRoutes: Routes = [
  { path: 'user-form', component: UserFormComponent },
  { path: 'game-form',        component: GameFormComponent },
  { path: '',   redirectTo: '/game-form', pathMatch: 'full' }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}