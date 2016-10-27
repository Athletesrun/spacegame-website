import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BodyComponent } from './body.component';
import { NavComponent } from './nav.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        BodyComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                component: BodyComponent
            },
            {
                path: 'moon',
                component: BodyComponent
            },
            {
                path: 'mars',
                component: BodyComponent
            },
            {
                path: 'jupiter',
                component: BodyComponent
            },
            {
                path: 'saturn',
                component: BodyComponent
            },
            {
                path: 'uranus',
                component: BodyComponent
            },
            {
                path: 'neptune',
                component: BodyComponent
            },
            {
                path: 'pluto',
                component: BodyComponent
            },
            {
                path: 'alphacentauri',
                component: BodyComponent
            },
            {
                path: 'andromeda',
                component: BodyComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
