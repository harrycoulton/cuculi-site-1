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
        heading: 'We\'ve launched!',
        text:
          '<p>We’ve been thinking about creating this space for a really long time, and we’re so excited to finally bring it out. This idea has formed slowly from the community around songwriters’ collective Hands of the Heron, which has been making and releasing music independently since 2016. Alongside the band, there are some solo projects and offshoot collaborations in our community who have been quietly developing their craft over the last couple of years. We wanted to make a platform where we could experiment creatively, release new music as a collective, and maintain our independence. \n</p>' +
          '<p>There are six acts on our roster at the moment, who are all due to release new music over the next year. Hands of the Heron will be releasing their second album in early 2021, with the first single due in late October 2020. Claire Vine (aka Anonymous \n' +
          'They) will release her debut Anonymous They EP during autumn 2020, produced by Heron bandmate Bethany Roberts. Two more Herons, BEA and Bec Garthwaite, are working on their debut solo collections, which we’ll be releasing further down the line. Bethany Roberts is also working on a couple of other collaborations as a composer/producer: joining forces with our one-man string section Rowan Elliott for a duo album of original songs, and creating an EP with poet Beth Calverley for their project House of Figs. \n</p>' +
          '<p>That feels like enough work to keep us busy for a while, so we’re going to spend the winter focusing on getting these releases out into the world, as well as writing and producing new material within the collective. All the music will be available across Bandcamp and the regular streaming services, and we’ll keep listeners updated on digital/physical releases via social media (@cuculirecords) and our mailing list. Fingers crossed we’ll be able to play some live shows next year, but until then, we’ll be able to deliver some beautiful new sounds direct to your headphones from this community of Bristol’s upcoming songwriters, poets and producers.\n</p>' +
          '<p>Welcome to Cuculi Records! \n</p>',
        imgSrc: 'assets/icons/logoalt.png',
        imgDesc: 'Cuculi Logo',
        isFeatured: true,
        route: 'routeOne',
        relatedStories: [],
        relatedArtists: [],
        relatedReleases: []
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
