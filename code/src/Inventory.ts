import { Item } from "./Item";
import {ItemComparator} from "./ItemComparator";

export class Inventory {
    private items: Array<Item>

    constructor() {
    }

    public addItem(item: Item): void {
        this.items.push(item);
    }

    public sort(comparator?: ItemComparator): void {
        if (comparator) {
            this.items.sort(comparator.compare);
        } else {
            this.items.sort((itemFirst, itemSecons) => itemFirst.value - itemSecons.value);
        }
    }

    public toString(): string {
        return this.items.join(',');
    }

}
