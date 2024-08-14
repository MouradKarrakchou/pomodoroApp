import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {PomodoroComponent} from "./components/pomodoro/pomodoro.component";
import {NgClass} from "@angular/common";
import {SettingsComponent} from "./components/settings/settings.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PomodoroComponent, NgClass, SettingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pomodoro-App';
  darkMode = false;

  changeMode(mode : string) : void{
    console.log(mode)
    if (mode == "white")
      this.darkMode = false
    else if (mode == "dark")
      this.darkMode = true
  }
}
