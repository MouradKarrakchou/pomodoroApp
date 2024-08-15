export class TimerValue {
  private _minutes: number;
  private _seconds: number;

  constructor(minutes: number, seconds: number) {
    this._minutes = minutes;
    this._seconds = seconds;
  }

  get minutes(): number {
    return this._minutes;
  }

  set minutes(value: number) {
    this._minutes = value;
  }

  get seconds(): number {
    return this._seconds;
  }

  set seconds(value: number) {
    this._seconds = value;
  }

  getTotalTime(): number {
    return this._minutes * 60 + this._seconds;
  }

  clone(): TimerValue {
    return new TimerValue(this.minutes, this.seconds);
  }

  toString(): string {
    const hours = Math.floor(this._minutes / 60);
    const minutes = this._minutes % 60;
    const seconds = this._seconds;

    return `${this.formatTimeComponent(hours)}:${this.formatTimeComponent(minutes)}:${this.formatTimeComponent(seconds)}`;
  }

  private formatTimeComponent(component: number): string {
    return component < 10 ? `0${component}` : `${component}`;
  }

}
