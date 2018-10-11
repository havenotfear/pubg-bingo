import { Component, OnInit } from '@angular/core';
import { Room } from '../../pubg-bingo-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: 'rooms.page.html',
  styleUrls: ['rooms.page.scss']
})
export class RoomsPage implements OnInit {
  private roomsCollection: AngularFirestoreCollection<Room>;
  rooms: Observable<Room[]>;

  constructor(private router: Router, private afs: AngularFirestore) {
    this.roomsCollection = afs.collection<Room>('rooms');
    this.rooms = this.roomsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(change => {
        const data = change.payload.doc.data();
        const id = change.payload.doc.id;
        return <Room> { id, ...data };
      });
    }));
  }

  navigateToRoom(id: string) {
    this.router.navigate([`/room/${id}`]);
  }

  ngOnInit() {}
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
