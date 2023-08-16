import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
