import {Query} from "../types";
import {stringify} from "../utils";
import {BaseGetService} from "./base";
import {PaginatedResponse} from "../types/response/paginatedResponse";
import {Quote} from "../types/response/quote";

export class CharacterService extends BaseGetService {

    private readonly resourceUrl = 'character';

    protected getResourceName(): string {
        return this.resourceUrl;
    }

    public async getCharacterQuotes(characterId: string, query?: Query): Promise<PaginatedResponse<Quote>> {
        const url = `${this.resourceUrl}/${characterId}/quotes${query ? `?${stringify(query)}` : ''}`;

        return await this.client.get(url);
    }
}
