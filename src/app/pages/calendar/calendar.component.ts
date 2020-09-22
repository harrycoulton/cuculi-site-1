import { Component, OnInit } from '@angular/core';
import {EventModel} from '../../models/event.model';
import {EventsService} from '../../services/events-service/events.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public events: EventModel[];

  constructor(private eventsService: EventsService) {
    this.events = eventsService.getEvents();
  }

  ngOnInit(): void {
  }

}
