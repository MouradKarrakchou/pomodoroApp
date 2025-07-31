import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from "@angular/common";
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
  @Input() workTime : number
  @Input() breakTime : number

  @Output() windowCloseEvent = new EventEmitter<void>();
  @Output() changeWorkTimeEvent = new EventEmitter<number>();
  @Output() changeBreakTimeEvent = new EventEmitter<number>();

  workTimeMinutes : number;
  breakTimeMinutes : number;

  ngOnInit(): void {
    this.workTimeMinutes= this.workTime / 60;
    this.breakTimeMinutes= this.breakTime / 60;
  }

  changeTimes(){
    console.log(this.workTimeMinutes * 60)
    this.changeWorkTimeEvent.emit(this.workTimeMinutes * 60);
    this.changeBreakTimeEvent.emit(this.breakTimeMinutes * 60);
    this.windowCloseEvent.emit();
  }

}
