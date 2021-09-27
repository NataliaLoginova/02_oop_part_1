import { Item } from "./Item";
import {ItemComparator} from "./ItemComparator";

export class Inventory {
    private items: Array<Item>

    constructor() {
    }

    public addItem(item: Item): void {
        this.items.push(item);
    }

    public sort(): void;
    public sort(comparator?: ItemComparator): void {
        if (comparator) {
            this.items.sort(comparator.compare);
        } else {
            this.items.sort((itemFirst, itemSecons) => itemFirst.getValue() - itemSecons.getValue());
        }
    }

    public toString(): string {
        return this.items.map(item => item.toString()).join(',');
    }

}
