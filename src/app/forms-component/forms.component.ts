import { Component, OnInit } from '@angular/core';
import { NgModel, FormGroup, FormControl } from '@angular/forms';

import { PlayerDataService } from '../player-data.service';

import { Player } from '../models/player';

@Component({
  selector: 'forms-component',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  players: Player[];
  selectedPlayer: Player;
  submitted: boolean = false;
  editMode: boolean = false;

  constructor(private playerSerivce: PlayerDataService) {
  }

  ngOnInit() {
    this.playerSerivce.getPlayers().subscribe(players => {
      this.players = players;
    });
  }

  editPlayer(player: Player) {
    this.editMode = true;
    this.selectedPlayer = player;
  }

  handleSubmit(player) {
    this.submitted = true;
    // this.editMode = false;

    // let ix = this.players.indexOf(this.selectedPlayer);
    // this.players[ix] = Object.assign({}, this.players[ix], player);
    // this.wishThemHappyBirthday();
  }
}
