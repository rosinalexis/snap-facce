import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  userEmail!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }

  onSubmitForm() {
    console.log(this.userEmail);
  }
}
