import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  employee: any;

  constructor() { }

  ngOnInit(): void {
    // Sample employee data
    this.employee = {
      id: 1,
      name: 'Sarthak Nimble',
      email: 'sarthknimble@outlook.com',
      contact: '123-456-7890',
      department: 'Web Development',
      salary: 50000,
      address: 'Pune, Maharashtra, India'
    };
  }
}