import {describe, expect, test, beforeEach} from '@jest/globals';
import sdk from "./";

const subject = new sdk('API KEY');

let spy: jest.SpyInstance;

beforeEach(() => {
    global.fetch = jest.fn(() =>
        Promise.resolve({ ok: true, json: () => Promise.resolve('success') }),
    ) as jest.Mock;

    spy = jest.spyOn(global, 'fetch');

    jest.mock('./client/client', () => {
        return {
            Client: jest.fn().mockImplementation(() => {
                {
                    get: jest.fn()
                }
            })
        };
    });
})

describe('Lotr', () => {
    test('books without query', async() => {
        await subject.books();

        expect(spy).toBeCalledWith(
            "https://the-one-api.dev/v2/book",
            {"headers": {"Authorization": "Bearer API KEY"}}
        );
    });

    test('books with pagination', async() => {
        await subject.books({ page: 1, limit: 2, offset: 3 });

        expect(spy).toBeCalledWith(
            "https://the-one-api.dev/v2/book?page=1&limit=2&offset=3",
            {"headers": {"Authorization": "Bearer API KEY"}}
        );
    });

    test('books with filters', async() => {
        await subject.books({ filters: [subject.filter('name').matches('Frodo')] });

        expect(spy).toBeCalledWith(
            "https://the-one-api.dev/v2/book?name=Frodo",
            {"headers": {"Authorization": "Bearer API KEY"}}
        );
    });

    test('books with sort', async() => {
        await subject.books({ sort: { by: 'name', direction: 'asc' } });

        expect(spy).toBeCalledWith(
            "https://the-one-api.dev/v2/book?sort=name%3Aasc",
            {"headers": {"Authorization": "Bearer API KEY"}}
        );
    });

    test('books by id', async() => {
        await subject.book('ID');

        expect(spy).toBeCalledWith(
            "https://the-one-api.dev/v2/book/ID",
            {"headers": {"Authorization": "Bearer API KEY"}}
        );
    });
});
