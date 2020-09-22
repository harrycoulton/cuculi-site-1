import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { ReleasesComponent } from './pages/releases/releases.component';
import { NewsComponent } from './pages/home/components/news/news.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './pages/home/components/carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlideComponent } from './pages/home/components/carousel/slide/slide.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './pages/home/components/about-us/about-us.component';
import { TwitterComponent } from './pages/home/components/twitter/twitter.component';
import { TileComponent } from './pages/home/components/news/tile/tile.component';
import { InstaFeedComponent } from './app-components/insta-feed/insta-feed.component';
import { ArtistTileComponent } from './pages/artists/artist-tile/artist-tile.component';
import { ArtistPageComponent } from './pages/artists/artist-page/artist-page.component';
import { ReleaseTileComponent } from './pages/releases/release-tile/release-tile.component';
import { ReleasePageComponent } from './pages/releases/release-page/release-page.component';
import { UpcomingEventComponent } from './pages/calendar/upcoming-event/upcoming-event.component';
import { NewsMainComponent} from './pages/news/news/news-main.component';
import { NewsPageComponent } from './pages/news/news-page/news-page/news-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ArtistsComponent,
    ReleasesComponent,
    NewsComponent,
    CalendarComponent,
    ContactComponent,
    CarouselComponent,
    SlideComponent,
    FooterComponent,
    AboutUsComponent,
    TwitterComponent,
    TileComponent,
    InstaFeedComponent,
    ArtistTileComponent,
    ArtistPageComponent,
    ReleaseTileComponent,
    ReleasePageComponent,
    UpcomingEventComponent,
    NewsMainComponent,
    NewsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
