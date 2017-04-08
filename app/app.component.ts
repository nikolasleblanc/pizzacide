import { LoginService } from './login.service';
import { Component } from "@angular/core";

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html",
  styleUrls: [
    'app.component.css'
  ]
})
export class AppComponent {
  time: any;

  constructor(public loginService: LoginService) {
  }
  onLogin() {
    this.loginService.login();
  }
  onLogout() {
    this.loginService.logout();
  }
}
