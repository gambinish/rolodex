import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { DetailPageComponent } from './Pages/detail-page/detail-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/:id', component: DetailPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }