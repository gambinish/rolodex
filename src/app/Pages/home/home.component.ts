import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = 'This is a Title String';
  subtitle: string;
  data: {
    header: string
  } = {
      header: 'this is a title header'
    };

  constructor() {
    const subtitle: string = 'This is a substring';
  }

  ngOnInit() {
  }

}