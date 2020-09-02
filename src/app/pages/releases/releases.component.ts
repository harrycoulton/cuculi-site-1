import { Component, OnInit } from '@angular/core';
import {ReleaseModel} from '../../models/release.model';
import {ReleasesService} from '../../services/releases-service/releases.service';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.scss']
})
export class ReleasesComponent implements OnInit {
  public releases: ReleaseModel[];

  constructor(private releasesService: ReleasesService) {
    this.releases = releasesService.getReleases();
  }

  ngOnInit(): void {
  }

}
