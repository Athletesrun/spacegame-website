import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NavService } from '../../services/nav/nav.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
        NavService
    ]
})

export class AppComponent {

    selectedPlanet:string;

    router:Router;

    mobileNavOpened:boolean;

    constructor(private _router: Router, private navService:NavService) {
        this.router = _router;
    }

    openNav(event) {

        event.preventDefault();

        var navContainer = <HTMLDivElement>document.querySelector('.navContainer');

        var closeMenuField = <HTMLDivElement>document.querySelector('.closeMenuField');

        navContainer.style.width = "250px";

        closeMenuField.style.width = "100%";
    }

    ngOnInit() {
        if(window.location.pathname.slice(1) === '') {
            this.selectedPlanet = 'universe';
        } else {
            this.selectedPlanet = window.location.pathname.slice(1);
        }

        this.navService.planetChanged.subscribe(planet => {

            var dummyEvent = new Event('');

            this.clicked(dummyEvent, planet);

        });
    }

    clicked(event, selectedPlanet) {

        event.preventDefault();

        this.selectedPlanet = selectedPlanet;

        if(selectedPlanet === 'universe') {
            this.router.navigate(['/']);
        } else {
            this.router.navigate(['/' + selectedPlanet.toLowerCase()]);
        }

        if(window.innerWidth < 960) {

            var navContainer = <HTMLDivElement>document.querySelector('.navContainer');

            var closeMenuField = <HTMLDivElement>document.querySelector('.closeMenuField');

            navContainer.style.width = '0';

            closeMenuField.style.width = '0';

        }

    }

    selectedId(planet) {
        if(planet === this.selectedPlanet) {
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
