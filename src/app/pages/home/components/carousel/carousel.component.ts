import {Component, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  slides = [
    {heading: 'A thing!',
      subHeading: 'This whole bit of text is a link to the thing',
      imageSrc: 'assets/images/banner1.jpg'
    },
    {heading: 'Stuff and others',
      subHeading: 'This whole bit of text is a link to the thing',
      imageSrc: 'assets/images/banner2.jpg'
    },
    {heading: 'We are a record label',
      subHeading: 'This whole bit of text is a link to the thing',
      imageSrc: 'assets/images/banner3.jpg'
    }
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    center: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  };
  constructor() { }

  ngOnInit(): void {
  }

}
