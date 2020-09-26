import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-tile',
  templateUrl: './news-tile.component.html',
  styleUrls: ['./news-tile.component.scss']
})
export class NewsTileComponent implements OnInit {
  @Input() data;
  @Input() inPage;

  constructor() { }

  ngOnInit(): void {
  }

}
