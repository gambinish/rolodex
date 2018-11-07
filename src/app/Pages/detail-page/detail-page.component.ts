import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../Services/backend.service';
// import { LocationStrategy } from '@angular/common';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class DetailPageComponent implements OnInit {

  sanityCheck: string = 'sanityCheck'

  characters: any[] = [];

  render: any;

  contactName: string;

  contactEmail: string;

  test: string = 'TEST RENDER'

  id: number;

  constructor(private backend: BackendService, private location: Location) { }

  ngOnInit() {
    // simulate database call to retrieve all users
    this.characters = this.backend.characters;

    this.backend.getCharacter()
      .then((data) => {
        this.render = data;
        // console.log(contactList)
        this.render = this.render.filter(contact => {
          if (`/users/${contact.id}` === this.location.path()) {
            this.contactName = contact.name.toString();
            this.contactEmail = contact.email.toString();
          }
        })
      })
    console.log('dynamic URL: ', this.location.path())
  }

}
