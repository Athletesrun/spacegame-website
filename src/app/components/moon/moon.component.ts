import { Component } from '@angular/core';
import { PlanetHeaderComponent } from '../planetHeader/planetHeader.component';

@Component({
    selector: 'moon',
    templateUrl: './moon.component.html',
    styleUrls: ['./moon.component.css'],
    providers: [
        PlanetHeaderComponent
    ]
})

export class MoonComponent {
    public planetReadable:string = 'The Moon';
    public planetCodable:string = 'moon';
    public extension:string = '.jpg';
}
