import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
import { CommonService } from '../common.service';
import { UserLoginDTO } from './interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private commonService:CommonService, private router:Router){}
  ngOnInit(): void {
    this.loginForm.patchValue({
      companyCode: this.COMPANY_CODE
    })
  }

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    companyCode: new FormControl('')
  });
  isLoading: boolean = false
  COMPANY_CODE = environment.COMPANY_CODE



  SubmitForm(){
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.commonService.userlogin(formData as UserLoginDTO).subscribe(res => {
        this.router.navigate(['/home'])
      })
  }
}

}
