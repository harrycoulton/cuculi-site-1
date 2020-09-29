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
        bio: 'Anonymous They’s songs sound like they’ve always existed. Songwriter Claire Vine has a knack for condensing urgent political and social commentary into concise, uncompromising moments of raw beauty. Her debut EP is due to be released this autumn - expect harmonium, vocal layers, and a thread of honest observations about the state of the world.',
        imgSrc: 'assets/images/artists/artists-new/anonymous-they.jpg',
        forFansOf: [
          'Cosmo Sheldrake', 'Sam Lee', 'Mountain Man', 'Lankum'
        ],
        route: 'anonymous-they',
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
        bio: 'BEA sounds like the watercolours she paints, all shapes and bold colours in memorable fragments of melody. She sings with her whole body, delivering her songs with a honeyed punch of powerful vulnerability. Balancing irresistibly catchy hooks with the deep, brief sobriety of old heartbreak country ballads, her songs stitch together enduring stories of her search for connection in these strange dystopian times.',
        imgSrc: 'assets/images/artists/artists-new/bea.jpg',
        forFansOf: [
          'Rozi Plain',
          'The Be Good Tanyas',
          'Nanci Griffith',
          'Jackson C. Franke',
        ],
        route: 'bea',
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
        bio: 'Bec Garthwaite pours an innately detailed craftsmanship into her songwriting. Her fingerpicked guitar strings construct a cat’s cradle in which her gentle, defiant voice can unfold itself, syllable by syllable, note by deliberate note. There’s a sense of wry melancholy in her dreamlike sound, as though she has looked right into the kaleidoscope and needs to tell us, with quiet assurance and lyrical poetry, what she saw between the lines.',
        imgSrc: 'assets/images/artists/artists-new/becgarthwaite.jpg',
        forFansOf: ['Vashti Bunyan', 'Rachel Sermanni', 'Radiohead', 'Laura Marling'
        ],
        route: 'bec-garthwaite',
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
        bio: 'Bethany Roberts and Rowan Elliott explore the space between intricate banjo-led songwriting, image-rich poetry and polyrhythmic soundscapes built from the ebb and flow of strings.',
        forFansOf: [
          'Alela Diane',
          'Danish String Quartet',
          'Joni Mitchell',
          'Rachael Dadd',
        ],
        imgSrc: 'assets/images/artists/artists-new/bethrowan.jpg',
        route: 'bethany-roberts-rowan-elliott',
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
          }
        ]
      },
      {
        id: 5,
        name: 'HANDS OF THE HERON',
        bio: 'Hands of the Heron are a songwriters’ collective from Bristol, UK. Best known for their distinctive multilayered vocal harmonies, their shapeshifting sound draws from an eclectic pool of influence including contemporary alt-folk, polyphonic choral music, 60s-era psychedelia, and cinematic minimalism. Their highly anticipated second album will be released during winter 2020, and features songwriting from BEA, Anonymous They, Bec Garthwaite and Bethany Roberts, all cocooned within an immersive sonic landscape that listeners can lose themselves in.',
        imgSrc: 'assets/images/artists/artists-new/handsoftheheron.jpg',
        forFansOf: [
          'The Staves',
          'Fleet Foxes',
          'This Is The Kit',
          'WOOM',
        ],
        route: 'hands-of-the-heron',
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
            icon: 'website',
            iconId: 5,
            href: 'https://www.handsoftheheron.com'
          }
        ]
      },
      {
        id: 5,
        name: 'HOUSE OF FIGS',
        bio: 'House of Figs is a spell-casting, storm-calming collaboration between poet Beth Calverley (Poetry Machine) and composer/producer Bethany Roberts. Ideas that begin as conversations over cups of tea find their way into conjured words poured into Beth’s typewriter as Bethany improvises loops of banjo, violin, voice and piano. Each ‘spoken song’ is shaped and honed until the layers weave seamlessly together to create a sanctuary for patient, persuasive words expressing their shared gratitude for every day wonders. They are recording an EP this autumn to celebrate Beth Calverley’s debut published collection ‘Brave Faces & Other Smiles’, out in November on Verve Poetry Press.',
        imgSrc: 'assets/images/artists/artists-new/houseoffigs.jpg',
        route: 'house-of-figs',
        links: [
          {
            icon: 'soundcloud',
            iconId: 3,
            href: 'https://soundcloud.com/bethanymroberts/love-letter-to-the-nhs-house-of-figs'
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
