import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NavigationEnd, Router} from '@angular/router';
import {NavService} from '../../services/nav-service/nav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public activeHamburger = false;
  public currentRoute: string;

  constructor(private router: Router,
              private navService: NavService){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd){
        if (event.url === '/mob-nav') {
          this.activeHamburger = true;
        } else {
          this.activeHamburger = false;
        }
      }
    });
  }


  ngOnInit(): void {
  }

  public toggleActive = () => {
      this.activeHamburger = !this.activeHamburger;
      if (this.activeHamburger){
        this.currentRoute = this.router.url;
      }
      this.navService.updateHamburgerStatus(this.activeHamburger);
  }
}
