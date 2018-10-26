import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../Services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = 'Search for Contact'

  formData: {
    name: string,
  } = {
      name: ''
    }

  sanityCheck: string = 'sanityCheck'

  characters: any[] = [];

  render: any;

  // characters: string = 'characters';

  constructor(private backend: BackendService) {

  }

  ngOnInit() {
    // simulate database call to retrieve all users
    this.characters = this.backend.characters;

    this.backend.getCharacter()
      .then((data) => {
        this.render = data.results;
        console.log(this.render)
      })
  }

}