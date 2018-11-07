import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../Services/backend.service';

@Component({
  selector: 'create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {

  formData: {
    name: string,
    email: string
  } = {
      name: '',
      email: ''
    }

  characters: any[] = [];

  render: any;

  sanityCheck: string = 'Sanity Check'

  constructor(private backend: BackendService) { }

  ngOnInit() {
    // simulate database call to retrieve all users smoke test
    this.characters = this.backend.characters;

    this.backend.getCharacter()
      .then((data) => {
        // console.log('data:', data)
        this.render = data;
        console.log('this.render', this.render)
      })
      .catch(err => {
        console.log(err)
      })

  }

  addContact() {
    console.log('createContact')
    console.log('this.formData', this.formData)
    this.backend.addContact()
      .then((data => {
        console.log('addContact()', data);
      }))
      .catch((err) => {
        console.log(err);
      })

  }

}
