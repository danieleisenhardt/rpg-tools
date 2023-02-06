import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-open-ended-dice2d6',
    templateUrl: './open-ended-dice2d6.component.html',
    styleUrls: ['./open-ended-dice2d6.component.css']
})
export class OpenEndedDice2d6Component implements OnInit {
    private table = {
        '-30': 0.006,
        '-29': 0.008,
        '-28': 0.012,
        '-27': 0.017,
        '-26': 0.023,
        '-25': 0.031,
        '-24': 0.043,
        '-23': 0.060,
        '-22': 0.082,
        '-21': 0.11,
        '-20': 0.16,
        '-19': 0.22,
        '-18': 0.30,
        '-17': 0.41,
        '-16': 0.55,
        '-15': 0.76,
        '-14': 1.0,
        '-13': 1.4,
        '-12': 1.9,
        '-11': 2.6,
        '-10': 3.4,
        '-9': 4.6,
        '-8': 6.2,
        '-7': 8.2,
        '-6': 11,
        '-5': 14,
        '-4': 18,
        '-3': 24,
        '-2': 30,
        '-1': 38,
        '0': 46,
        '1': 54,
        '2': 62,
        '3': 70,
        '4': 76,
        '5': 82,
        '6': 86,
        '7': 89,
        '8': 92,
        '9': 94,
        '10': 95,
        '11': 97,
        '12': 97,
        '13': 98,
        '14': 98.6,
        '15': 99.0,
        '16': 99.2,
        '17': 99.4,
        '18': 99.6,
        '19': 99.7,
        '20': 99.79,
        '21': 99.84,
        '22': 99.89,
        '23': 99.92,
        '24': 99.94,
        '25': 99.96,
        '26': 99.97,
        '27': 99.978,
        '28': 99.988,
        '29': 99.991,
    };
    public attackerSkill = 10;
    public defenderSkill = 10;

    constructor() {
    }

    ngOnInit(): void {
    }

    getHitChance() {
        const difference = Math.min(29, Math.max(-30, this.attackerSkill - this.defenderSkill));

        // @ts-ignore
        return this.table[ difference.toString(10) ];
    }
}
