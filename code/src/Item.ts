import { Comparable } from './Comparable';

let id = 0;
let counter = 0;

export abstract class Item implements Comparable<Item> {
    private id: number;
    private name: string;
    private value: number;
    private weight: number;

    constructor(name: string, value: number, weight: number) {
        this.id = ++id;
        this.setName(name);
        this.setValue(value);
        this.setWeight(weight);
        counter++;
    }

    abstract use(): void;

    public get numberOfItems (): number {
        return counter;
    }

    public getId(): number {
        return this.id;
    }

    public setValue(value: number): void {
        this.value = value;
    }

    public getValue(): number {
        return this.value;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getWeight(): number {
        return this.weight;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
    }

    public static reset() {
        counter = 0;
    }

    public compareTo(other: Item): number {
        if (this.getValue() > other.getValue()) {
            return 1;
        } else if (this.getValue() < other.getValue()) {
            return -1;
        } else {
            this.getValue().toString().toLowerCase().localeCompare(other.getValue().toString().toLowerCase())
        }
    }

    public toString(): string {
        return `${this.getName()} - Value: ${this.getValue()}, Weight: ${this.getWeight()}`;
    }
}
