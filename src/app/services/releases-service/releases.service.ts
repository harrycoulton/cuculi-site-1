import { Injectable } from '@angular/core';
import {ReleaseModel} from '../../models/release.model';

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {
  public releases: Array<ReleaseModel>;

  constructor() {
    this.releases = [
      {
        id: 1,
        artist: 'Bec Garthwaite',
        title: 'Album name',
        year: '2018',
        imgSrc: 'assets/images/album.jpg',
        info: 'This is some chat about the release',
        route: 'albumname1',
        price: '10.50',
         links: [
          {
            icon: 'assets/icons/facebook.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebook.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebook.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebook.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebook.svg',
            href: 'https://www.facebook.com/eccamuse/'
          }
        ]
      },
      {
        id: 2,
        artist: 'Bec Garthwaite',
        title: 'Album name',
        year: '2018',
        imgSrc: 'assets/images/album.jpg',
        info: 'This is some chat about the release',
        route: 'albumname2',
        price: '10.50',
         links: [
          {
            icon: 'assets/icons/facebook.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebook.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebook.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebook.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebook.svg',
            href: 'https://www.facebook.com/eccamuse/'
          }
        ]
      },
      {
        id: 3,
        artist: 'Bec Garthwaite',
        title: 'Album name',
        year: '2018',
        imgSrc: 'assets/images/album.jpg',
        info: 'This is some chat about the release',
        route: 'albumname3',
        price: '10.50',
         links: [
          {
            icon: 'assets/icons/facebook.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebook.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebook.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebook.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebook.svg',
            href: 'https://www.facebook.com/eccamuse/'
          }
        ]
      },
      {
        id: 4,
        artist: 'Bea Lastname',
        title: 'Album name',
        year: '2018',
        imgSrc: 'assets/images/album.jpg',
        info: 'This is some chat about the release',
        route: 'albumname4',
        price: '10.50',
        links: [
          {
            icon: 'assets/icons/facebook.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebook.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebook.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebook.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebook.svg',
            href: 'https://www.facebook.com/eccamuse/'
          }
        ]
      }
    ];
  }

  getReleases(): Array<ReleaseModel> {
    return this.releases;
  }
  getArtistReleases(artistName): Array<ReleaseModel>{
    return this.releases.filter(release => release.artist === artistName);
  }
  getReleaseByRoute(route): ReleaseModel {
    return this.releases.filter(release => release.route === route)[0];
  }
}
