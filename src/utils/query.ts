import {Query, Sort} from "../types";
import {Filter} from "../filter/filter";

const SORT = 'sort';
const LIMIT = 'limit';
const PAGE = 'page';
const OFFSET = 'offset';

// TODO: nice-to-have create a class for Query and replace these util function with methods on the class
export function stringify(query: Query) {
    const searchParams: URLSearchParams = new URLSearchParams();

    appendPagination(searchParams, query);
    appendSort(searchParams, query.sort);

    const searchString = searchParams.toString();

    if (query.filters?.length) {
        return withFilters(searchString, query.filters);

    }

    return searchString;
}

function formatSort({by, direction}: Sort) {
    return `${by}:${direction}`
}

// Not really happy about mutating input
function appendPagination(searchParams: URLSearchParams, query: Query) {
    if (query.page) {
        searchParams.append(PAGE, query.page.toString());
    }

    if (query.limit) {
        searchParams.append(LIMIT, query.limit.toString());
    }

    if (query.offset) {
        searchParams.append(OFFSET, query.offset.toString());
    }
}

function appendSort(searchParams: URLSearchParams, sort: Sort | undefined) {
    if (sort) {
        searchParams.append(SORT, formatSort(sort));
    }
}

function withFilters(searchString: string, filters: Filter[]): string {
    const filterValues = filters.reduce(
        (previousValue, currentValue) => previousValue + currentValue, '');

    return searchString ? `${searchString}&${filterValues}` : `${filterValues}`;
}
