import { Component } from '@angular/core';
import { PlanetHeaderComponent } from '../planetHeader/planetHeader.component';

@Component({
  selector: 'saturn',
  templateUrl: './saturn.component.html',
  styleUrls: ['./saturn.component.css'],
  providers: [
      PlanetHeaderComponent
  ]
})

export class SaturnComponent {
    public planetReadable:string = 'Saturn';
    public planetCodable:string = 'saturn';
}
