import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})

export class EditPlayerComponent implements OnInit {
  playerForm = new FormGroup({
    name: new FormControl(),
    position: new FormControl(),
    age: new FormControl()
  });

  @Input() player: Player;
  constructor() { }

  ngOnInit() {
  }

}
