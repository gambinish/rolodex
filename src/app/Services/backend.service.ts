import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  // baseUrl: string = 'https://swapi.co/api/';
  baseUrl: string = 'http://localhost:8000'
  // baseUrl: string = 'http://34.219.79.72:8000'

  characters: any[] = [];

  id: number;

  constructor(private http: HttpClient) { }

  getCharacter() {

    const url = this.baseUrl + '/users'
    // const url = this.baseUrl + `/users{$id}`
    console.log(url)
    return this.http.get(url).toPromise();

  }

  getDetail() {

    const url = `http://localhost:8000/users/${this.id}`;
    // const url = this.baseUrl + `/users/${this.id}`
    // const url = `http://localhost:8000/users/8`;
    // const url = this.baseUrl + `/users{$id}` 
    console.log(url)
    return this.http.get(url).toPromise();

  }

  addContact(data) {
    // return 'ADDING CONTACT'
    const url = `http://localhost:8000/create`

    console.log(url)
    return this.http.post(url, data).toPromise();

  }


}