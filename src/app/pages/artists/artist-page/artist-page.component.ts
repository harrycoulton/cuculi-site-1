import { Component, OnInit } from '@angular/core';
import {ArtistsServiceService} from '../../../services/artists-service/artists-service.service';
import {ReleasesService} from '../../../services/releases-service/releases.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss']
})
export class ArtistPageComponent implements OnInit {
  public artistRoute;
  public artist;
  public info;
  public releases;
  private routeSub: Subscription;

  constructor(private artistsService: ArtistsServiceService,
              private releasesService: ReleasesService,
              private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe(params => {
      this.artistRoute = params.name;
    });
    this.artist = artistsService.getArtistByName(this.artistRoute)[0];
    this.releases = releasesService.getArtistReleases(this.artist.name);
  }

  ngOnInit(): void {
  }

}
