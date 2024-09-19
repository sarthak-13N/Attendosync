import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Attendance } from '../attendance';
import { AttendanceService } from '../attendance.service';
// import { Chart, registerables } from 'chart.js';

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
    months = [
        { name: 'January', value: 0 },
        { name: 'February', value: 1 },
        { name: 'March', value: 2 },
        { name: 'April', value: 3 },
        { name: 'May', value: 4 },
        { name: 'June', value: 5 },
        { name: 'July', value: 6 },
        { name: 'August', value: 7 },
        { name: 'September', value: 8 },
        { name: 'October', value: 9 },
        { name: 'November', value: 10 },
        { name: 'December', value: 11 },
      ];
    
      selectedMonth: number = new Date().getMonth();  // Default to current month
      selectedYear: number = new Date().getFullYear(); // Default to current year
      monthlyReport: Attendance[] = [];
      reportGenerated = false;
      errorMessage = '';
    
      constructor(private attendanceService: AttendanceService) {}
    
      generateReport() {
        console.log(`Generating report for ${this.selectedMonth} / ${this.selectedYear}`);
      
        if (this.selectedYear < 2000 || this.selectedYear > 2100) {
          this.errorMessage = 'Please select a valid year between 2000 and 2100.';
          this.monthlyReport = [];
          return;
        }
      
        const allAttendance = this.attendanceService.getAttendanceData();
        console.log('All Attendance Data:', allAttendance);
      
        this.monthlyReport = allAttendance.filter((record) => {
          const recordDate = new Date(record.date);
          return recordDate.getMonth() === this.selectedMonth && recordDate.getFullYear() === this.selectedYear;
        });
      
        console.log('Filtered Monthly Report:', this.monthlyReport);
      
        this.reportGenerated = true;
        this.errorMessage = this.monthlyReport.length === 0 ? 'No records found for the selected month and year.' : '';
      }
      
    }