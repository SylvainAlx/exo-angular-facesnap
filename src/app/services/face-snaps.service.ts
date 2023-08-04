import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";


@Injectable({
  providedIn: "root"
})

export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title:"Mimi",
      description:"un chat très bruyant",
      imageUrl:"https://photos-chat.net/wp-content/uploads/2017/03/chat-noir-yeux-verts-5-4.jpg",
      createdDate: new Date(),
      snaps: 30,
      location: "Andard"
    },
    {
      id: 2,
      title: "chalet au bord du lac",
      description: "magnifique !",
      imageUrl: "https://www.thura-architecture.fr/wp-content/uploads/2019/06/dsc02441.jpg",
      createdDate: new Date(),
      snaps: 50,
      location: "la montagne"
    },
    {
      id: 3,
      title: "Peluche renarde",
      description: "tellement douce",
      imageUrl: "https://www.doudouplanet.com/media/product/bebe_SW6FX_36264.jpg",
      createdDate: new Date(),
      snaps: 150,
    }
]
getAllFaceSnaps(): FaceSnap[] {
  return this.faceSnaps;
}

getFaceSnapById(faceSnapId: number): FaceSnap {
  const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
  if (!faceSnap) {
      throw new Error('FaceSnap not found!');
  } else {
      return faceSnap;
  }
}

snapFaceSnapById(faceSnapId: number, snapType: string): void {
  const faceSnap = this.getFaceSnapById(faceSnapId);
  snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
}
}
