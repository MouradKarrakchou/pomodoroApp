import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {LikeSessionComponent} from "../like-session/like-session.component";
import {TimerValue} from "../../objects/timerValue";
import {PomodoroTimerComponent} from "../pomodoro-timer/pomodoro-timer.component";
import {SettingsComponent} from "../settings/settings.component";

@Component({
  selector: 'app-pomodoro',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    NgClass,
    LikeSessionComponent,
    PomodoroTimerComponent,
    SettingsComponent
  ],
  templateUrl: './pomodoro.component.html',
  styleUrl: './pomodoro.component.css'
})
export class PomodoroComponent {

  workTime = new TimerValue(25,0)

  breakTime = new TimerValue(5,0)

  isWorkTime = true;

  ngOnInit(): void {

  }

  changeSession(session : string): void{
    if (session === "work")
      this.isWorkTime = true;
    else if (session === "break")
      this.isWorkTime = false;
  }


}
