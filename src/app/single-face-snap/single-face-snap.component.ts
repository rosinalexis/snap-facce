import { FaceSnap } from './../models/face-snap.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  msg!: string;
  hasLike!: boolean;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.msg = 'like it!';
    this.hasLike = false;
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    this.hasLike = !this.hasLike;

    if (this.hasLike) {
      this.msg = 'dislike!';
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    } else {
      this.msg = 'like it!';
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    }
  }
}
