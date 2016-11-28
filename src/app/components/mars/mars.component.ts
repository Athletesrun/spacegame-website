import { Component } from '@angular/core';
import { PlanetHeaderComponent } from '../planetHeader/planetHeader.component';

@Component({
    selector: 'mars',
    templateUrl: './mars.component.html',
    styleUrls: ['./mars.component.css'],
    providers: [
        PlanetHeaderComponent
    ]
})

export class MarsComponent {
    public planetReadable:string = 'Mars';
    public planetCodable:string = 'mars';
}
