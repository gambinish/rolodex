import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  // baseUrl: string = 'https://swapi.co/api/';
  // baseUrl: string = 'localhost:8000'

  characters: any[] = [];

  constructor(private http: HttpClient) { }

  // getCharacter(id: number) {
  getCharacter() {
    // const url = this.baseUrl + 'people/';
    const url = 'http://localhost:8000' + '/users'
    console.log(url)
    return this.http.get(url).toPromise();
  }

  addCharacter(character) {
    this.characters.push(character[0])
  }
}