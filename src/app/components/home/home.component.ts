import { Component, Output, EventEmitter } from '@angular/core';
import { PlanetHeaderComponent } from '../planetHeader/planetHeader.component';
import { NavService } from '../../services/nav/nav.service';

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

    constructor(private navService: NavService) {

    }

    openLinkFromUniverse(event, planet) {

        this.navService.notifySelectedPlanet(planet);

    }
}
