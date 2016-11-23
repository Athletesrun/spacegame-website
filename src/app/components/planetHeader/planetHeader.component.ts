import { Component, Input } from '@angular/core';

@Component({
    selector: 'planet-header',
    template: `
        <div class="planetHeaderContainer" [ngStyle]="{'background-image': 'url(/assets/planets/' + planetCodable + extension + ')'}">
            <h2 class="planetHeader">{{planetReadable}}</h2>
        </div>
    `,
    styles: [`
        .planetHeader {
            font-size: 80px;
            color: #FFFFFF;
            background-color: rgba(0, 0, 0, .5);
        }
        .planetHeaderContainer {

        }

    `]
})

export class PlanetHeaderComponent {
    @Input() planetReadable = "The Moon";
    @Input() planetCodable:string = "moon";
    @Input() extension:string = ".jpg";
}
