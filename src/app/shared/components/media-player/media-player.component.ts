import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: any = {
    cover: 'https://www.freeiconspng.com/thumbs/button-icon-png/play-button-icon-png-17.png',
    album: 'Gioli & Assi',
    name: 'BEBE (Oficial)',
  }

  constructor() { }

  ngOnInit(): void {

  }

}
