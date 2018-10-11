import { Component } from '@angular/core';
import { Tile } from '../../pubg-bingo-types';
import * as _ from 'lodash';

@Component({
  selector: 'bingo-board',
  templateUrl: 'bingo-board.html',
  styleUrls: ['bingo-board.scss']
})
export class BingoBoard {
  bingoTiles: Tile[] = [
    {
      description: '"Ready Up" "I just did th- wait what"',
      checked: false
    },
    {
      description: '"Get that loot crate"',
      checked: false
    },
    {
      description: '"My game crashed"',
      checked: false
    },
    {
      description: '"I need to watch that death cam"',
      checked: false
    },
    {
      description: '"Let me drive." crashes vehicle',
      checked: false
    },
    {
      description: '"You are our decoy"',
      checked: false
    },
    {
      description: '"I am done with this game" plays again the next day',
      checked: false
    },
    {
      description: '"Let me get a drink really fast"',
      checked: false
    },
    {
      description: '"I have a motor, who do we ditch?"',
      checked: false
    },
    {
      description: '"Stop honking or I will shoot you"',
      checked: false
    },
    {
      description: '"I found a pan, we won"',
      checked: false
    },
    {
      description: '"All abord the bus"',
      checked: false
    },
    {
      description: '"I see someone over there" "Where?"',
      checked: false
    },
    {
      description: '"Don\'t judge my aim"',
      checked: false
    },
    {
      description: '"I haven\'t loaded yet, are we in the plane?"',
      checked: false
    },
    {
      description: '"Who picked up the 8x"',
      checked: false
    },
    {
      description: '"Nobody ever drops here" everyone suddenly drops here',
      checked: false
    },
    {
      description: '"I have attachments for weapons i don\'t have"',
      checked: false
    },
    {
      description: '"We are being flanked from four angles"',
      checked: false
    },
    {
      description: '"Revive me"',
      checked: false
    },
    {
      description: '"Did someone shoot at us?" "No I misclicked"',
      checked: false
    },
    {
      description: '"I have never been killed by a red zone"',
      checked: false
    },
    {
      description: '"I found a crossbow"',
      checked: false
    },
    {
      description: '"What is the plan?" "I have none"',
      checked: false
    }
  ];

  centerTile: Tile = {
    description: 'E-Sports Ready',
    checked: true,
    default: true
  };

  tiles: Tile[];

  constructor() {
    this.shuffleTiles();
  }

  shuffleTiles() {
    this.tiles = _.shuffle(this.bingoTiles);
    this.tiles.forEach(tile => tile.checked = false);
    this.tiles.splice(12, 0, this.centerTile);
  }
}
