import { Component, OnInit } from '@angular/core';
import { Room } from '../../pubg-bingo-types';
import { Route, ActivatedRoute } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-room',
  templateUrl: 'room.page.html',
  styleUrls: ['room.page.scss']
})
export class RoomPage implements OnInit {
  private roomDoc: AngularFirestoreDocument<Room>;
  room: Observable<Room>;

  constructor(private route: ActivatedRoute, private afs: AngularFirestore) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.roomDoc = this.afs.doc<Room>(`rooms/${id}`);
    this.room = this.roomDoc.valueChanges();
  }
}
