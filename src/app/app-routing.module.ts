import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigInViewComponent } from './views/sig-in-view/sig-in-view.component';
import { CurrentChatComponent } from './components/current-chat/current-chat.component';
import { MainComponent } from './views/main/main.component';
import { AuthGuard } from './utils/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {path:'', component: MainComponent, canActivate: [AuthGuard]},
  {path:'signin', component: SigInViewComponent},
  {path:'signup', component: SigInViewComponent},
  {path:':room', component: CurrentChatComponent},
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
