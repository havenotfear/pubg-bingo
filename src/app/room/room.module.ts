import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { RoomPage } from './room.page';
import { BingoBoard } from '../bingo-board/bing-board';
import { BingoTile } from '../bingo-tile/bingo-tile';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: RoomPage
      }
    ])
  ],
  declarations: [RoomPage, BingoBoard, BingoTile]
})
export class RoomPageModule {}
