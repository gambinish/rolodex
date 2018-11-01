import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../Services/backend.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  sanityCheck: string = 'sanityCheck'

  characters: any[] = [];

  render: any;

  constructor(private backend: BackendService) { }

  // ngOnInit() {
  //   // simulate database call to retrieve all users
  //   this.characters = this.backend.characters;
  //   // console.log(this.characters)

  //   this.backend.getDetail()
  //     .then((data) => {
  //       console.log('data:', data)
  //       this.render = data;
  //       console.log('this.render', this.render)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

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

}
