import { Weapon } from "./Weapon";

export class Sword extends Weapon {

    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('sword', baseDamage, baseDurability, value, weight);
    }

    public polish(): void {
        this.setDamageModifier(this.getDamageModifier() + this.MODIFIER_CHANGE_RATE);
        if (this.getDamageModifier() + this.getBaseDamage() * 1.25 <= 125) {
            this.setBaseDamage(this.getBaseDamage() * 1.25);
        }
    }

}
