import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  user:string = 'Guest';
  constructor() { }

  setCurrentUser(usr:any){
    this.user=usr;
  }

  getCurrentUser():string{
    return this.user;
  }
}
