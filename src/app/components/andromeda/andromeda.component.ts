import { Component } from '@angular/core';
import { PlanetHeaderComponent } from '../planetHeader/planetHeader.component';

@Component({
  selector: 'andromeda',
  templateUrl: './andromeda.component.html',
  styleUrls: ['./andromeda.component.css'],
  providers: [
      PlanetHeaderComponent
  ]
})

export class AndromedaComponent {
    public planetReadable:string = 'Andromeda';
    public planetCodable:string = 'andromeda';
}
