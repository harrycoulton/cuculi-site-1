import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {NavService} from './services/nav-service/nav.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'cuculi-site';
  public hamburgerActive: boolean;

  constructor(private navService: NavService,
              private router: Router) {
    this.navService.hamburgerActiveMsg.subscribe(status => {
      this.hamburgerActive = status;
    });
  }


  ngOnInit(): void {
    AOS.init({
      once: true,
    });
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
