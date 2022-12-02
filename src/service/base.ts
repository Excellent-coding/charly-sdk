import {Client} from "../client";
import {Query} from "../types";
import {stringify} from "../utils";

export abstract class BaseGetService {

    protected abstract getResourceName(): string;

    constructor(protected client: Client) {
    }

    public async getById<T>(id: string): Promise<T> {
        return await this.client.get(`${this.getResourceName()}/${id}`);
    }

    public async getList<T>(query?: Query): Promise<T> {
        if (!query) {
            return await this.client.get(this.getResourceName());
        }

        return await this.client.get(`${this.getResourceName()}?${stringify(query)}`);
    }
}
