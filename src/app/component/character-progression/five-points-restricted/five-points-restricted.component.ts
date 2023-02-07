import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-five-points-restricted',
    templateUrl: './five-points-restricted.component.html',
    styleUrls: ['./five-points-restricted.component.css']
})
export class FivePointsRestrictedComponent implements OnInit {
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
        this.stats = {...this.startingStats};
    }

    getFreePoints() {
        let points = (this.level - 1) * 5;


        Object.values(this.stats).forEach((stat) => {
            let statpoints = stat - 10;
            let multiplier = 1;

            do {
                points -= statpoints;
                statpoints -= 20;
                multiplier++;
            } while (statpoints > 0);
        });

        return points;
    }

    increase(statKey: 'str' | 'agi' | 'dex' | 'int' | 'cha') {
        if (!this.canIncrease(statKey)) {
            return;
        }

        this.stats[statKey]++;
    }

    getPrice(statKey: 'str' | 'agi' | 'dex' | 'int' | 'cha') {
        return Math.floor((this.stats[statKey] - 10) / 20) + 1;
    }

    canIncrease(statKey: 'str' | 'agi' | 'dex' | 'int' | 'cha') {
        if (this.getFreePoints() < this.getPrice(statKey)) {
            return false;
        }

        if ((this.stats[statKey]-10) / 3 >= this.level -1) {
            return false;
        }

        return true;
    }
}
