import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HitChanceComponent} from './component/hit-chance/hit-chance.component';
import {HomeComponent} from './component/home/home.component';
import {SkillVsD100Component} from './component/hit-chance/skill-vs-d100/skill-vs-d100.component';
import { OglComponent } from './component/hit-chance/ogl/ogl.component';

@NgModule({
    declarations: [
        AppComponent,
        HitChanceComponent,
        HomeComponent,
        SkillVsD100Component,
        OglComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
