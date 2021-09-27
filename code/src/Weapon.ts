import { Item } from "./Item";

export abstract class Weapon extends Item {
    MODIFIER_CHANGE_RATE: number = 0.05;
    private baseDamage: number;
    private damageModifier: number;
    private baseDurability: number;
    private durabilityModifier: number;

    constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(name, value, weight);
        this.setBaseDamage(baseDamage);
        this.setBaseDurability(baseDurability);
    }

    abstract polish(): void;

    protected getDamageModifier(): number {
        return this.damageModifier;
    }

    protected setDamageModifier(damageModifier: number): void {
        this.damageModifier = damageModifier;
    }

    protected getBaseDamage(): number {
        return this.baseDamage;
    }

    protected setBaseDamage(baseDamage: number): void {
        this.baseDamage = baseDamage;
    }

    protected setBaseDurability(baseDurability: number) {
        this.baseDurability = baseDurability;
    }

    protected getDurabilityModifier(): number {
        return this.durabilityModifier;
    }

    protected setDurabilityModifier(damageModifier: number): void {
        this.durabilityModifier = damageModifier;
    }

    public use(): string {
        if (this.baseDurability + this.durabilityModifier <= 0 ) {
            return `You can't use the ${this.getName()}, it is broken`;
        }
        this.durabilityModifier =- this.MODIFIER_CHANGE_RATE;
        if (this.baseDurability + this.durabilityModifier <= 0) {
            return `You use the hammer, dealing ${this.baseDamage + this.damageModifier} points of damage.` +
                '\n The hammer breaks.';
        } else {
            return `You use the hammer, dealing ${this.baseDamage + this.damageModifier} points of damage.`;
        }
    }

    public getEffectiveDamage(): number {
        return this.baseDamage + this.damageModifier;
    }

    public getEffectiveDurability(): number {
        return this.baseDurability + this.durabilityModifier;
    }

    public toString(): string {
        return `${this.getName()} - Value: ${this.getValue()}, Weight: ${this.getWeight()}, Damage: ${this.baseDamage}, Durability: ${this.baseDurability}`;
    }

}
