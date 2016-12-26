import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { transition } from '@angular/core';
import { animate } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { NavComponent } from './components/nav/nav.component';
import { PlanetHeaderComponent } from './components/planetHeader/planetHeader.component';
import { PageNotFoundComponent } from './components/pageNotFound/pageNotFound.component.ts';

import { HomeComponent } from './components/home/home.component';
import { MoonComponent } from './components/moon/moon.component';
import { MarsComponent } from './components/mars/mars.component';
import { JupiterComponent } from './components/jupiter/jupiter.component';
import { SaturnComponent } from './components/saturn/saturn.component';
import { UranusComponent } from './components/uranus/uranus.component';
import { NeptuneComponent } from './components/neptune/neptune.component';
import { PlutoComponent } from './components/pluto/pluto.component';
import { AlphaCentauriComponent } from './components/alphaCentauri/alphaCentauri.component';
import { AndromedaComponent } from './components/andromeda/andromeda.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        PlanetHeaderComponent,
        PageNotFoundComponent,
        HomeComponent,
        MoonComponent,
        MarsComponent,
        JupiterComponent,
        SaturnComponent,
        UranusComponent,
        NeptuneComponent,
        PlutoComponent,
        AlphaCentauriComponent,
        AndromedaComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'moon',
                component: MoonComponent
            },
            {
                path: 'mars',
                component: MarsComponent
            },
            {
                path: 'jupiter',
                component: JupiterComponent
            },
            {
                path: 'saturn',
                component: SaturnComponent
            },
            {
                path: 'uranus',
                component: UranusComponent
            },
            {
                path: 'neptune',
                component: NeptuneComponent
            },
            {
                path: 'pluto',
                component: PlutoComponent
            },
            {
                path: 'alphacentauri',
                component: AlphaCentauriComponent
            },
            {
                path: 'andromeda',
                component: AndromedaComponent
            },
            {
                path: '**',
                component: PageNotFoundComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
