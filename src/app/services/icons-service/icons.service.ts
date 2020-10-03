import { Injectable } from '@angular/core';
import {faBandcamp, faFacebook, faInstagram, faSoundcloud, faSpotify, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faChrome} from '@fortawesome/free-brands-svg-icons/faChrome';

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  public icons = [
    {
      platform: 'facebook',
      iconId: 1,
      faObj: faFacebook
    },
    {
      platform: 'instagram',
      iconId: 2,
      faObj: faInstagram
    },
    {
      platform: 'soundCloud',
      iconId: 3,
      faObj: faSoundcloud
    },
    {
      platform: 'bandcamp',
      iconId: 4,
      faObj: faBandcamp
    },
    {
      platform: 'website',
      iconId: 5,
      faObj: faChrome
    },
    {
      platform: 'spotify',
      iconId: 6,
      faObj: faSpotify
    },
    {
      platform: 'youtube',
      iconId: 7,
      faObj: faYoutube
    }
  ];

  constructor() { }

  public getIconById = (id) => {
    const icon = this.icons.filter(item => {
      return item.iconId === id;
    });
    return icon[0].faObj;
  }
}
