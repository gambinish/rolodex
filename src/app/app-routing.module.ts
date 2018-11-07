import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { DetailPageComponent } from './Pages/detail-page/detail-page.component';
import { CreateContactComponent } from './Pages/create-contact/create-contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/:id', component: DetailPageComponent },
  { path: 'create', component: CreateContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }