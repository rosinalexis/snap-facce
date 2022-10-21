import { FaceSnap } from './../models/face-snap.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    new FaceSnap(
      1,
      'Mage de la lune',
      'Le mage de la lune est intuable',
      new Date(),
      'https://picsum.photos/500/600',
      0,
      'Paris'
    ),
    new FaceSnap(
      2,
      'Le Jedi',
      'Le jedi est introuvable',
      new Date(),
      'https://picsum.photos/seed/picsum/500/600',
      0,
      'Deux-sèvres'
    ),
  ];

  constructor() {}

  getFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );

    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    }

    return faceSnap;
  }

  snapFaceSnapById(id: number, operator: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(id);
    operator === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

  addFaceSnap(formValue: {
    title: string;
    description: string;
    imageUrl: string;
    location?: string;
  }): void {
    let faceSnap = new FaceSnap(
      this.faceSnaps[this.faceSnaps.length - 1].id + 1,
      formValue.title,
      formValue.description,
      new Date(),
      formValue.imageUrl,
      0,
      formValue.location
    );
    this.faceSnaps.push(faceSnap);
  }
}
