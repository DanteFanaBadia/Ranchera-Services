import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../services/auth/user.service";
import {LoginForm, User} from "../../app.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() onLoginEvent = new EventEmitter<User>();
  submitted = false;
  login: LoginForm = {};
  form: FormGroup;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private snackBar: MatSnackBar) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() { return this.form.controls; }

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      this.snackBar.open("Formulario inválido, favor verificar.","OK", {
        duration: 2000,
        verticalPosition: "top"
      });
      return;
    }

    this.login = this.form.getRawValue();


    this.userService
      .login(this.login)
      .subscribe(
        (x) => this.onSuccess(x),
        (x) => this.onError(x)
      );
  }

  onError(error){
    this.snackBar.open("Usuario y/o contraseña inválido.","OK", {
      duration: 2000,
      verticalPosition: "top"
    });
    console.log(error);
  }

  onSuccess(user: User){
    this.onLoginEvent.emit(user);
  }

}
