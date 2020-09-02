export class ReleaseModel {
  id: number;
  artist: string;
  title: string;
  year?: string;
  imgSrc: string;
  info: string;
  route: string;
  price: string;
  links: Array<{icon: string, href: string; }>;
}
