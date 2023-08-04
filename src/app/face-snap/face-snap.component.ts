import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  constructor(private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute,
    private router: Router) { }

    @Input() FaceSnap!: FaceSnap;
  buttonText!: string;

  ngOnInit(): void {
      this.buttonText = "oh Snap !";
      const snapId = +this.route.snapshot.params['id'];
      this.FaceSnap = this.faceSnapsService.getFaceSnapById(snapId);
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
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.FaceSnap.id}`);
}
}
