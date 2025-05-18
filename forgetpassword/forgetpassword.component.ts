import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgetPasswordService } from '../service/forget-password.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  form: FormGroup;
  errorMessage = '';
  successMessage = '';
  resetLink = '';

  constructor(
    private fb: FormBuilder,
    private forgetPasswordService: ForgetPasswordService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      favourites: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.forgetPasswordService.requestPasswordReset(this.form.value).subscribe({
      next: (res) => {
        this.successMessage = 'Password reset link sent!';
        if (res.resetURL) this.resetLink = res.resetURL; // Show for dev only
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = err.error?.error || 'Something went wrong.';
        this.successMessage = '';
      }
    });
  }
}