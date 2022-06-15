import { UserService } from './../_services/user.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  passwordVisible = false;
  minPassword = 6;
  loginIcon: string;

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    // private translateService: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.compose(
        [Validators.required,
        Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'),
        Validators.minLength(1)])
      ],
      password: [null, [Validators.required, Validators.minLength(this.minPassword)]],
      remember: [true]
    });
  }

  get email() {
    this.loginForm.value.email.trim();
    this.loginForm.value.email.toLowerCase();
    return this.loginForm.get('email').value;
  }

  get password() {
    return this.loginForm.get('password').value;
  }

  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
}
