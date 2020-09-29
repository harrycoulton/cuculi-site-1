import { Injectable } from '@angular/core';
import {ReleaseModel} from '../../models/release.model';

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {
  public releases: Array<ReleaseModel>;

  constructor() {
    this.releases = [];
    // this.releases = [
    //   {
    //     id: 1,
    //     artist: 'Bec Garthwaite',
    //     title: 'Album name',
    //     year: '2018',
    //     imgSrc: 'assets/images/album.jpg',
    // tslint:disable-next-line:max-line-length
    //     info: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    //     route: 'albumname1',
    //     price: '10.50',
    //      links: [
    //       {
    //         icon: 'assets/icons/facebookblk.svg',
    //         href: 'https://www.facebook.com/eccamuse/'
    //       },
    //       {
    //         icon: 'assets/icons/facebookblk.svg',
    //         href: 'https://www.facebook.com/eccamuse/'
    //       },
    //       {
    //         icon: 'assets/icons/facebookblk.svg',
    //         href: 'https://www.facebook.com/eccamuse/'
    //       },
    //       {
    //         icon: 'assets/icons/facebookblk.svg',
    //         href: 'https://www.facebook.com/eccamuse/'
    //       },
    //       {
    //         icon: 'assets/icons/facebookblk.svg',
    //         href: 'https://www.facebook.com/eccamuse/'
    //       }
    //     ]
    //   },
    //   {
    //     id: 2,
    //     artist: 'Bec Garthwaite',
    //     title: 'Album name',
    //     year: '2018',
    //     imgSrc: 'assets/images/album.jpg',
    //     info: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    //     route: 'albumname2',
    //     price: '10.50',
    //      links: [
    //       {
    //         icon: 'assets/icons/facebookblk.svg',
    //         href: 'https://www.facebook.com/eccamuse/'
    //       },
    //       {
    //         icon: 'assets/icons/facebookblk.svg',
    //         href: 'https://www.facebook.com/eccamuse/'
    //       },
    //       {
    //         icon: 'assets/icons/facebookblk.svg',
    //         href: 'https://www.facebook.com/eccamuse/'
    //       },
    //       {
    //         icon: 'assets/icons/facebookblk.svg',
    //         href: 'https://www.facebook.com/eccamuse/'
    //       },
    //       {
    //         icon: 'assets/icons/facebookblk.svg',
    //         href: 'https://www.facebook.com/eccamuse/'
    //       }
    //     ]
    //   },
    //   {
    //     id: 3,
    //     artist: 'Bec Garthwaite',
    //     title: 'Album name',
    //     year: '2018',
    //     imgSrc: 'assets/images/album.jpg',
    //     info: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    //     route: 'albumname3',
    //     price: '10.50',
    //      links: [
    //       {
    //         icon: 'assets/icons/facebookblk.svg',
    //         href: 'https://www.facebook.com/eccamuse/'
    //       },
    //       {
    //         icon: 'assets/icons/facebookblk.svg',
    //         href: 'https://www.facebook.com/eccamuse/'
    //       },
    //       {
    //         icon: 'assets/icons/facebookblk.svg',
    //         href: 'https://www.facebook.com/eccamuse/'
    //       },
    //       {
    //         icon: 'assets/icons/facebookblk.svg',
    //         href: 'https://www.facebook.com/eccamuse/'
    //       },
    //       {
    //         icon: 'assets/icons/facebookblk.svg',
    //         href: 'https://www.facebook.com/eccamuse/'
    //       }
    //     ]
    //   },
    //   {
    //     id: 4,
    //     artist: 'Bea Lastname',
    //     title: 'Album name',
    //     year: '2018',
    //     imgSrc: 'assets/images/album.jpg',
    //     info: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    //     route: 'albumname4',
    //     price: '10.50',
    //     links: [
    //       {
    //         icon: 'assets/icons/facebookblk.svg',
    //         href: 'https://www.facebook.com/eccamuse/'
    //       },
    //       {
    //         icon: 'assets/icons/facebookblk.svg',
    //         href: 'https://www.facebook.com/eccamuse/'
    //       },
    //       {
    //         icon: 'assets/icons/facebookblk.svg',
    //         href: 'https://www.facebook.com/eccamuse/'
    //       },
    //       {
    //         icon: 'assets/icons/facebookblk.svg',
    //         href: 'https://www.facebook.com/eccamuse/'
    //       },
    //       {
    //         icon: 'assets/icons/facebookblk.svg',
    //         href: 'https://www.facebook.com/eccamuse/'
    //       }
    //     ]
    //   }
    // ];
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
