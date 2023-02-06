import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-skill-vs-d100',
    templateUrl: './skill-vs-d100.component.html',
    styleUrls: ['./skill-vs-d100.component.css']
})
export class SkillVsD100Component implements OnInit {
    public attackerSkill = 40;
    public defenderSkill = 0;

    constructor() {
    }

    ngOnInit(): void {
    }

    getHitChance() {
        return Math.max(5, Math.min(95, this.attackerSkill - this.defenderSkill));
    }
}
