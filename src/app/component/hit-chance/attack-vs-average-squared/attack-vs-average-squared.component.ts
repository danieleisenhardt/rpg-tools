import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attack-vs-average-squared',
  templateUrl: './attack-vs-average-squared.component.html',
  styleUrls: ['./attack-vs-average-squared.component.css']
})
export class AttackVsAverageSquaredComponent implements OnInit {
    public attackerSkill = 10;
    public defenderSkill = 10;

    constructor() {
    }

    ngOnInit(): void {
    }

    getHitChance() {
        return Math.round(Math.pow(this.attackerSkill, 2) / (Math.pow(this.attackerSkill, 2) + Math.pow(this.defenderSkill, 2)) * 100);
    }
}
