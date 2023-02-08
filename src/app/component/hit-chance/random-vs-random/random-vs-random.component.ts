import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-random-vs-random',
    templateUrl: './random-vs-random.component.html',
    styleUrls: ['./random-vs-random.component.css']
})
export class RandomVsRandomComponent implements OnInit {
    public attackerSkill = 10;
    public defenderSkill = 10;

    constructor() {
    }

    ngOnInit(): void {
    }

    getHitChance() {
        let total = 0;

        for (let i = 1; i <= this.defenderSkill; i ++) {
            if (i < this.attackerSkill) {
                total += (this.attackerSkill-i) / this.attackerSkill;
            }
        }

        return Math.round(total / this.defenderSkill * 100);
    }
}
