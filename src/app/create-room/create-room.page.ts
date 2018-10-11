import { Component, OnInit } from '@angular/core';
import { ViewController } from '@ionic/core';
import { ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Room } from '../../pubg-bingo-types';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'create-room',
  templateUrl: 'create-room.page.html',
  styleUrls: ['create-room.page.scss']
})
export class CreateRoomPage implements OnInit {
  createRoomForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private modalController: ModalController,
    private afs: AngularFirestore
  ) {}

  dismiss() {
    this.modalController.dismiss();
  }

  create() {
    const rooms = this.afs.collection<Room>('rooms');
    rooms.add(this.createRoomForm.value);
    this.modalController.dismiss();
  }

  ngOnInit() {}
}
