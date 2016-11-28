import { Component } from '@angular/core';
import { PlanetHeaderComponent } from '../planetHeader/planetHeader.component';

@Component({
  selector: 'alpha-centauri',
  templateUrl: './alphaCentauri.component.html',
  styleUrls: ['./alphaCentauri.component.css'],
  providers: [
      PlanetHeaderComponent
  ]
})

export class AlphaCentauriComponent {
    public planetReadable:string = 'Alpha Centauri';
    public planetCodable:string = 'alphaCentauri';
}
