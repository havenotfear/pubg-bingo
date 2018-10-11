import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateRoomPage } from '../create-room/create-room.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: CreateRoomPage
    });
    return await modal.present();
  }
}
