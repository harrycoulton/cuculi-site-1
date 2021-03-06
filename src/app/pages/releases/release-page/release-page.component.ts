import { Component, OnInit } from '@angular/core';
import {ArtistsServiceService} from '../../../services/artists-service/artists-service.service';
import {ReleasesService} from '../../../services/releases-service/releases.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {IconsService} from '../../../services/icons-service/icons.service';
import {ArtistModel} from '../../../models/artist.model';
import {ReleaseModel} from '../../../models/release.model';

@Component({
  selector: 'app-release-page',
  templateUrl: './release-page.component.html',
  styleUrls: ['./release-page.component.scss']
})
export class ReleasePageComponent implements OnInit {
  public info;
  public release: ReleaseModel;
  public releaseRoute;
  public links;
  public artist: ArtistModel;
  private routeSub: Subscription;

  constructor(private artistsService: ArtistsServiceService,
              private releasesService: ReleasesService,
              private route: ActivatedRoute,
              private iconsService: IconsService) {
    this.routeSub = this.route.params.subscribe(params => {
      this.releaseRoute = params.name;
    });
    this.release = releasesService.getReleaseByRoute(this.releaseRoute);
    this.release.links.forEach(link => {
      link.faObj = this.iconsService.getIconById(link.iconId);
    });
    this.artist = this.artistsService.getArtistById(this.release.artist)[0];
  }

  ngOnInit(): void {
  }

}
