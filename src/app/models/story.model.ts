export class StoryModel {
  id: number;
  heading: string;
  quote?: string;
  text: string;
  imgSrc: string;
  imgDesc: string;
  isFeatured: boolean;
  route: string;
  relatedStories: number[];
  relatedArtists: number[];
  relatedReleases: number[];
}
