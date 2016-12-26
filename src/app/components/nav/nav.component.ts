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

    mobileNavOpened:boolean;

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

        console.log('the selected planet is ' + selectedPlanet);

        event.preventDefault();

        this.selectedPlanet = selectedPlanet;

        console.log('the selected planet should be ' + this.selectedPlanet);

        var body = <HTMLBodyElement>document.querySelector('body');

        var navContainer = <HTMLDivElement>document.querySelector('.navContainer');

        var closeMenuField = <HTMLDivElement>document.querySelector('.closeMenuField');

        navContainer.style.width = '0';

        closeMenuField.style.width = '0';

        this.router.navigate(['/' + selectedPlanet.toLowerCase()]);

    }

    selectedId(planet) {
        if(planet === this.selectedPlanet) {
            console.log(planet);
            return 'selectedNavItem';
        } else {
            return '';
        }
    }

    closeNav(event) {
        event.preventDefault();

        var navContainer = <HTMLDivElement>document.querySelector('.navContainer');

        var closeMenuField = <HTMLDivElement>document.querySelector('.closeMenuField');

        closeMenuField.style.width="0";

        navContainer.style.width = "0";
    }
}
