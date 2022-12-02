import {BaseGetService} from "./base";

export class QuoteService extends BaseGetService {

    private readonly resourceUrl = 'quote';

    protected getResourceName(): string {
        return this.resourceUrl;
    }
}
