import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../Services/backend.service';
// import { WrappedNodeExpr } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  title: string = 'Search for Contact'

  formData: {
    name: string,
    isSelected: boolean
  } = {
      name: '',
      isSelected: false
    }

  sanityCheck: string = 'sanityCheck'

  characters: any[] = [];

  render: any;

  constructor(private backend: BackendService) { }

  ngOnInit() {
    // simulate database call to retrieve all users
    this.characters = this.backend.characters;

    this.backend.getCharacter()
      .then((data) => {
        console.log('data:', data)
        this.render = data;
        console.log('this.render', this.render)
      })
      .catch(err => {
        console.log(err)
      })
  }

  searchByName(event: string) {

    let searchResults = []

    let input = this.formData.name.toString().toUpperCase()
    // simulate database call to re-render all contactCards
    this.backend.getCharacter()
      .then((data) => {
        // then set this.render to the data
        this.render = data;
        // filter this array based on the input defined above
        this.render = this.render.filter(element => {
          let target = element.name.toString().toUpperCase()
          if (target.includes(input)) {
            searchResults.push(element)
          }
        })
        this.render = searchResults;
      })
      .catch((err) => {
        console.log(err)
      })

  }

}