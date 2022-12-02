import {Query} from "../types";
import {stringify} from "../utils";
import {BaseGetService} from "./base";
import {PaginatedResponse} from "../types/response/paginatedResponse";
import {Quote} from "../types/response/quote";

export class MovieService extends BaseGetService {

    private readonly resourceUrl = 'movie';

    protected getResourceName(): string {
        return this.resourceUrl;
    }

    public async getQuotes(movieId: string, query?: Query): Promise<PaginatedResponse<Quote>> {
        const url = `${this.resourceUrl}/${movieId}/quote${query ? `?${stringify(query)}` : ''}`;

        return await this.client.get(url);
    }
}
