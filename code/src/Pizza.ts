import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
    private numberOfSlices: number;
    private sliceEaten: number;

    constructor(numberOfSlices: number, spoiled: boolean, value?: number, weight?: number) {
        super('pizza', value, weight, spoiled);
        this.numberOfSlices = numberOfSlices;
    }

    protected eat(): string {
        if (this.sliceEaten < this.numberOfSlices) {
            this.sliceEaten++;

            if (this.sliceEaten >= this.numberOfSlices) {
                this.setConsumed(true);
            }

            return "You eat a slice of the pizza.";
        }
    }

}
