import {Query} from "../types";
import {stringify} from "../utils";
import {BaseGetService} from "./base";
import {PaginatedResponse} from "../types/response/paginatedResponse";
import {Chapter} from "../types/response/chapter";

export class BookService extends BaseGetService {

    private readonly resourceUrl = 'book';

    protected getResourceName(): string {
        return this.resourceUrl;
    }

    public async getChapters(bookId: string, query?: Query): Promise<PaginatedResponse<Chapter>> {
        const url = `${this.resourceUrl}/${bookId}/chapter${query ? `?${stringify(query)}` : ''}`;

        return await this.client.get(url);
    }
}
