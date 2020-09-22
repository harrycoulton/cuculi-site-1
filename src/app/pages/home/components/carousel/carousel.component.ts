import {Component, Input, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {ArtistsServiceService} from '../../../../services/artists-service/artists-service.service';
import {ArtistModel} from '../../../../models/artist.model';
import {StoryModel} from '../../../../models/story.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  protected featuredArtist: ArtistModel;
  @Input() featuredStories: StoryModel[];

  slides = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    center: true,
    autoplay: true,
    autoplayHoverPause: true,
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
  constructor(private artistsService: ArtistsServiceService) {
      const artists = artistsService.getArtists();
      this.featuredArtist = artists[Math.floor(Math.random() * artists.length)];
  }

  ngOnInit(): void {
    console.log(this.featuredStories);
    this.slides.push({
      heading: this.featuredArtist.name,
      subHeading: 'Featured Artist',
      imageSrc: this.featuredArtist.imgSrc,
      link: 'artist/' + this.featuredArtist.route
    });
    const topTwoFeaturedStories = [];
    topTwoFeaturedStories.push(this.featuredStories[0], this.featuredStories[1] ?? this.featuredStories[1]);
    topTwoFeaturedStories.forEach(story => {
      this.slides.push({
        heading: story.heading,
        subHeading: story.quote ? story.quote : 'Click here to find out more',
        imageSrc: story.imgSrc,
        link: story.route
      });
    });
  }

}
