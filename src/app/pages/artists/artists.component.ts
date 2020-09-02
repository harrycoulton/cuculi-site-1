import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import {ArtistModel} from '../../models/artist.model';
import {ArtistsServiceService} from '../../services/artists-service/artists-service.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  public artists: Array<ArtistModel>;

  constructor(private artistService: ArtistsServiceService) {
    this.artists = artistService.getArtists();
  }

  ngOnInit(): void {
    AOS.init();
  }

}
