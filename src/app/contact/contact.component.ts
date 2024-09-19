// contact.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  };

  showModal = false;

  onSubmit() {
    // Prevent form submission for demonstration purposes
    this.showModal = true;
    
    // Reset form fields
    this.contact = {
      name: '',
      email: '',
      phone: '',
      date: '',
      message: ''
    };

    // Close the modal after 3 seconds
    setTimeout(() => {
      this.showModal = false;
    }, 3000);
  }

  validatePhoneNumber(event: Event) {
    const input = event.target as HTMLInputElement;
    // Remove any non-numeric characters
    input.value = input.value.replace(/[^0-9]/g, '');
  }
}
