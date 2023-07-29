import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigInViewComponent } from './views/sig-in-view/sig-in-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  },
  {path:'signin', component: SigInViewComponent},
  {path:'signup', component: SigInViewComponent},
  {
    path: '**',
    redirectTo: 'signin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
