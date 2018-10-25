import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { HeaderComponent } from './Shared/header.component';
import { ViewContactsComponent } from './Pages/view-contacts/view-contacts.component';
import { CreateContactComponent } from './Pages/create-contact/create-contact.component';
import { MyProfileComponent } from './Pages/my-profile/my-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    HeaderComponent,
    ViewContactsComponent,
    CreateContactComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
