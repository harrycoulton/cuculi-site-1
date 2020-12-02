import {Component, Input, OnInit} from '@angular/core';
import {ArtistsServiceService} from '../../../services/artists-service/artists-service.service';
import {ArtistModel} from '../../../models/artist.model';
import {ReleaseModel} from '../../../models/release.model';

@Component({
  selector: 'app-release-tile',
  templateUrl: './release-tile.component.html',
  styleUrls: ['./release-tile.component.scss']
})
export class ReleaseTileComponent implements OnInit {
  @Input() release: ReleaseModel;
  public artist: ArtistModel;

  constructor(private artistsService: ArtistsServiceService) {
  }

  ngOnInit(): void {
    this.artist = this.artistsService.getArtistById(this.release.artist)[0];
  }

}
