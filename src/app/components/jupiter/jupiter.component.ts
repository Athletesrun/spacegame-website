import { Component } from '@angular/core';
import { PlanetHeaderComponent } from '../planetHeader/planetHeader.component';

@Component({
  selector: 'jupiter',
  templateUrl: './jupiter.component.html',
  styleUrls: ['./jupiter.component.css'],
  providers: [
      PlanetHeaderComponent
  ]
})

export class JupiterComponent {
    public planetReadable:string = 'Jupiter';
    public planetCodable:string = 'jupiter';
}
