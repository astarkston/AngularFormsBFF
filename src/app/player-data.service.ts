import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PlayerDataService {

  constructor(private http: Http) { }

  getPlayers() {
    return this.http.get('assets/data.json')
    .subscribe(res => res.json())
  }
}