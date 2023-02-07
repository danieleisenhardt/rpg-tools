import {Component, OnInit} from '@angular/core';
import {stat} from 'fs';

@Component({
    selector: 'app-five-points-rising-costs',
    templateUrl: './five-points-rising-costs.component.html',
    styleUrls: ['./five-points-rising-costs.component.css']
})
export class FivePointsRisingCostsComponent implements OnInit {
    level = 1;
    startingStats = {str: 10, dex: 10, agi: 10, int: 10, cha: 10};
    stats = {...this.startingStats};

    constructor() {
    }

    ngOnInit(): void {
    }

    levelUp() {
        this.level++;
    }

    reset() {
        this.level = 1;
        this.stats = this.startingStats;
    }

    getFreePoints() {
        let points = (this.level - 1) * 5;



        Object.values(this.stats).forEach((stat) => {
            let statpoints = stat - 10;
            let multiplier = 1;

            do {
                points -= statpoints;
                statpoints -= 20;
                multiplier ++;
            } while (statpoints > 0);
        });

        return points;
    }

    increase(statKey: 'str' | 'agi' | 'dex' | 'int' | 'cha') {
        if (this.getFreePoints() < this.getPrice(statKey)) {
            return;
        }

        this.stats[statKey]++;
    }

    getPrice(statKey: 'str' | 'agi' | 'dex' | 'int' | 'cha') {
        return Math.floor((this.stats[statKey] - 10) / 20) + 1;
    }
}
