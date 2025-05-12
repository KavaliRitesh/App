import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['Palak Sharma', Validators.required],
      email: [{ value: 'palak@example.com', disabled: true }],
      phone: [{ value: '+91-678905432', disabled: true }],
      city: ['Delhi', Validators.required],
      avatar: ['https://randomuser.me/api/portraits/women/44.jpg'],
    });
  }
  changePassword(): void {
    this.router.navigate(['/forgetpassword']);// when integrated will be directed to reset password page
  }
  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Updated Profile:', this.profileForm.getRawValue());
      this.router.navigate(['/profile']);
    }
  }
}
