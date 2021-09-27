import { Weapon } from "./Weapon";

export class Bow extends Weapon {

    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('bow', baseDamage, baseDurability, value, weight);
    }

    public polish(): void {
        if (this.getDurabilityModifier() + this.MODIFIER_CHANGE_RATE < 1) {
            this.setDurabilityModifier(this.getDurabilityModifier() + this.MODIFIER_CHANGE_RATE);
        }
    }

}
