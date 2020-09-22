import {Component, Input, OnInit} from '@angular/core';
import {EventModel} from '../../../models/event.model';
import {ArtistModel} from '../../../models/artist.model';
import {ArtistsServiceService} from '../../../services/artists-service/artists-service.service';

@Component({
  selector: 'app-upcoming-event',
  templateUrl: './upcoming-event.component.html',
  styleUrls: ['./upcoming-event.component.scss']
})
export class UpcomingEventComponent implements OnInit {
  @Input() eventInfo: EventModel;
  public relatedArtists = [];

  constructor(private artistsService: ArtistsServiceService) {}

  ngOnInit(): void {
    this.eventInfo.relatedArtists.forEach(id => {
      const relatedArtist = this.artistsService.getArtistById(id)[0];
      this.relatedArtists.push(relatedArtist);
    });
    console.log(this.relatedArtists);
  }
}
