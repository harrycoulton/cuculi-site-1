export class ReleaseModel {
  id: number;
  artist: number;
  title: string;
  year?: string;
  imgSrc: string;
  info: string;
  route: string;
  price: string;
  public links: Array<{
    icon: string;
    iconId: number;
    href: string;
    faObj?: object;
  }>;
  relatedArtists: number[];
}
