import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  private username: any = '';
  private password: any = '';

  constructor(private navCtrl: NavController, private userService: UserService) {

  }

  onLogin() {
    console.log(this.username);
    console.log(this.password);
    this.userService.login(this.username, this.password)
      /*.subscribe((res) => {
        alert(res);
        this.navCtrl.push(HomePage);
      }, (err) => {
        alert(err);
      });*/
  }

  signUp() {
    this.navCtrl.push(RegisterPage);
  }
}
