import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TracksModule } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TracksModule = {
    cover: 'https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png',
    album: 'Gioli & Assi',
    name: 'BEBE (Oficial)',
    url: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    _id: 1
  }

  constructor() { }

  ngOnInit(): void {

  }

}
