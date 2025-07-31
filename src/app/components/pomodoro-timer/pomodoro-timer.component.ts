import {Component, EventEmitter, Input, Output} from '@angular/core';
import {timer} from "rxjs";
import {NgIf} from "@angular/common";
import {SettingsComponent} from "../settings/settings.component";
import Howl from "howler";

@Component({
  selector: 'app-pomodoro-timer',
  standalone: true,
  imports: [
    NgIf,
    SettingsComponent
  ],
  templateUrl: './pomodoro-timer.component.html',
  styleUrl: './pomodoro-timer.component.css'
})
export class PomodoroTimerComponent {
  @Input() workTime : number

  @Input() breakTime : number

  @Output() changeSession = new EventEmitter<string>();

  timer: any = null;

  isWorkTime  = true;

  timerStarted = false;

  currentReferenceTime: number;

  timeVariable : number;

  timeLeft: number;

  audio = new Audio();



  windowOpened = false;


  getPercentage(): number{
    return Math.round(10*(100 * (this.currentReferenceTime - this.timeLeft) / (this.currentReferenceTime)))/10;
  }

  ngOnInit(): void {
    this.currentReferenceTime = this.workTime
    this.timeVariable = this.workTime;
    this.timeLeft = this.workTime;
    this.audio.src = 'assets/sounds/Little_bell_sound_effect.mp3';
    this.audio.load();
    this.audio.volume = 0.1;
  }

  clickParameter() : void{
    this.windowOpened = !this.windowOpened;
  }

  changeWorkTime(newTime : number) : void{
    this.workTime = newTime
    this.clearChronometers()
  }

  changeBreakTime(newTime : number) : void{
    this.breakTime = newTime
    this.clearChronometers()
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


  clearChronometers():void{
    this.pauseTimer();
    if (this.isWorkTime)
    {this.timeLeft = this.workTime;
      this.timeVariable= this.workTime;}

  else
    {this.timeLeft = this.breakTime
      this.timeVariable= this.breakTime;}
    this.currentReferenceTime = this.timeLeft;

  }
  restartSession():void{
    this.changeSession.emit("work");
    this.isWorkTime = true;
    this.clearChronometers();
  }


  skipSession():void{
    this.endSession();
  }

  endSession():void{
    this.timeVariable = 0;
    if (this.isWorkTime) {
      this.timeLeft = this.breakTime
      this.currentReferenceTime = this.timeLeft;
      this.changeSession.emit("break");
    }
    else {
      this.timeLeft = this.workTime
      this.currentReferenceTime = this.timeLeft;
      this.changeSession.emit("work");
    }
    this.isWorkTime = !this.isWorkTime;
  }

  startTimer(): void {
    this.timerStarted = true;
    this.timer = setInterval(() => {

      this.timeVariable = this.timeLeft;

      this.timeLeft--;

      if (this.timeLeft < 0) {
        this.audio.play();
        this.endSession()
      }
    }, 1000);
  }

  protected formatTimeComponent(component: number): string {
    return component < 10 ? `0${component}` : `${component}`;
  }

  protected readonly Math = Math;
}
