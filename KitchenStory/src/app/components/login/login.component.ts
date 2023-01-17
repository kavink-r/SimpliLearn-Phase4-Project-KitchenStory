import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authservice:AuthService) { }

  ngOnInit(): void {
  }
  adminLoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  get email() {
    return this.adminLoginForm.get('email');
  }
  get password() {
    return this.adminLoginForm.get('password');
  }

  loginAdmin() {
    if (this.email?.value == this.authservice.adminEmail && this.password?.value===this.authservice.adminPassword) {
           this.router.navigateByUrl('admin-home');
           
    } else {
      
      alert(`❌ Incorrect credentials`);
      this.router.navigateByUrl('login');
    }
  }
}
