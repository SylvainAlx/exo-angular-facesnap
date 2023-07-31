import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() FaceSnap!: FaceSnap;
  
  buttonText!: string;

  ngOnInit() {
      this.buttonText = "oh Snap !";
  }

  onSnap(){
    if(this.buttonText === "oups unsnap !"){
      this.buttonText = "oh snap !";
      this.FaceSnap.snaps--;
    } else {
      this.buttonText = "oups unsnap !";
      this.FaceSnap.snaps++;
    }
  }
}
