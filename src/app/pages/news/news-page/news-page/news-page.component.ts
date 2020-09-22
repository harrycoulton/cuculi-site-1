import { Component, OnInit } from '@angular/core';
import {StoryModel} from '../../../../models/story.model';
import {NewsService} from '../../../../services/news-service/news.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {ArtistModel} from '../../../../models/artist.model';
import {ArtistsServiceService} from '../../../../services/artists-service/artists-service.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  public storyRoute: string;
  public routeSub: Subscription;
  public story: StoryModel;
  public relatedArtists = [];
  public relatedStories = [];

  constructor(private newService: NewsService,
              private route: ActivatedRoute,
              private artistsService: ArtistsServiceService) {
    this.routeSub = this.route.params.subscribe(params => {
      this.storyRoute = params.route;
    });
    this.story = newService.getStoryByRoute(this.storyRoute)[0];
    this.story.relatedArtists.forEach(artistId => {
      const artist = this.artistsService.getArtistById(artistId)[0];
      this.relatedArtists.push(artist);
    });
    this.story.relatedStories.forEach(id => {
      const story = this.newService.getStoryById(id)[0];
      this.relatedStories.push(story);
    });
  }

  ngOnInit(): void {
  }

}
