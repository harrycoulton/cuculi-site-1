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
        artist: 5,
        title: 'Moonbloom',
        year: '20/11/2020',
        imgSrc: 'assets/images/moonbloom.jpeg',
        info: '<p>Amid the noise of urban life, a small arrow of moonlight falls between the curtains and prods us to look up, ' +
          'coaxing us through streets of terraced houses to a hill hidden by ash trees. We pick up our feet and hurry towards ' +
          'the drums that mark a distant heartbeat. We see bonfire sparks ahead on a path lit by the faint silver glow of a ' +
          'moon in full bloom. Here is something bigger than us. The call is ancient and insistent, sirens among sirens, ' +
          'a cry of cascading harmonies yearning for life…</p>' +
          '<p>In \'Moonbloom\', the intertwining melodies of four female vocals create pools of rich harmony and sudden moments ' +
          'of stillness. From the trappings of concrete city streets, the song seeks something deeper and wilder in the ancient ' +
          'ritual of full moon celebrations. The haunting voices, accompanied only by pizzicato strings and flute, suggest a ' +
          'mood that is at once bewitching, meditative and questioning. It\'s the first single from Hands of the Heron\'s ' +
          'forthcoming new album 13 Moons.</p>' +
          '<p>Moonbloom is out now on all digital platforms.</p>',
        route: 'moonbloom',
        price: '1',
         links: [
           {
             icon: 'bandcamp',
             iconId: 4,
             href: 'https://handsoftheheron.bandcamp.com/track/moonbloom-single'
           },
           {
             icon: 'spotify',
             iconId: 6,
             href: 'https://open.spotify.com/track/6NbOeSTDN8QbtKcKbYNYdC?si=uGogWJ0kQym-5OBpSDrVdA'
           },
        ],
        relatedArtists: []
      },
      {
        id: 2,
        artist: 4,
        title: 'Brambles',
        year: '06/11/2020',
        imgSrc: 'assets/images/brambes.png',
        info: 'This meditative poetry + soundscape piece captures the surreal and contradictory moods of the first' +
          ' lockdown - grief, gratitude, anxiety - as we collectively inhaled and watched the year become a quiet, ' +
          'sombre spring. Bethany M. Roberts wrote the words while walking through Eastville Park in April, and Rowan' +
          ' Elliott transformed their brief sketches of string ideas into a full multi-layered soundscape that sits ' +
          'behind and around the poem, swelling gently and fading away as a peaceful mirror to words of pathos. ' +
          'Filmmaker Tamsin Elliott included the piece in lockdown documentary From The Coop, an observation of ' +
          'their lives as a house of musicians during lockdown. The track is available now as a single via Bandcamp ' +
          'and all digital streaming services.',
        route: 'brambles',
        price: '10.50',
        links: [
          {
            icon: 'bandcamp',
            iconId: 4,
            href: 'https://cuculirecords.bandcamp.com/releases'
          },
        ],
        relatedArtists: []
      },
      {
        id: 3,
        artist: 1,
        title: 'Tunnel EP',
        year: '04/12/2020',
        imgSrc: 'assets/images/tunnel.jpg',
        info: '<p>Tunnel is the debut EP from emerging folk artist Anonymous They. The distinctive, rich voice of ' +
          'songwriter Claire Vine (Hands of the Heron) is in full bloom across these six original tracks, each' +
          ' one charting a passage through a powerful emotional journey. Unashamedly political and poignantly ' +
          'personal, her songs are inspired by protest movements, the refugee crisis and her longing for justice ' +
          'in a more sustainable world. Her voice, vibrant and raw, cuts skilfully between moments of intimate ' +
          'solitude and carefully arranged harmonies, with atmospheric accompaniment from harmonium drones and ' +
          'subtle strings. The EP is produced and mixed by Bethany M. Roberts, who provides additional vocals ' +
          'alongside Heron bandmates BEA and Bec Garthwaite.</p>' +
              '<p>Tunnel will be available on all digital platforms on 4 December.</p>',
        route: 'tunnel',
        price: '10.50',
        links: [
          {
            icon: 'bandcamp',
            iconId: 4,
            href: 'https://anonymousthey.bandcamp.com/'
          },
        ],
        relatedArtists: []
      }
      ];
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
