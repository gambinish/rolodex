import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../Services/backend.service';
import { WrappedNodeExpr } from '@angular/compiler';

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

  // characters: string = 'characters';

  constructor(private backend: BackendService) {

  }

  ngOnInit() {
    // simulate database call to retrieve all users
    this.characters = this.backend.characters;

    this.backend.getCharacter()
      .then((data) => {
        this.render = data.results
        console.log('this.render', this.render)
      })
  }



  searchByName(event: string) {

    let result = []

    let input = this.formData.name.toString().toUpperCase()
    console.log(input)

    this.render.forEach(element => {
      let target = element.name.toString().toUpperCase()
      if (!target.includes(input)) {
        console.log('NO MATCH')
      } else {
        console.log('MATCH')
        result.push(element)
      };
    })
    console.log('result: ', result)
    this.render = result;

    // let input = this.formData.name.toString()
    // console.log('input: ', input)


    // console.log(`input "${input}" ${target.includes(input) ? `${target}` : 'NO MATCH'} in the sentence`);
    // expected output: "The word "fox" is in the sentence"

  }

}