import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentStep = 4;
  steps:number[] = [1, 2,3, 4];
  faceArtists: string[] = [
    'assets/artist_x.png',
    'assets/artist_y.png',
    'assets/artist_z.png',
    'assets/artist_x.png',
  ]
  navs = [
    {
      label: 'Home',
      route: '/',
      exact: true
    },
    {
      label: 'About',
      route: '#about',
      exact: true
    },
    {
      label: 'Services',
      route: '#services',
      exact: true
    },
    {
      label: 'Gallery',
      route: '#gallery',
      exact: true
    },
    {
      label: 'Artists',
      route: '#artists',
      exact: true
    },
    {
      label: 'Blog',
      route: '#blog',
      exact: true
    },
    {
      label: 'Career',
      route: '#career',
      exact: true
    }
  ]

  artists: any = [
    {
      name: 'Keneth Tim',
      bio: 'Nothing specific. Life just doesn\'t just happen',
      avatar: 'assets/artist_x.png'
    },

    {
      name: 'Jane Doe',
      bio: 'Nothing specific. Life just doesn\'t just happen',
      avatar: 'assets/artist_y.png'
    },

    {
      name: 'Pet M',
      bio: 'Nothing specific. Life just doesn\'t just happen',
      avatar: 'assets/artist_z.png'
    }
  ]
}
