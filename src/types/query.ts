import {Pagination} from "./pagination";
import {Sort} from "./sort";
import {Filter} from "../filter/filter";

/**
 * Used to ease the API of querying entities.
 */
export interface Query extends Partial<Pagination> {
    sort?: Sort;
    filters?: Filter[];
}
