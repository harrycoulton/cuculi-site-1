import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  stories = [
    {
      heading: ' 1 News story heading',
      text: 'Now this is a story all about how' +
        'My life got flipped turned upside down' +
        'And Id like to take a minute just sit right there' +
        'Ill tell you how I become the prince of a town called Bel Air' +
        'In west Philadelphia born and raised' +
        'On the playground is where I spent most of my days' +
        'Chillin out maxin relaxin all cool' +
        'And all shootin some b ball outside of the school' +
        'When a couple of guys who were up to no good' +
        'Started makin trouble in my neighborhood' +
        'I got in one little fight and my mon scared' +
        'And said youre movin with your auntie and uncle in Bel-Air' +
        'I begged and pleaded with her day after day',
      imgSrc: 'assets/images/news.jpg',
      imgDesc: 'Desc for the img',
      isFeatured: true,
      route: 'a-string'
    },
    {
      heading: 'News story heading',
      text: 'Now this is a story all about how' +
        'My life got flipped turned upside down' +
        'And Id like to take a minute just sit right there' +
        'Ill tell you how I become the prince of a town called Bel Air' +
        'In west Philadelphia born and raised' +
        'On the playground is where I spent most of my days' +
        'Chillin out maxin relaxin all cool' +
        'And all shootin some b ball outside of the school' +
        'When a couple of guys who were up to no good' +
        'Started makin trouble in my neighborhood' +
        'I got in one little fight and my mon scared' +
        'And said youre movin with your auntie and uncle in Bel-Air' +
        'I begged and pleaded with her day after day',
      imgSrc: 'assets/images/news.jpg',
      imgDesc: 'Desc for the img',
      isFeatured: false,
      route: 'a-string'
    },
    {
      heading: 'News story heading',
      text: 'Now this is a story all about how' +
        'My life got flipped turned upside down' +
        'And Id like to take a minute just sit right there' +
        'Ill tell you how I become the prince of a town called Bel Air' +
        'In west Philadelphia born and raised' +
        'On the playground is where I spent most of my days' +
        'Chillin out maxin relaxin all cool' +
        'And all shootin some b ball outside of the school' +
        'When a couple of guys who were up to no good' +
        'Started makin trouble in my neighborhood' +
        'I got in one little fight and my mon scared' +
        'And said youre movin with your auntie and uncle in Bel-Air' +
        'I begged and pleaded with her day after day',
      imgSrc: 'assets/images/news.jpg',
      imgDesc: 'Desc for the img',
      isFeatured: false,
      route: 'a-string'
    },
    {
      heading: 'News story heading',
      text: 'Now this is a story all about how' +
        'My life got flipped turned upside down' +
        'And Id like to take a minute just sit right there' +
        'Ill tell you how I become the prince of a town called Bel Air' +
        'In west Philadelphia born and raised' +
        'On the playground is where I spent most of my days' +
        'Chillin out maxin relaxin all cool' +
        'And all shootin some b ball outside of the school' +
        'When a couple of guys who were up to no good' +
        'Started makin trouble in my neighborhood' +
        'I got in one little fight and my mon scared' +
        'And said youre movin with your auntie and uncle in Bel-Air' +
        'I begged and pleaded with her day after day',
      imgSrc: 'assets/images/news.jpg',
      imgDesc: 'Desc for the img',
      isFeatured: false,
      route: 'a-string'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
