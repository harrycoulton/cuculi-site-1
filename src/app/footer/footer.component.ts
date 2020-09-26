import {Component, OnChanges, OnInit} from '@angular/core';
import {NavService} from '../services/nav-service/nav.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  public activeHamburger: boolean;

  // Leaving this here if I need to use it.

  constructor(private navService: NavService) {
    this.navService.hamburgerActiveMsg.subscribe(status => {
      this.activeHamburger = status;
    });
  }

  ngOnInit(): void {
  }

}
