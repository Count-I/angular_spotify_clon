import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigInViewComponent } from './views/sig-in-view/sig-in-view.component';
import { CurrentChatComponent } from './components/current-chat/current-chat.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'chat',
    pathMatch: 'full',
  },
  {path:'signin', component: SigInViewComponent},
  {path:'signup', component: SigInViewComponent},
  {path:'chat', component: CurrentChatComponent},
  {
    path: '**',
    redirectTo: 'chat',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
