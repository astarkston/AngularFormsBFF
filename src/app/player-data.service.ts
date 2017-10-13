import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import { Player } from './models/player';

@Injectable()
export class PlayerDataService {

  constructor(private http: Http) { }

  getPlayers() {
    return this.http.get('assets/data.json')
    .map(res => res.json())
    .map(players => {
      return players.map(player => {
        let p = new Player();
        p.id = player.Id;
        p.age = player.Age;
        p.name = player.Name;
        p.position = player.Pos;
        return p;
      });
    });
  }
}