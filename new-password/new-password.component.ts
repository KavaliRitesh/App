import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgetPasswordService } from '../service/forget-password.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {
  form: FormGroup;
  errorMessage = '';
  successMessage = '';
  token = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private forgetPasswordService: ForgetPasswordService
  ) {
    this.form = this.fb.group({
      newpassword: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/)
      ]],
      confirmpassword: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token') || '';
  }

  get password() { return this.form.get('newpassword')?.value || ''; }
  get confirmPassword() { return this.form.get('confirmpassword')?.value || ''; }
  get hasPasswordMismatch() { return this.form.get('confirmpassword')?.touched && this.password !== this.confirmPassword; }

  onSubmit() {
    if (this.form.invalid || this.hasPasswordMismatch) return;
    this.forgetPasswordService.resetPassword(this.token, { newpassword: this.password }).subscribe({
      next: () => {
        this.successMessage = 'Password reset successful!';
        this.errorMessage = '';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: (err) => {
        this.errorMessage = err.error?.error || 'Something went wrong.';
        this.successMessage = '';
      }
    });
  }
}