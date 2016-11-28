import { Component } from '@angular/core';
import { PlanetHeaderComponent } from '../planetHeader/planetHeader.component';

@Component({
  selector: 'uranus',
  templateUrl: './uranus.component.html',
  styleUrls: ['./uranus.component.css'],
  providers: [
      PlanetHeaderComponent
  ]
})

export class UranusComponent {
    public planetReadable:string = 'Uranus';
    public planetCodable:string = 'uranus';
}
