import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  form!: FormGroup;
  loading: boolean = false; // Optional: to show a loading state

  constructor(
    private fb: FormBuilder, 
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize the form with email and password fields
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email field with validation
      password: ['', [Validators.required, Validators.minLength(6)]], // Password with minLength validation
    });
  }

  login(){
    if (this.form.invalid) {
      // Stop if the form is invalid
      return;
    }

    this.loading = true;

    // Mock login process, you can replace it with real API calls
    setTimeout(() => {
      console.log('Login successful:', this.form.value);
      this.loading = false;
      // Navigate to dashboard or another route after successful login
      this.router.navigate(['/app/dashboard']);
    }, 2000);
  }

}
