import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-five-points-per-level',
    templateUrl: './five-points-per-level.component.html',
    styleUrls: ['./five-points-per-level.component.css']
})
export class FivePointsPerLevelComponent implements OnInit {
    level = 1;
    startingStats = {str: 10, dex: 10, agi: 10, int: 10, cha: 10};
    stats = {...this.startingStats};

    constructor() {
    }

    ngOnInit(): void {
    }

    levelUp() {
        this.level ++;
    }

    reset() {
        this.level = 1;
        this.stats = {...this.startingStats};
    }

    getFreePoints() {
        let points =  (this.level - 1) * 5;

        Object.values(this.stats).forEach((stat) => {
            points -= stat - 10;
        });

        return points;
    }

    increase(statKey: 'str' | 'agi' | 'dex' | 'int' | 'cha') {
        if (this.getFreePoints() < 1) {
            return;
        }

        this.stats[statKey] ++;
    }
}
