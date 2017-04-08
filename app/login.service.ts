import { RequestOptionsArgs } from '@angular/http/src';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as tnsOAuthModule from 'nativescript-oauth';

@Injectable()
export class LoginService {
  token: string;
  _userInfo: BehaviorSubject<any> = new BehaviorSubject({});
  _email: BehaviorSubject<any> = new BehaviorSubject('');
  _name: BehaviorSubject<any> = new BehaviorSubject('');
  email: Observable<any> = this._email.asObservable();
  name: Observable<any> = this._name.asObservable();
  loggedIn: boolean = false;

  constructor(public http: Http) {
    this._userInfo
      .filter(e => e !== {})
      .map(e => e.email)
      .subscribe(e => this._email.next(e));
    this._userInfo
      .filter(e => e !== {})
      .map(e => e.name)
      .subscribe(e => this._name.next(e));
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  login() {
    tnsOAuthModule.login()
      .then((token)=>{
          this.setToken(token);
          this.populateUserInfo();
          this.loggedIn = true;
      })
      .catch((er)=>{
          //do something with the error
      });
  }

  logout() {
    this._userInfo.next({});
    this.loggedIn = false;
    // this.token = '';
  }

  populateUserInfo() {
    this.http.get('https://graph.facebook.com/me?fields=name,email', <RequestOptionsArgs>{
      params: {
        'access_token': this.token
      }
    })
    .map((res) => {
      console.log(JSON.stringify(res.json()));
      return res.json();
    })
    .subscribe((res) => {
      this._userInfo.next(res);
    })
  }
}
