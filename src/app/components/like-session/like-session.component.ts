import { Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-like-session',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './like-session.component.html',
  styleUrl: './like-session.component.css'
})
export class LikeSessionComponent {
  sessionRating = 3;
  setRating(rating: number): void {
    this.sessionRating = rating;
  }
}
