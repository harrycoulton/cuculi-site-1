import { Injectable } from '@angular/core';
import {StoryModel} from '../../models/story.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public stories: StoryModel[];

  constructor() {
    this.stories = [
      {
        id: 1,
        heading: 'One News story heading',
        text: 'Now this is a story all about how' +
          'My life got flipped turned upside down' +
          'And Id like to take a minute just sit right there' +
          'Ill tell you how I become the prince of a town called Bel Air' +
          'In west Philadelphia born and raised' +
          'On the playground is where I spent most of my days' +
          'Chillin out maxin relaxin all cool' +
          'And all shootin some b ball outside of the school' +
          'When a couple of guys who were up to no good' +
          'Started makin trouble in my neighborhood' +
          'I got in one little fight and my mon scared' +
          'And said youre movin with your auntie and uncle in Bel-Air' +
          'I begged and pleaded with her day after day',
        imgSrc: 'assets/images/news.jpg',
        imgDesc: 'Desc for the img',
        isFeatured: true,
        route: 'routeOne',
        relatedStories: [1, 2],
        relatedArtists: [1, 2],
        relatedReleases: [1, 2]
      },
      {
        id: 2,
        heading: 'Two News story heading',
        text: 'Now this is a story all about how' +
          'My life got flipped turned upside down' +
          'And Id like to take a minute just sit right there' +
          'Ill tell you how I become the prince of a town called Bel Air' +
          'In west Philadelphia born and raised' +
          'On the playground is where I spent most of my days' +
          'Chillin out maxin relaxin all cool' +
          'And all shootin some b ball outside of the school' +
          'When a couple of guys who were up to no good' +
          'Started makin trouble in my neighborhood' +
          'I got in one little fight and my mon scared' +
          'And said youre movin with your auntie and uncle in Bel-Air' +
          'I begged and pleaded with her day after day',
        imgSrc: 'assets/images/news.jpg',
        imgDesc: 'Desc for the img',
        isFeatured: false,
        route: 'routeTwo',
        relatedStories: [1, 2],
        relatedArtists: [1, 2],
        relatedReleases: [1, 2],
        quote: 'Wow, this is such a quote! Amazing! They cannot go on for too long for obvious reasons'
      },
      {
        id: 3,
        heading: 'Three News story heading',
        text: 'Now this is a story all about how' +
          'My life got flipped turned upside down' +
          'And Id like to take a minute just sit right there' +
          'Ill tell you how I become the prince of a town called Bel Air' +
          'In west Philadelphia born and raised' +
          'On the playground is where I spent most of my days' +
          'Chillin out maxin relaxin all cool' +
          'And all shootin some b ball outside of the school' +
          'When a couple of guys who were up to no good' +
          'Started makin trouble in my neighborhood' +
          'I got in one little fight and my mon scared' +
          'And said youre movin with your auntie and uncle in Bel-Air' +
          'I begged and pleaded with her day after day',
        imgSrc: 'assets/images/news.jpg',
        imgDesc: 'Desc for the img',
        isFeatured: false,
        route: 'routeThree',
        relatedStories: [1, 2],
        relatedArtists: [1, 2],
        relatedReleases: [1, 2]
      },
      {
        id: 4,
        heading: 'Four News story heading',
        text: 'Now this is a story all about how' +
          'My life got flipped turned upside down' +
          'And Id like to take a minute just sit right there' +
          'Ill tell you how I become the prince of a town called Bel Air' +
          'In west Philadelphia born and raised' +
          'On the playground is where I spent most of my days' +
          'Chillin out maxin relaxin all cool' +
          'And all shootin some b ball outside of the school' +
          'When a couple of guys who were up to no good' +
          'Started makin trouble in my neighborhood' +
          'I got in one little fight and my mon scared' +
          'And said youre movin with your auntie and uncle in Bel-Air' +
          'I begged and pleaded with her day after day',
        imgSrc: 'assets/images/news.jpg',
        imgDesc: 'Desc for the img',
        isFeatured: false,
        route: 'routeFour',
        relatedStories: [1, 2],
        relatedArtists: [1, 2],
        relatedReleases: [1, 2]
      }
    ];
  }
  public getStories(): StoryModel[]{
    return this.stories;
  }
  public getFeaturedStories(): StoryModel[]{
    return this.stories.filter(story => story.isFeatured === true);
  }
  public getStoryByRoute(route): StoryModel[] {
    return this.stories.filter(story => story.route === route);
  }
  public getStoryById(id): StoryModel[] {
    return this.stories.filter(story => story.id === id);
  }
}
