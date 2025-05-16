import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  loginForm: FormGroup;
  loginError: string = ''; // To store error messages
  isLoading: boolean = false; // Loading indicator

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Check if the user is already logged in
    const user = localStorage.getItem('admin');
    if (user) {
      this.router.navigate(['/admin']); // Redirect to dashboard if admin in
    }
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginError = 'Please fill in all required fields!';
      return;
    }


    this.isLoading = true; // Show loading spinner
    const credentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this.authService.login(credentials).subscribe({
      next: (response) => {
        this.isLoading = false; // Hide loading spinner
        alert('Login successful!');
        // Save user info or token to localStorage
        localStorage.setItem('user', JSON.stringify(response.user));
        this.router.navigate(['/admin']); // Redirect to dashboard
      },
      error: (error) => {
        this.isLoading = false; // Hide loading spinner
        if (error.status === 404) {
          this.loginError = 'User not found. Please check your email.';
        } else if (error.status === 401) {
          this.loginError = 'Invalid password. Please try again.';
        } else {
          this.loginError = 'An unexpected error occurred. Please try again later.';
        }
      },
    });
  }
}
