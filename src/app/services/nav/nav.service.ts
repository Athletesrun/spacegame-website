import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NavService {

    planetChanged: EventEmitter<string> = new EventEmitter();

    constructor() {}

    notifySelectedPlanet(planet:string) {

        this.planetChanged.emit(planet);
    }
}
