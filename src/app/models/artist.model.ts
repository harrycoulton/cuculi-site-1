export class ArtistModel {
  public id: number;
  public name: string;
  public bio: string;
  public imgSrc: string;
  public route: string;
  public forFansOf?: string;
  public links: Array<{
    icon: string;
    href: string;
  }>;
}
