import { Component, OnInit } from '@angular/core';
import {IconsService} from '../../services/icons-service/icons.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public links = [
    {
      link: 'https://www.facebook.com/cuculirecords',
      iconId: 1,
      icon: this.iconsService.getIconById(1)
    },
    {
      link: 'https://www.instagram.com/cuculirecords/',
      iconId: 2,
      icon: this.iconsService.getIconById(2)
    },
    {
      link: 'https://cuculirecords.bandcamp.com/',
      iconId: 4,
      icon: this.iconsService.getIconById(4)
    }
  ];

  constructor(private iconsService: IconsService){

  }

  ngOnInit(): void {
  }

}
