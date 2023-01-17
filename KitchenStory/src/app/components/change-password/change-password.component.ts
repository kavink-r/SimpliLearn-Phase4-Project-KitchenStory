import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  adminChangePasswordForm = new FormGroup({
    newPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    conNewwPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  get newPassword() {
    return this.adminChangePasswordForm.get('newPassword');
  }
  get conNewwPassword() {
    return this.adminChangePasswordForm.get('conNewwPassword');
  }
  changePassword(){
    console.log(`method is called`);
      if(this.newPassword?.value == this.conNewwPassword?.value){
        console.log(`If is called`);
        this.authservice.adminPassword = this.newPassword?.value;
        alert(`✅ Password Changed Sucessfully!`)
        this.router.navigateByUrl('login');
       
      }else{
        console.log(`Else is called`);
        alert(`❌ Credentials don't match`);
        this.adminChangePasswordForm.reset();
      }
  }


}
