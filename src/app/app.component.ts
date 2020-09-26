import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {NavService} from './services/nav-service/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'cuculi-site';
  public hamburgerActive: boolean;

  constructor(private navService: NavService) {
    this.navService.hamburgerActiveMsg.subscribe(status => {
      this.hamburgerActive = status;
    });
  }


  ngOnInit(): void {
    AOS.init({
      once: true,
    });
  }
}
