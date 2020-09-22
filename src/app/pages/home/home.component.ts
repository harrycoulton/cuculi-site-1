import { Component, OnInit } from '@angular/core';
import {StoryModel} from '../../models/story.model';
import {NewsService} from '../../services/news-service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public stories: StoryModel[];
  public featuredStories: StoryModel[];

  constructor(private newsService: NewsService) {
    this.stories = newsService.getStories();
    this.featuredStories = newsService.getFeaturedStories();
  }

  ngOnInit(): void {
  }

}
