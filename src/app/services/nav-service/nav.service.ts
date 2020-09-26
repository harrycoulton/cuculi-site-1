import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  public hamburgerActive = new BehaviorSubject(false);
  hamburgerActiveMsg = this.hamburgerActive.asObservable();

  constructor() {
  }

  public updateHamburgerStatus = (hbStatus) => {
    this.hamburgerActive.next(hbStatus);
  }
}
