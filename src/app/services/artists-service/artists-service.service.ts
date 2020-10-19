import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ArtistModel} from '../../models/artist.model';
import {IconsService} from '../icons-service/icons.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistsServiceService {
  artists: Array<ArtistModel>;

  constructor(privateIconsService: IconsService) {
    this.artists = [
      {
        id: 1,
        name: 'ANONYMOUS THEY',
        bio: '<p>Anonymous They’s songs sound like they’ve always existed. Songwriter Claire Vine has a knack for condensing urgent political and social commentary into concise, uncompromising moments of raw beauty. Her debut EP is due to be released this autumn - expect harmonium, vocal layers, and a thread of honest observations about the state of the world.</p>',
        imgSrc: 'assets/images/artists/artists-new/anonymous-they.jpg',
        forFansOf: [
          'Cosmo Sheldrake', 'Sam Lee', 'Mountain Man', 'Lankum'
        ],
        route: 'anonymous-they',
        isFeatured: true,
        links: [
          {
            icon: 'facebook',
            iconId: 1,
            href: 'https://www.facebook.com/anonymousthey/'
          },
          {
            icon: 'instagram',
            iconId: 2,
            href: 'https://www.instagram.com/anonymousthey/'
          }
        ]
      },
      {
        id: 2,
        name: 'BEA',
        bio: '<p>BEA sounds like the watercolours she paints, all shapes and bold colours in memorable fragments of melody. She sings with her whole body, delivering her songs with a honeyed punch of powerful vulnerability. Balancing irresistibly catchy hooks with the deep, brief sobriety of old heartbreak country ballads, her songs stitch together enduring stories of her search for connection in these strange dystopian times.</p>',
        imgSrc: 'assets/images/artists/artists-new/bea.jpg',
        forFansOf: [
          'Rozi Plain',
          'The Be Good Tanyas',
          'Nanci Griffith',
          'Jackson C. Franke',
        ],
        route: 'bea',
        isFeatured: false,
        links: [
          {
            icon: 'facebook',
            iconId: 1,
            href: 'https://www.facebook.com/bearoseleemusic/'
          },
          {
            icon: 'instagram',
            iconId: 2,
            href: 'https://www.instagram.com/bearosepipe/'
          }
        ]
      },
      {
        id: 3,
        name: 'BEC GARTHWAITE',
        bio: '<p>Bec Garthwaite pours an innately detailed craftsmanship into her songwriting. Her fingerpicked guitar strings construct a cat’s cradle in which her gentle, defiant voice can unfold itself, syllable by syllable, note by deliberate note. There’s a sense of wry melancholy in her dreamlike sound, as though she has looked right into the kaleidoscope and needs to tell us, with quiet assurance and lyrical poetry, what she saw between the lines.</p>',
        imgSrc: 'assets/images/artists/artists-new/becgarthwaite.jpg',
        forFansOf: ['Vashti Bunyan', 'Leonard Cohen', 'Bedouine', 'Laura Marling'
        ],
        route: 'bec-garthwaite',
        isFeatured: false,
        links: [
          {
            icon: 'facebook',
            iconId: 1,
            href: 'https://www.facebook.com/eccamuse/'
          },
          {
            icon: 'instagram',
            iconId: 2,
            href: 'https://www.instagram.com/becgarthwaite/'
          }
        ]
      },
      {
        id: 4,
        name: 'BETHANY ROBERTS & ROWAN ELLIOTT ',
        bio: '<p>Bethany Roberts and Rowan Elliott explore the fertile space between their main projects: respectively Hands of the Heron\'s choral songcraft ' +
          'and Solana\'s progressive instrumental compositions. Bethany\'s intricate banjo patterns interlace with Rowan\'s polyphonic string soundscapes to' +
          ' frame image-rich poetry and cascading vocal lines. They are currently recording their debut album, which will be released in 2021.</p>',
        forFansOf: [
          'Alela Diane',
          'Danish String Quartet',
          'Rachel Sermanni',
          'Rachael Dadd',
        ],
        imgSrc: 'assets/images/artists/artists-new/bethrowan2.jpg',
        route: 'bethany-roberts-rowan-elliott',
        isFeatured: true,
        links: [
          {
            icon: 'facebook',
            iconId: 1,
            href: 'https://facebook.com/bethanymrobertsmusic'
          },
          {
            icon: 'soundcloud',
            iconId: 3,
            href: 'https://soundcloud.com/bethanymroberts/sets/bethany-roberts-rowan-elliott'
          },
          {
            icon: 'youtube',
            iconId: 7,
            href: 'https://www.youtube.com/watch?v=52ce-p6eBT4'
          },
          {
            icon: 'instagram',
            iconId: 2,
            href: 'http://instagram.com/bethany.m.roberts'
          }
        ]
      },
      {
        id: 5,
        name: 'HANDS OF THE HERON',
        bio: '<p>Hands of the Heron are a songwriters’ collective from Bristol, UK. Best known for their distinctive multilayered vocal harmonies, their shapeshifting ' +
          'sound draws from an eclectic pool of influence including contemporary alt-folk, polyphonic choral music, 60s-era psychedelia, and cinematic minimalism. </p>' +
          '' +
          '<p>Their highly anticipated second album will be released in early 2021, and features songwriting from BEA, Anonymous They, Bec Garthwaite ' +
          'and Bethany Roberts with dreamy electric guitar from Tom Yates, all cocooned within an immersive sonic landscape that listeners can lose themselves in.</p>',
        imgSrc: 'assets/images/artists/artists-new/handsoftheheron.jpg',
        forFansOf: [
          'The Staves',
          'Fleet Foxes',
          'This Is The Kit',
          'WOOM',
        ],
        route: 'hands-of-the-heron',
        isFeatured: true,
        links: [
          {
            icon: 'facebook',
            iconId: 1,
            href: 'https://www.facebook.com/handsoftheheron'
          },
          {
            icon: 'instagram',
            iconId: 2,
            href: 'https://www.instagram.com/handsoftheheron'
          },
          {
            icon: 'soundcloud',
            iconId: 3,
            href: 'https://www.soundcloud.com/handsoftheheron'
          },
          {
            icon: 'bandcamp',
            iconId: 4,
            href: 'https://www.handsoftheheron.bandcamp.com'
          },
          {
            icon: 'spotify',
            iconId: 6,
            href: 'https://open.spotify.com/artist/7HAdrOrqHzAJ56wXbi2uhE?si=fXPAFgViRcu1-yBbmkzuow'
          }
        ]
      },
      {
        id: 6,
        name: 'HOUSE OF FIGS',
        bio: '<p>House of Figs is a storm-calming collaboration between poet Beth Calverley (The Poetry Machine) and composer/producer Bethany Roberts. Ideas that ' +
          'begin as conversations over cups of tea find their way into conjured words poured into Beth’s typewriter as Bethany improvises loops of banjo, violin, ' +
          'voice and piano. </p>' +
          '<p>Each piece is honed until the layers weave seamlessly together to create a sanctuary for patient words expressing their shared gratitude for every day ' +
          'wonders. They will release an EP in 2021 to celebrate Beth Calverley’s debut published collection Brave Faces & Other Smiles.</p>',
        imgSrc: 'assets/images/artists/artists-new/houseoffigs.jpg',
        route: 'house-of-figs',
        forFansOf: ['Simon & Garfunkel', 'Alabaster DePlume', 'Kae Tempest', 'Joni Mitchell'],
        isFeatured: true,
        links: [
          {
            icon: 'soundcloud',
            iconId: 3,
            href: 'https://soundcloud.com/bethanymroberts/love-letter-to-the-nhs-house-of-figs'
          },
          {
            icon: 'facebook',
            iconId: 1,
            href: 'https://www.facebook.com/ThePoetryMachineUK/'
          },
          {
            icon: 'instagram',
            iconId: 2,
            href: 'https://www.instagram.com/poetrymachine/'
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
  getFeaturedArtists(): ArtistModel[] {
    return this.artists.filter(artist => artist.isFeatured === true);
  }
}
