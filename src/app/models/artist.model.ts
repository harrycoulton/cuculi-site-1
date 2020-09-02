export class ArtistModel {
  public name: string;
  public bio: string;
  public imgSrc: string;
  public route: string;
  public links: Array<{
    icon: string;
    href: string;
  }>;
}
