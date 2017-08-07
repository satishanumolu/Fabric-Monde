import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  login(username, password) {
    return 'This is my data, man!'+username+' '+password;
  }

  register(user) {
    console.log(user);
  }

}
