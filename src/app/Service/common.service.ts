import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isLoggedIn : boolean = false;

  constructor() { }
}
