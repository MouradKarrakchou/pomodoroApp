import {Component, EventEmitter, Output} from '@angular/core';
import {SettingsComponent} from "../settings/settings.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SettingsComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() darkModeEvent= new EventEmitter<string>();

  darkModeActivated = false;

  windowOpened = false;

  changeMode(variable: any) : void{
    if (this.darkModeActivated)
      this.darkModeEvent.emit("white")
    else
      this.darkModeEvent.emit("dark")
    this.darkModeActivated = !this.darkModeActivated;
  }

  clickParameter() : void{
      this.windowOpened = !this.windowOpened;
  }
}
