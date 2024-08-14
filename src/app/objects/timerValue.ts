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
}
