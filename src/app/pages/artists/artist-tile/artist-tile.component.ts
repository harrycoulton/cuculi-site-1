import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-artist-tile',
  templateUrl: './artist-tile.component.html',
  styleUrls: ['./artist-tile.component.scss']
})
export class ArtistTileComponent implements OnInit {
  @Input() artist;

  constructor() { }

  ngOnInit(): void {
  }

}
