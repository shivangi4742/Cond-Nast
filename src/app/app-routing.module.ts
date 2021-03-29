import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularnewsComponent } from './popularnews/popularnews.component';

const routes: Routes = [{
  path: 'news', component: PopularnewsComponent
},
{ path: '', redirectTo: 'news', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
