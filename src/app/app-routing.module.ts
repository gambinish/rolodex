import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ViewContactsComponent } from './Pages/view-contacts/view-contacts.component';
import { CreateContactComponent } from './Pages/create-contact/create-contact.component';
import { MyProfileComponent } from './Pages/my-profile/my-profile.component';
// import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'view-contacts', component: ViewContactsComponent },
  { path: 'create-contact', component: CreateContactComponent },
  { path: 'my-profile', component: MyProfileComponent },
  // { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }