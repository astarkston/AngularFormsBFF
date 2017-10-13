import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Player } from '../models/player';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})

export class EditPlayerComponent implements OnInit, OnChanges {
  playerForm = this.fb.group({
    name: ['', Validators.required],
    position: '',
    age: '',
  });

  @Input() player: Player;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (this.player) {
      this.playerForm.reset();
      this.playerForm.patchValue(this.player);
    }
  }
}
