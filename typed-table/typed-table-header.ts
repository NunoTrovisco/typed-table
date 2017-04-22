import {TypedTableHeaderTypes} from "./typed-table-header-types";

export class TypedTableHeader {
    constructor(public text: string, public type?: TypedTableHeaderTypes) {
        if (type == null) {
            this.type = TypedTableHeaderTypes.STRING;
        }
    }
}