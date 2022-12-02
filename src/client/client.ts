import {ClientConfig} from "../types";

export class Client {

    private baseUrl = 'https://the-one-api.dev';

    private apiVersion = 'v2';

    // API key is not mandatory for all endpoints, @see {@link https://the-one-api.dev/documentation}
    constructor(private apiKey?: string) {
    }

    // TODO: consider caching and other nice-to-have features
    public config(config: ClientConfig) {
        this.apiKey = config.apiKey;
    }

    public async get<T>(url: string): Promise<T> {
        // Using fetch instead of a library for lighter weight and higher compatibility
        const response = await fetch(this.formatUrl(url), this.getConfig());

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await response.json();
    }

    private getConfig(): RequestInit {
        return { headers: { Authorization: `Bearer ${this.apiKey}` } }
    }

    private formatUrl(url: string): string {
        return `${this.baseUrl}/${this.apiVersion}/${url}`;
    }
}
