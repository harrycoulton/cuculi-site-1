import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ArtistModel} from '../../models/artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistsServiceService {
  artists: Array<ArtistModel>;

  constructor() {
    this.artists = [
      {
        id: 1,
        name: 'Bec Garthwaite',
        bio: 'With tight vocal harmonies at the core, Hands of the Heron weave song-stories of love, loss and magical happenings accompanied by banjo, flute, accordion, clarinet, guitar and anything else they can get their hands on.\n' +
          '\n' +
          'Based in Bristol, UK, they have been performing for more than two years as a female-led songwriters collective. Combining influences from contemporary classical and psychedelic folk, their sound is a technicolour tapestry of ever-changing landscapes.\n' +
          '\n' +
          'Formed in late 2016, they recorded their debut album in spring 2017 following a successful Kickstarter campaign.\n' +
          'Past festival appearances include Shambala, Boomtown, Bath Folk Festival, Buddhafield, Camp Elsewhere, Valley Fest, Bimble Bandada, Brainchild, and more. They released an EP in 2017, and have begun recording their second album. ',
        imgSrc: 'assets/images/artists/bec.jpg',
        route: 'becgarthwaite',
        links: [
          {
            icon: 'assets/icons/facebookblk.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/instagramblk.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/soundcloud.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/spotify.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/bandcamp.svg',
            href: 'https://www.facebook.com/eccamuse/'
          }
        ]
      },
      {
        id: 2,
        name: 'Hands of the Heron',
        bio: 'With tight vocal harmonies at the core, Hands of the Heron weave song-stories of love, loss and magical happenings accompanied by banjo, flute, accordion, clarinet, guitar and anything else they can get their hands on.\n' +
          '\n' +
          'Based in Bristol, UK, they have been performing for more than two years as a female-led songwriters collective. Combining influences from contemporary classical and psychedelic folk, their sound is a technicolour tapestry of ever-changing landscapes.\n' +
          '\n' +
          'Formed in late 2016, they recorded their debut album in spring 2017 following a successful Kickstarter campaign.\n' +
          'Past festival appearances include Shambala, Boomtown, Bath Folk Festival, Buddhafield, Camp Elsewhere, Valley Fest, Bimble Bandada, Brainchild, and more. They released an EP in 2017, and have begun recording their second album. ',
        imgSrc: 'assets/images/artists/heron.jpg',
        route: 'handsoftheheron',
        links: [
          {
            icon: 'assets/icons/facebookblk.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebookblk.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebookblk.svg',
            href: 'https://www.facebook.com/eccamuse/'
          }
        ]
      },
      {
        id: 3,
        name: 'Beth Roberts',
        bio: 'With tight vocal harmonies at the core, Hands of the Heron weave song-stories of love, loss and magical happenings accompanied by banjo, flute, accordion, clarinet, guitar and anything else they can get their hands on.\n' +
          '\n' +
          'Based in Bristol, UK, they have been performing for more than two years as a female-led songwriters collective. Combining influences from contemporary classical and psychedelic folk, their sound is a technicolour tapestry of ever-changing landscapes.\n' +
          '\n' +
          'Formed in late 2016, they recorded their debut album in spring 2017 following a successful Kickstarter campaign.\n' +
          'Past festival appearances include Shambala, Boomtown, Bath Folk Festival, Buddhafield, Camp Elsewhere, Valley Fest, Bimble Bandada, Brainchild, and more. They released an EP in 2017, and have begun recording their second album. ',
        imgSrc: 'assets/images/artists/beth.jpg',
        route: 'bethroberts',
        links: [
          {
            icon: 'assets/icons/facebookblk.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebookblk.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebookblk.svg',
            href: 'https://www.facebook.com/eccamuse/'
          }
        ]
      },
      {
        id: 4,
        name: 'Bea Lastname',
        bio: 'With tight vocal harmonies at the core, Hands of the Heron weave song-stories of love, loss and magical happenings accompanied by banjo, flute, accordion, clarinet, guitar and anything else they can get their hands on.\n' +
          '\n' +
          'Based in Bristol, UK, they have been performing for more than two years as a female-led songwriters collective. Combining influences from contemporary classical and psychedelic folk, their sound is a technicolour tapestry of ever-changing landscapes.\n' +
          '\n' +
          'Formed in late 2016, they recorded their debut album in spring 2017 following a successful Kickstarter campaign.\n' +
          'Past festival appearances include Shambala, Boomtown, Bath Folk Festival, Buddhafield, Camp Elsewhere, Valley Fest, Bimble Bandada, Brainchild, and more. They released an EP in 2017, and have begun recording their second album. ',
        imgSrc: 'assets/images/artists/bea.jpg',
        route: 'bealastname',
        links: [
          {
            icon: 'assets/icons/facebookblk.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebookblk.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebookblk.svg',
            href: 'https://www.facebook.com/eccamuse/'
          }
        ]
      },
      {
        id: 5,
        name: 'Claire Vine',
        bio: 'With tight vocal harmonies at the core, Hands of the Heron weave song-stories of love, loss and magical happenings accompanied by banjo, flute, accordion, clarinet, guitar and anything else they can get their hands on.\n' +
          '\n' +
          'Based in Bristol, UK, they have been performing for more than two years as a female-led songwriters collective. Combining influences from contemporary classical and psychedelic folk, their sound is a technicolour tapestry of ever-changing landscapes.\n' +
          '\n' +
          'Formed in late 2016, they recorded their debut album in spring 2017 following a successful Kickstarter campaign.\n' +
          'Past festival appearances include Shambala, Boomtown, Bath Folk Festival, Buddhafield, Camp Elsewhere, Valley Fest, Bimble Bandada, Brainchild, and more. They released an EP in 2017, and have begun recording their second album. ',
        imgSrc: 'assets/images/artists/claire.jpg',
        route: 'clairevine',
        links: [
          {
            icon: 'assets/icons/facebookblk.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebookblk.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebookblk.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebookblk.svg',
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'assets/icons/facebookblk.svg',
            href: 'https://www.facebook.com/eccamuse/'
          }
        ]
      }
    ];
  }

  getArtists(): ArtistModel[] {
    return this.artists;
  }
  getArtistByName(artistName): ArtistModel[]{
    return this.artists.filter(artist => artist.route === artistName);
  }
  getArtistById(artistId): ArtistModel[]{
    return this.artists.filter(artist => artist.id === artistId);
  }
}
