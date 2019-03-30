import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/auth/user.service";
import {User} from "./app.model";
import {MatSnackBar} from "@angular/material";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  isLogin = false;
  currentTitle = "Home";
  user: User;

  constructor(private userServices: UserService,
              private snackBar: MatSnackBar,
              private titleService: Title) {}

  ngOnInit(): void {
    if(this.userServices.isLogin())
      this.onLogin(this.userServices.load());
  }

  onLogin(user){
    this.isLogin = true;
    this.user = user;
    this.snackBar.open("Bienvenido","OK", {
      duration: 2000,
      verticalPosition: "bottom"
    });
  }

  public setTitle( newTitle: string) {
    this.currentTitle = newTitle;
    this.titleService.setTitle( newTitle );
  }


  public logOut(){
    this.userServices.logOut();
    this.user = null;
    this.isLogin = false;
  }
}
