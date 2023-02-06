import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-gradual-learn-by-doing',
    templateUrl: './gradual-learn-by-doing.component.html',
    styleUrls: ['./gradual-learn-by-doing.component.css']
})
export class GradualLearnByDoingComponent implements OnInit {
    public strengthXP = 1000;
    public dexterityXP = 0;
    public agilityXP = 100;
    public intelligenceXP = 399;
    public charismaXP = 400;

    constructor() {
    }

    ngOnInit(): void {
    }

    calculateLevel(xp: number) {
        return Math.floor(Math.sqrt(xp / 100)) + 1;
    }
}
