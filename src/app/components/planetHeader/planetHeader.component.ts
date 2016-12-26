import { Component, Input } from '@angular/core';

@Component({
    selector: 'planet-header',
    template: `
        <div class="planetHeaderContainer animated fadeInDown" [ngStyle]="{'background-image': 'url(/assets/planets/background/' + planetCodable + '.jpg)'}">
            <h2 class="planetHeader">{{planetReadable}}</h2>
        </div>
    `,
    styleUrls: ['./planetHeader.component.css']
})

export class PlanetHeaderComponent {
    @Input() planetReadable = "The Moon";
    @Input() planetCodable:string = "moon";
}
