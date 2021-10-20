import { Item } from "./Item";

export abstract class Weapon extends Item {
    MODIFIER_CHANGE_RATE: number = 0.05;

    constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(name, value, weight);
        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;
    }

    abstract polish(): void;

    protected get damageModifier(): number {
        return this.damageModifier;
    }

    protected set damageModifier(damageModifier: number) {
        this.damageModifier = damageModifier;
    }

    protected set baseDamage(baseDamage: number) {
        this.baseDamage = baseDamage;
    }

    protected get baseDamage(): number {
        return this.baseDamage;
    }

    protected set baseDurability(baseDurability: number) {
        this.baseDurability = baseDurability;
    }

    protected get baseDurability() {
        return this.baseDurability;
    }

    protected get durabilityModifier(): number {
        return this.durabilityModifier;
    }

    protected set durabilityModifier(damageModifier: number) {
        this.durabilityModifier = damageModifier;
    }

    public use(): string {
        if (this.baseDurability + this.durabilityModifier <= 0 ) {
            return `You can't use the ${this.name}, it is broken`;
        }
        this.durabilityModifier =- this.MODIFIER_CHANGE_RATE;
        if (this.baseDurability + this.durabilityModifier <= 0) {
            return `You use the hammer, dealing ${this.baseDamage + this.damageModifier} points of damage.\nThe hammer breaks.`;
        } else {
            return `You use the hammer, dealing ${this.baseDamage + this.damageModifier} points of damage.`;
        }
    }

    public get effectiveDamage(): number {
        return this.baseDamage + this.damageModifier;
    }

    public get effectiveDurability(): number {
        return this.baseDurability + this.durabilityModifier;
    }

    public toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}, Damage: ${this.baseDamage}, Durability: ${this.baseDurability}`;
    }

}
