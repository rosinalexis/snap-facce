import { Router } from '@angular/router';
import { FaceSnapsService } from './../services/face-snaps.service';
import { FaceSnap } from './../models/face-snap.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  msg!: string;
  hasLike!: boolean;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.msg = 'like it!';
    this.hasLike = false;
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

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
