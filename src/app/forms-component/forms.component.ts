import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Player } from '../models/player';

@Component({
  selector: 'forms-component',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  model: Player;

  constructor() {
    this.model = new Player();
  }

  ngOnInit() {
  }
}
