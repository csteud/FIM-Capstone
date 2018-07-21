import { HoseType } from "./hose-type.model";

export class Hose {
    public id: number;
    public name: string;
    public type: HoseType

    constructor(id: number, name: string, type: HoseType) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
}