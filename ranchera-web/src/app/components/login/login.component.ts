import {
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {UserService} from "../../services/auth/user.service";
import {LoginForm, User} from "../../app.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from '@angular/material';
import {GeneralService} from "../../services/general/general.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterContentChecked{

  @Output() onLoginEvent = new EventEmitter<User>();
  submitted = false;
  login: LoginForm = {};
  form: FormGroup;
  isLoading = false;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private changeDetector: ChangeDetectorRef,
              private general: GeneralService) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() { return this.form.controls; }

  ngOnInit() {
    this.general
      .watch()
      .subscribe((b) => this.isLoading = b);
  }

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
        (error) => this.onError(error)
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

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

}
