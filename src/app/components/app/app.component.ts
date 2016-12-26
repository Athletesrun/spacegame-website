import { Component } from '@angular/core';
import { NavComponent } from './../nav/nav.component';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    openNav(event) {

        event.preventDefault();

        var navContainer = <HTMLDivElement>document.querySelector('.navContainer');

        var closeMenuField = <HTMLDivElement>document.querySelector('.closeMenuField');

        navContainer.style.width = "250px";

        closeMenuField.style.width = "100%";
    }

    closeNav(event) {

        event.preventDefault();

        var navContainer = <HTMLDivElement>document.querySelector('.navContainer');

        var closeMenuField = <HTMLDivElement>document.querySelector('.closeMenuField');

        navContainer.style.width = "0";

        closeMenuField.style.width = "0";

    }
}
