import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments: { name: string }[] = [];

  ngOnInit(): void {
    this.renderDepartments();
  }

  loadDepartments(): { name: string }[] {
    return JSON.parse(localStorage.getItem('departments') || '[]') || [
      { name: 'HR' },
      { name: 'Finance' },
      { name: 'IT' },
      { name: 'Marketing' }
    ];
  }

  saveDepartments(departments: { name: string }[]): void {
    localStorage.setItem('departments', JSON.stringify(departments));
  }

  renderDepartments(): void {
    this.departments = this.loadDepartments();
  }

  addDepartment(): void {
    const departmentName = prompt('Enter department name:');
    if (departmentName) {
      const departments = this.loadDepartments();
      departments.push({ name: departmentName });
      this.saveDepartments(departments);
      this.renderDepartments();
    }
  }
}
