import {AfterViewInit, Component, ChangeDetectorRef, AfterContentChecked} from '@angular/core';
import {UserService} from "./services/auth/user.service";
import {User} from "./app.model";
import {MatSnackBar} from "@angular/material";
import {Title} from "@angular/platform-browser";
import {GeneralService} from "./services/general/general.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, AfterContentChecked{

  isLogin = false;
  isLoading = false;
  user: User;

  constructor(private userServices: UserService,
              private snackBar: MatSnackBar,
              private titleService: Title,
              private general: GeneralService,
              private changeDetector: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if(this.userServices.isLogin())
      this.onLogin(this.userServices.load());
  }

  ngAfterViewChecked(){
    this.changeDetector.detectChanges();
  }

  onLogin(user){
    this.general
      .watch()
      .subscribe((b) => this.isLoading = b);

    this.isLogin = true;
    this.user = user;
    this.snackBar.open("Bienvenido","OK", {
      duration: 2000,
      verticalPosition: "bottom"
    });
  }

  public logOut(){
    this.userServices.logOut();
    this.user = null;
    this.isLogin = false;
  }

  ngAfterContentChecked(): void {
  }
}
