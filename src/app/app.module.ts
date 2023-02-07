import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HitChanceComponent} from './component/hit-chance/hit-chance.component';
import {HomeComponent} from './component/home/home.component';
import {SkillVsD100Component} from './component/hit-chance/skill-vs-d100/skill-vs-d100.component';
import {OglComponent} from './component/hit-chance/ogl/ogl.component';
import {AttackVsAverageComponent} from './component/hit-chance/attack-vs-average/attack-vs-average.component';
import { AttackVsAverageSquaredComponent } from './component/hit-chance/attack-vs-average-squared/attack-vs-average-squared.component';
import { OpenEndedDice2d6Component } from './component/hit-chance/open-ended-dice2d6/open-ended-dice2d6.component';
import { CharacterProgressionComponent } from './component/character-progression/character-progression.component';
import { GradualLearnByDoingComponent } from './component/character-progression/gradual-learn-by-doing/gradual-learn-by-doing.component';
import { FivePointsPerLevelComponent } from './component/character-progression/five-points-per-level/five-points-per-level.component';

@NgModule({
    declarations: [
        AppComponent,
        HitChanceComponent,
        HomeComponent,
        SkillVsD100Component,
        OglComponent,
        AttackVsAverageComponent,
        AttackVsAverageSquaredComponent,
        AttackVsAverageSquaredComponent,
        OpenEndedDice2d6Component,
        CharacterProgressionComponent,
        GradualLearnByDoingComponent,
        FivePointsPerLevelComponent
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
