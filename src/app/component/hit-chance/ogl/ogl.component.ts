import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-ogl',
    templateUrl: './ogl.component.html',
    styleUrls: ['./ogl.component.css']
})
export class OglComponent implements OnInit {
    attackerLevel = 1;
    attackerStrength = 10;
    defenderDexterity = 10;
    defenderArmorClass = 11;

    constructor() {
    }

    ngOnInit(): void {
    }

    getHitChance() {
        let chance = 100 - this.defenderArmorClass * 5;

        chance += this.calculateProficiencyBonus(this.attackerLevel) * 5;
        chance += this.calculateAbilityBonus(this.attackerStrength) * 5;
        chance -= this.calculateAbilityBonus(this.defenderDexterity) * 5;

        return Math.max(5, Math.min(95, chance));
    }

    calculateAbilityBonus(score: number) {
        if (score >= 18) {
            return 3;
        }
        if (score >= 16) {
            return 2;
        }
        if (score >= 13) {
            return 1;
        }
        if (score >= 9) {
            return 0;
        }
        if (score >= 6) {
            return -1;
        }
        if (score >= 4) {
            return -2;
        }
        return -3;
    }

    getAbilityBonusText(score: number) {
        const bonus = this.calculateAbilityBonus(score);

        return (bonus > -1 ? '+' : '') + bonus;
    }

    calculateProficiencyBonus(level: number) {
        if (level >= 17) {
            return 6;
        }
        if (level >= 13) {
            return 5;
        }
        if (level >= 9) {
            return 4;
        }
        if (level >= 5) {
            return 3;
        }

        return 2;
    }
}
