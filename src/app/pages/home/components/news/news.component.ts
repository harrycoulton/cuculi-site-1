import {Component, Input, OnInit} from '@angular/core';
import {StoryModel} from '../../../../models/story.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() stories: StoryModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
