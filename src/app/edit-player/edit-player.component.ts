import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
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

  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();
  @Input() player: Player;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.playerForm.reset();    
    if (this.player) {
      this.playerForm.patchValue(this.player);
    }
  }

  reset() {
    this.ngOnChanges();
  }

  // onSubmit() {
  //   let player = Object.assign({}, this.player, this.playerForm.value);
  //   this.submitted.emit(player);
  //   this.ngOnChanges();
  // }
}
