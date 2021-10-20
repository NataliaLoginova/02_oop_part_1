import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    private static counter = 0;

    constructor(name: string, value: number, weight: number) {
        this.id = ++id;
        this.name = name;
        this.value = value;
        this.weight = weight;
        Item.counter++;
    }

    abstract use(): void;

    public get numberOfItems (): number {
        return Item.counter;
    }

    public get id(): number {
        return this.id;
    }

    public set id(id: number) {
        this.id = id;
    }

    public get value(): number {
       return this.value;
    }

    public set value(value: number) {
        this.value = value;
    }

    public get name(): string {
        return this.name;
    }

    public set name(name: string) {
        this.name = name;
    }

    public get weight(): number {
        return this.weight;
    }

    public set weight(weight: number) {
        this.weight = weight;
    }

    public static reset() {
        Item.counter = 0;
    }

    public compareTo(other: Item): number {
        if (this.value > other.value) {
            return 1;
        } else if (this.value < other.value) {
            return -1;
        } else {
            this.name.localeCompare(other.name, undefined, { sensitivity: "base" })
        }
    }

    public toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
    }
}
