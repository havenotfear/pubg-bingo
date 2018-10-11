import { Component, Input } from '@angular/core';
import { Tile } from '../../pubg-bingo-types';

@Component({
  selector: 'bingo-tile',
  templateUrl: 'bingo-tile.html',
  styleUrls: ['bingo-tile.scss']
})
export class BingoTile {
  @Input()
  tile: Tile;
  constructor() {}

  checked() {
    if (!this.tile.default) {
      this.tile.checked = !this.tile.checked;
    }
  }
}
