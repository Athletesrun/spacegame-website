import { Component } from '@angular/core';
import { PlanetHeaderComponent } from '../planetHeader/planetHeader.component';

@Component({
  selector: 'pluto',
  templateUrl: './pluto.component.html',
  styleUrls: ['./pluto.component.css'],
  providers: [
      PlanetHeaderComponent
  ]
})

export class PlutoComponent {
    public planetReadable:string = 'Pluto';
    public planetCodable:string = 'pluto';
}
