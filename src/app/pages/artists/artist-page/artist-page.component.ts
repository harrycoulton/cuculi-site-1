import { Component, OnInit } from '@angular/core';
import {ArtistsServiceService} from '../../../services/artists-service/artists-service.service';
import {ReleasesService} from '../../../services/releases-service/releases.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {EventsService} from '../../../services/events-service/events.service';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {IconsService} from '../../../services/icons-service/icons.service';

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
  public events;
  public icons = [];
  private routeSub: Subscription;

  constructor(private artistsService: ArtistsServiceService,
              private releasesService: ReleasesService,
              private eventsService: EventsService,
              private route: ActivatedRoute,
              private iconsService: IconsService) {
    this.routeSub = this.route.params.subscribe(params => {
      this.artistRoute = params.name;
    });
    this.artist = artistsService.getArtistByName(this.artistRoute)[0];
    this.releases = releasesService.getArtistReleases(this.artist.name);
    this.events = this.eventsService.getEventsByArtist(this.artist.id);
    this.artist.links.forEach(link => {
      link.faObj = this.iconsService.getIconById(link.iconId);
    });
    console.log(this.artist);
  }

  ngOnInit(): void {
  }

}
