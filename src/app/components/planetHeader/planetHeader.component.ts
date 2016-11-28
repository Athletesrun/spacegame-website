import { Component, Input } from '@angular/core';

@Component({
    selector: 'planet-header',
    template: `
        <div class="planetHeaderContainer animated fadeInDown" [ngStyle]="{'background-image': 'url(/assets/planets/background/' + planetCodable + '.jpg)'}">
            <h2 class="planetHeader">{{planetReadable}}</h2>
        </div>
    `,
    styles: [`
        .planetHeaderContainer {
            color: #FFFFFF;
            background-image: url("/assets/planets/universe.jpg");
            border-image: gradient(linear, left top, left bottom, from (#FFFFFF), to #F000000), color-stop(0.5, #fff), color-stop(0.5, #66cc00)) 21 30 30 21 repeat repeat;
            background-size: cover;
            width: 100%;
            height: 300px;
            overflow: hidden;
        }

        .planetHeader {
            color: #FFFFFF;
            text-align: center;
            margin: auto;
            margin-top: 95px;
            font-size: 80px;
            background-color: rgba(0, 0, 0, .5);
            width: 600px;
            border-radius: 6px;
        }

    `]
})

export class PlanetHeaderComponent {
    @Input() planetReadable = "The Moon";
    @Input() planetCodable:string = "moon";
}
