import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'left-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class NavComponent {
    selectedPlanet:string;

    router:Router;

    constructor(private _router: Router) {
        this.router = _router;
    }

    ngOnInit() {
        if(window.location.pathname.slice(1) === '') {
            this.selectedPlanet = 'universe';
        } else {
            this.selectedPlanet = window.location.pathname.slice(1);
        }
    }

    clicked(event, selectedPlanet) {

        event.preventDefault();

        this.selectedPlanet = selectedPlanet;

    }

    selectedId(planet) {
        if(planet === this.selectedPlanet) {
            return 'selectedNavItem';
        } else {
            return '';
        }
    }
}
