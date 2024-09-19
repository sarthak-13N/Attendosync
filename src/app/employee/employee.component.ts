import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any[] = [];
  menuActive = false;

  constructor() {}

  ngOnInit(): void {
    //this.fetchEmployeeData();
  }

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
  }

  // async fetchEmployeeData(): Promise<void> {
  //   try {
  //     const response = await fetch('https://your-s3-bucket-url/employees.json');
  //     this.employees = await response.json();
  //   } catch (error) {
  //     console.error('Error fetching employee data:', error);
  //   }
  // }
}
