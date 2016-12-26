import { Component } from '@angular/core';

@Component({
    selector: 'page-not-found',
    template: `
        <p class="notFoundError">Oops. The page you were looking for doesn't exist. Rats.<p>
    `,
    styles: [`
        .notFoundError {
            text-align: center;
            margin: auto;
            font-size: 50px;
            
        }
    `]
})

export class PageNotFoundComponent {

}
