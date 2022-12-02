// TODO: add variations (if any?)
export interface PaginatedResponse<T> {
    docs: T[];
    limit: number;
    offset: number;
    page: number;
    pages: number;
    total: number;
}
