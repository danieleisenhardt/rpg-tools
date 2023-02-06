import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-attack-vs-average',
    templateUrl: './attack-vs-average.component.html',
    styleUrls: ['./attack-vs-average.component.css']
})
export class AttackVsAverageComponent implements OnInit {
    public attackerSkill = 10;
    public defenderSkill = 10;

    constructor() {
    }

    ngOnInit(): void {
    }

    getHitChance() {
        return Math.round(this.attackerSkill / (this.attackerSkill + this.defenderSkill) * 100);
    }
}
