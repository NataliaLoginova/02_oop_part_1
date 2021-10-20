import { Weapon } from "./Weapon";

export class Sword extends Weapon {

    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('sword', baseDamage, baseDurability, value, weight);
    }

    public polish(): void {
        this.damageModifier = this.damageModifier + this.MODIFIER_CHANGE_RATE;
        this.baseDamage = Math.min(this.baseDamage * 1.25, 125);
    }

}
