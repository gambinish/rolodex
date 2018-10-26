import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl: string = 'https://swapi.co/api/';

  characters: any[] = [];

  constructor(private http: HttpClient) { }

  // getCharacter(id: number) {
  getCharacter() {
    const url = this.baseUrl + 'people/';
    return this.http.get(url).toPromise();
  }

  addCharacter(character) {
    this.characters.push(character[0])
  }
}