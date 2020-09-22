import { Component, OnInit } from '@angular/core';
import {StoryModel} from '../../../models/story.model';
import {NewsService} from '../../../services/news-service/news.service';

@Component({
  selector: 'app-news-main',
  templateUrl: './news-main.component.html',
  styleUrls: ['./news-main.component.scss']
})
export class NewsMainComponent implements OnInit {
  public stories: StoryModel[];
  public featuredStory: StoryModel;
  constructor(private newsService: NewsService) {
    this.featuredStory = newsService.getFeaturedStories()[0];
    this.stories = newsService.getStories().filter(story => story.id !== this.featuredStory.id);
  }

  ngOnInit(): void {
  }

}
