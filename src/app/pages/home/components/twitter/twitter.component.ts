import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    (window as any).twttr.widgets.load();
  }

}
