import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Attendance } from '../attendance';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  employees: any[] = [];
  errorMessage: string | null = null;

  constructor(private http: HttpClient,
    private attendanceService: AttendanceService
  ) { }

  // ngOnInit(): void {
  //   this.fetchEmployeeData();
  // }

  fetchEmployeeData(): void {
    const s3Url = 'https://your-s3-bucket-url/data.json'; // Replace with your S3 URL
    this.http.get<any[]>(s3Url)
      .subscribe({
        next: (data) => {
          this.employees = data;
        },
        error: (error) => {
          console.error('Error fetching data from S3:', error);
          this.errorMessage = 'Failed to load data';
        }
      });
  }
  attendanceData: Attendance[] = [];


  ngOnInit(): void {
    this.attendanceData = this.attendanceService.getAttendanceData();
  }
}
