import {Component, EventEmitter, Input, Output} from '@angular/core';
import {timer} from "rxjs";
import {TimerValue} from "../../objects/timerValue";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-pomodoro-timer',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './pomodoro-timer.component.html',
  styleUrl: './pomodoro-timer.component.css'
})
export class PomodoroTimerComponent {
  @Input() workTime : TimerValue

  @Input() breakTime : TimerValue

  @Output() changeSession = new EventEmitter<string>();

  timer: any = null;

  isWorkTime  = true;

  timerStarted = false;

  currentReferenceTime: number;

  timeVariable : TimerValue;

  timeLeft: number;

  getPercentage(): number{
    return Math.round(10*(100 * (this.currentReferenceTime - this.timeLeft) / (this.currentReferenceTime)))/10;
  }

  ngOnInit(): void {
    this.currentReferenceTime = this.workTime.minutes * 60 + this.workTime.seconds
    this.timeVariable = this.workTime.clone();
    this.timeLeft = this.workTime.minutes * 60 + this.workTime.seconds;
  }


  pauseTimer():void{
    this.timerStarted = false;
    clearInterval(this.timer);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  restartSession():void{
    this.pauseTimer();
    this.timeLeft = this.workTime.minutes * 60 + this.workTime.seconds;
    this.currentReferenceTime = this.timeLeft;
    this.changeSession.emit("work");
    this.isWorkTime = true;

    this.timeVariable= this.workTime.clone();
  }


  startTimer(): void {
    this.timerStarted = true;
    this.timer = setInterval(() => {
      const minutes = Math.floor(this.timeLeft / 60);
      const seconds = this.timeLeft % 60;

      this.timeVariable.minutes = minutes;
      this.timeVariable.seconds = seconds;

      this.timeLeft--;

      if (this.timeLeft < 0) {
        this.timeVariable = new TimerValue(0,0);
        if (this.isWorkTime) {
          this.timeLeft = this.breakTime.minutes * 60 + this.breakTime.seconds;
          this.currentReferenceTime = this.timeLeft;
          this.changeSession.emit("break");
        }
        else {
          this.timeLeft = this.workTime.minutes * 60 + this.workTime.seconds;
          this.currentReferenceTime = this.timeLeft;
          this.changeSession.emit("work");
        }
        this.isWorkTime = !this.isWorkTime;
      }
    }, 1000);
  }

}
