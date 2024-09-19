import { Injectable } from '@angular/core';
import { Attendance } from './attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor() { }

  private localStorageKey = 'attendanceData';

  getAttendanceData(): Attendance[] {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : [];
  }

  saveAttendanceData(data: Attendance[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(data));
  }

  addAttendance(attendance: Attendance): void {
    const data = this.getAttendanceData();
    data.push(attendance);
    this.saveAttendanceData(data);
  }
}
