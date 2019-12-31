import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() {}

  authenticate(username : string, password : string) : boolean { 
    if (username === 'selva' && password === 'sabapathy') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() : boolean {
    let username = sessionStorage.getItem('authenticatedUser');
    return !(username === null);
  }

  logout() : void {
    sessionStorage.removeItem('authenticatedUser');
  }
}
