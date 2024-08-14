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

  workTimeValue: string = '00:00';
  restTimeValue: string = '00:00';


  changeTimes(){
    const [workMinutes, workSeconds] = this.workTimeValue.split(':').map(Number);
    const [restMinutes, restSeconds] = this.restTimeValue.split(':').map(Number);
    this.changeWorkTimeEvent.emit(new TimerValue(workMinutes, workSeconds));
    this.changeWorkTimeEvent.emit(new TimerValue(restMinutes, restSeconds));
  }

}
