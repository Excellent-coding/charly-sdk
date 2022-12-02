import {BaseGetService} from "./base";

export class ChapterService extends BaseGetService {

    private readonly resourceUrl = 'chapter';

    protected getResourceName(): string {
        return this.resourceUrl;
    }
}
