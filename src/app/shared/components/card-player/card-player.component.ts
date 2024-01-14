import { Component, Input } from '@angular/core';
import { TracksModule } from '@core/models/tracks.model';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent {
  @Input() mode: 'small' | 'big' = 'small';
  // @Input() track!: TracksModule;
  @Input() track: TracksModule = {_id: 0, name: '', album: '', cover: '', url: ''};


}
