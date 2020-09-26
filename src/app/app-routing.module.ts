import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ArtistsComponent} from './pages/artists/artists.component';
import {CalendarComponent} from './pages/calendar/calendar.component';
import {ContactComponent} from './pages/contact/contact.component';
import {ReleasesComponent} from './pages/releases/releases.component';
import {ArtistPageComponent} from './pages/artists/artist-page/artist-page.component';
import {ReleasePageComponent} from './pages/releases/release-page/release-page.component';
import {NewsMainComponent} from './pages/news/news/news-main.component';
import {NewsPageComponent} from './pages/news/news-page/news-page/news-page.component';
import {MobNavComponent} from './nav/mob-nav/mob-nav/mob-nav.component';
import {NotFoundComponentComponent} from './pages/not-found-component/not-found-component.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'releases', component: ReleasesComponent},
  {path: 'news', component: NewsMainComponent},
  {path: 'artist/:name', component: ArtistPageComponent},
  {path: 'release/:name', component: ReleasePageComponent},
  {path: 'news/:route', component: NewsPageComponent},
  {path: 'news/:route/news/:route', redirectTo: 'news/:route'},
  {path: 'mob-nav', component: MobNavComponent},
  {path: '**', component: NotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
