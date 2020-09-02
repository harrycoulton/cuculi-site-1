import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-release-tile',
  templateUrl: './release-tile.component.html',
  styleUrls: ['./release-tile.component.scss']
})
export class ReleaseTileComponent implements OnInit {
  @Input() release;

  constructor() { }

  ngOnInit(): void {
  }

}
