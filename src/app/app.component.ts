import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
      this.mySnap = new FaceSnap(
        "Mimi",
        "un chat très bruyant",
        "",
        new Date(),
        2,
      )
      this.myOtherSnap = new FaceSnap(
        "Oscar",
        "trop mignon !",
        "",
        new Date(),
        50,
      )
      this.myLastSnap = new FaceSnap(
        "Peluche renarde",
        "tellement douce",
        "",
        new Date(),
        6,
      )
  }
}
