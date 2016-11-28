import { Component } from '@angular/core';
import { PlanetHeaderComponent } from '../planetHeader/planetHeader.component';

@Component({
  selector: 'neptune',
  templateUrl: './neptune.component.html',
  styleUrls: ['./neptune.component.css'],
  providers: [
      PlanetHeaderComponent
  ]
})

export class NeptuneComponent {
    public planetReadable:string = 'Neptune';
    public planetCodable:string = 'neptune';
}
