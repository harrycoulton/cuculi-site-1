export class EventModel {
  id: number;
  title: string;
  date: string;
  info: string;
  eventImg: string;
  links: Array<{href: string, icon: string}>;
  relatedArtists: number[];
}
