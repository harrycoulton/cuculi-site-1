import { Component, OnInit } from '@angular/core';
import {ArtistsServiceService} from '../../../services/artists-service/artists-service.service';
import {ReleasesService} from '../../../services/releases-service/releases.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-release-page',
  templateUrl: './release-page.component.html',
  styleUrls: ['./release-page.component.scss']
})
export class ReleasePageComponent implements OnInit {
  public info;
  public release;
  public releaseRoute;
  private routeSub: Subscription;

  constructor(private artistsService: ArtistsServiceService,
              private releasesService: ReleasesService,
              private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe(params => {
      this.releaseRoute = params.name;
    });
    this.release = releasesService.getReleaseByRoute(this.releaseRoute);
  }

  ngOnInit(): void {
  }

}
