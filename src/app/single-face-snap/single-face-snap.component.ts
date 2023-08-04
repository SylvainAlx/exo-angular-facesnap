import { Component, Input } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  constructor(private faceSnapsService: FaceSnapsService) { }

  FaceSnap!: FaceSnap;
  
  buttonText!: string;

  ngOnInit() {
      this.buttonText = "oh Snap !";
  }

  onSnap(){
    if(this.buttonText === "oups unsnap !"){
      this.buttonText = "oh snap !";
      this.faceSnapsService.snapFaceSnapById(this.FaceSnap.id, "unsnap")
    } else {
      this.buttonText = "oups unsnap !";
      this.faceSnapsService.snapFaceSnapById(this.FaceSnap.id, "snap")
    }
  }
}
