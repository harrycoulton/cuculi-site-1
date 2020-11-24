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
        heading: '\'Moonbloom\' out now! ',
        text:
          '<p>On Friday 20 November, Bristol-based alt-folk songwriters\' collective Hands of the Heron released bewitching single \'Moonbloom\' on ' +
          'Cuculi Records. It\'s the first single from their second album 13 Moons, due to be released in the new year. The track is accompanied by ' +
          'a cinematic video by filmmaker Tamsin Elliott (From The Coop) featuring dancer Bea Cathro-Wears.' +
          ' <a href="https://youtu.be/7TEBIq0YspU" target="_blank">Watch here</a> </p>' +
          '<p>Tap The Feed, who premiered the video, calls the track "as intriguing as it is calming. The simplicity of the instrumentation highlights the ' +
          'thoughtfulness of the vocal arrangement, whilst emphasising the purity of the voices themselves, potent yet pacifying." The music was engineered by ' +
          'Theo Passingham (Young Waters) at Phantom DS Studio in Bristol, mixed by Alex McIntyre and mastered by Ben Capp. Some of the final vocals were captured ' +
          'at home by the band during lockdown.</p>' +
          '<p>In Moonbloom, the intertwining melodies of four female vocals create pools of rich harmony and sudden moments of stillness. From the ' +
          'trappings of concrete city streets, the song seeks something deeper and wilder in the ancient ritual of full moon celebrations. The haunting ' +
          'voices, accompanied only by pizzicato strings and flute, suggest a mood that is at once bewitching, meditative and questioning. The songwriting ' +
          'is reminiscent of Fleet Foxes, Julianna Barwick, Moses Sumney, Eric Whitacre and Judee Sill.</p>' +
          '<p><a href="https://open.spotify.com/track/6NbOeSTDN8QbtKcKbYNYdC?si=uGogWJ0kQym-5OBpSDrVdA">Stream it on Spotify</a></p>',
        imgSrc: 'assets/images/moonbloom.jpeg',
        imgDesc: 'Still from Moonbloom video',
        isFeatured: true,
        route: 'moonbloom',
        relatedStories: [],
        relatedArtists: [5],
        relatedReleases: []
      },
      {
        id: 2,
        heading: 'We\'ve launched!',
        text:
          '<p>We’ve been thinking about creating this space for a really long time, and we’re so excited to finally bring it out. This idea has formed slowly from the community around songwriters’ collective Hands of the Heron, which has been making and releasing music independently since 2016. Alongside the band, there are some solo projects and offshoot collaborations in our community who have been quietly developing their craft over the last couple of years. We wanted to make a platform where we could experiment creatively, release new music as a collective, and maintain our independence.</p>' +
          '<p>There are six acts on our roster at the moment, who are all due to release new music over the next year. Hands of the Heron will be releasing their second album in early 2021, with the first single due in November 2020. Anonymous They (aka Claire Vine) will release her debut EP during winter 2020, produced by Heron bandmate Bethany Roberts. Two more Herons, BEA and Bec Garthwaite, are working on their debut solo collections, which we’ll be releasing further down the line. Bethany Roberts is also working on a couple of other collaborations as a composer/producer: joining forces with our one-man string section Rowan Elliott for a duo album of original songs, and creating an EP with poet Beth Calverley for poetry/soundscape project House of Figs. </p>' +
          '<p>That feels like enough work to keep us busy for a while, so we’re going to spend the winter focusing on getting these releases out into the world, as well as writing and producing new material within the collective. All the music will be available across Bandcamp and the regular streaming services, and we’ll keep listeners updated on digital/physical releases via social media (@cuculirecords) and our mailing list. Fingers crossed we’ll be able to play some live shows next year, but until then, we’ll be able to deliver some beautiful new sounds direct to your headphones from this community of Bristol’s upcoming songwriters, poets and producers</p>' +
          '<p>Welcome to Cuculi Records!</p>',
        imgSrc: 'assets/icons/logoaltwide.png',
        imgDesc: 'Cuculi Logo',
        isFeatured: false,
        route: 'launch',
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
