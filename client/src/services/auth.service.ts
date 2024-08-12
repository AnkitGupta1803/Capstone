import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null;
  private isLoggedIn: boolean = false;

  constructor() {}

  saveToken(token: string) {
    this.token = token;
    this.isLoggedIn = true;
    localStorage.setItem('token', token);
  }
   SetRole(role:any)
  {
     localStorage.setItem('role',role);
  }
  getRole ():string|null
  {
    return localStorage.getItem('role');
  }
  getLoginStatus(): boolean {
    return !!localStorage.getItem('token');
  }
  getToken(): string | null {
    this.token= localStorage.getItem('token');
    return this.token;
  }
  logout(){
     localStorage.removeItem('token');
     localStorage.removeItem('role');
     this.token=null;
     this.isLoggedIn=false
   }
}
