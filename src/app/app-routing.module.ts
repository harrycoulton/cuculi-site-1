import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ArtistsComponent} from './pages/artists/artists.component';
import {CalendarComponent} from './pages/calendar/calendar.component';
import {ContactComponent} from './pages/contact/contact.component';
import {ReleasesComponent} from './pages/releases/releases.component';
import {ArtistPageComponent} from './pages/artists/artist-page/artist-page.component';
import {ReleasePageComponent} from './pages/releases/release-page/release-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'releases', component: ReleasesComponent},
  {path: 'artist/:name', component: ArtistPageComponent},
  {path: 'release/:name', component: ReleasePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
