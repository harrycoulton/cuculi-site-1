import {Injectable} from '@angular/core';
import {EventModel} from '../../models/event.model';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  public events: EventModel[];

  constructor() {
    this.events = [
      {
        id: 1,
        title: 'Party time',
        date: '2015-03-25T12:00:00Z',
        eventImg: 'assets/images/album.jpg',
        info: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.',
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
            icon: 'assets/icons/bandcamp.svg',
            href: 'https://www.facebook.com/eccamuse/'
          }
        ],
        relatedArtists: [1, 2, 3]
      },
      {
        id: 2,
        title: 'Funeral for harrys life',
        date: '2015-03-25T12:00:00Z',
        eventImg: 'assets/images/album.jpg',
        info: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.',
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
            icon: 'assets/icons/bandcamp.svg',
            href: 'https://www.facebook.com/eccamuse/'
          }
        ],
        relatedArtists: [2, 3, 4, 5]
      },
      {
        id: 3,
        title: 'Wordpress murder party',
        date: '2015-03-25T12:00:00Z',
        eventImg: 'assets/images/album.jpg',
        info: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.',
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
            icon: 'assets/icons/bandcamp.svg',
            href: 'https://www.facebook.com/eccamuse/'
          }
        ],
        relatedArtists: [1, 4, 5]
      }
    ];
  }
  getEvents(): EventModel[] {
    return this.events;
  }
  getEventsByArtist(artistId): EventModel[] {
    return this.events.filter((event) => {
        return event.relatedArtists.includes(artistId);
    });
  }
}
