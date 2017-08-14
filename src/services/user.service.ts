import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class UserService {

  constructor(public http: Http) { }


  login(username, password) {
    return this.http.post('http://www.fabricmonde.com/FMApi/public/api/v1/user/signin ', {email: username, password: password});
  }

  register(user) {
    return this.http.post('http://www.fabricmonde.com/FMApi/public/api/v1/user/create ', user);
  }

  getItemDetails(id) {
    return this.http.post('http://www.fabricmonde.com/FMApi/public/api/v1/product/get',{ "fmid" : id});
  }

}
