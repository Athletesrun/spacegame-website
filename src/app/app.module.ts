import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BodyComponent } from './body.component';
import { NavComponent } from './nav.component';

@NgModule({
    declarations: [
        NavComponent,
        BodyComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [
        NavComponent,
        BodyComponent
    ]
})

export class AppModule { }
