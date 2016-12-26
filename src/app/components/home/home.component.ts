import { Component } from '@angular/core';
import { PlanetHeaderComponent } from '../planetHeader/planetHeader.component';
import { NavComponent } from '../nav/nav.component.ts';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
      PlanetHeaderComponent,
      NavComponent
  ]
})

export class HomeComponent {

    constructor(private navComponent: NavComponent) {}

    public planetReadable:string = 'The Universe';
    public planetCodable:string = 'universe';

    openLink(event, planet) {
        event.preventDefault();
        this.navComponent.clicked(event, planet);
    }
}
