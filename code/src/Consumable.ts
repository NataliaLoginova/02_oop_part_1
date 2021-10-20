import { Item } from "./Item";


export abstract class Consumable extends Item {
    private consumed: boolean = false;
    private readonly spoiled: boolean;

    constructor(name: string, value: number, weight: number, spoiled: boolean) {
        super(name, value, weight);
        this.spoiled = spoiled;
    }

    public isConsumed(): boolean {
        return this.consumed;
    }
    public isSpoiled(): boolean {
        return this.spoiled;
    }

    public setConsumed(consumed: boolean): void {
        this.consumed = consumed;
    }

    public use(): string {
        if (this.isConsumed()) {
            return `There is nothing left of the ${this.name} to consume.`;
        } else if (!this.isConsumed() && this.spoiled) {
            const firstString = this.eat();
            return `${firstString}\nYou feel sick.`
        } else if (!this.consumed && !this.spoiled) {
            return this.eat();
        }
    }

    protected eat(): string {
        return `You eat the ${this.name}`
    }

}
