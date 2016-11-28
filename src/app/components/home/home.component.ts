import { Component } from '@angular/core';
import { PlanetHeaderComponent } from '../planetHeader/planetHeader.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
      PlanetHeaderComponent
  ]
})

export class HomeComponent {
    public planetReadable:string = 'The Universe';
    public planetCodable:string = 'universe';
}
