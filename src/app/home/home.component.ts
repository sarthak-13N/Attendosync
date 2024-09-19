import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Attendance } from '../attendance';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const carouselImages = document.querySelectorAll('#image-carousel img');
    let currentIndex = 0;

    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }

    function showNextImage() {
      if (carouselImages.length) {
        carouselImages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselImages.length;
        carouselImages[currentIndex].classList.add('active');
      }
    }

    // Initial call to ensure the first image is visible
    if (carouselImages.length) {
      carouselImages[currentIndex].classList.add('active');
      setInterval(showNextImage, 5000); // Change image every 5 seconds
    }
  }

  employeeName: string = '';
  date: string = '';
  present: boolean = false;

  constructor(private attendanceService: AttendanceService) {}

  markAttendance() {
    const newAttendance: Attendance = {
      id: new Date().getTime(),
      employeeName: this.employeeName,
      date: this.date,
      present: this.present,
    };
    this.attendanceService.addAttendance(newAttendance);
    alert('Attendance marked successfully!');
    this.employeeName = '';
    this.date = '';
    this.present = false;
  }
}
