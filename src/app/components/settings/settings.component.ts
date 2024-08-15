import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from "@angular/common";
import {TimerValue} from "../../objects/timerValue";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  @Input() windowOpened : boolean;
  @Input() workTime : TimerValue
  @Input() breakTime : TimerValue

  @Output() windowCloseEvent = new EventEmitter<void>();
  @Output() changeWorkTimeEvent = new EventEmitter<TimerValue>();
  @Output() changeBreakTimeEvent = new EventEmitter<TimerValue>();

  workTimeValue: string = '00:00:00';
  breakTimeValue: string = '00:00:00';

  ngOnInit(): void {
    console.log("here")
    this.workTimeValue= this.workTime.toString();
    this.breakTimeValue= this.breakTime.toString();
  }

  changeTimes(){
    const [workHours, workMinutes, workSeconds] = this.workTimeValue.split(':').map(Number);
    const [restHours, restMinutes, restSeconds] = this.breakTimeValue.split(':').map(Number);
    this.changeWorkTimeEvent.emit(new TimerValue(workHours*60 + workMinutes, workSeconds));
    this.changeBreakTimeEvent.emit(new TimerValue(restHours*60 + restMinutes, restSeconds));
    this.windowCloseEvent.emit();
  }

}
