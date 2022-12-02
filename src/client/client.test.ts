import {describe, expect, test, beforeEach} from '@jest/globals';
import {Client} from "./client";

function mockFetch(returnValue: unknown) {
    global.fetch = jest.fn(() =>
        Promise.resolve(returnValue),
    ) as jest.Mock;
}

let client: Client;

const API_KEY = 'API_KEY';

beforeEach(() => {
    client = new Client(API_KEY);
});

describe('Client', () => {
    test('get should succeed when response is ok', async () => {
        mockFetch({
            ok: true,
            json: () => Promise.resolve(
                [
                    {name: 'The return of the king'}
                ]
            ),
        });

        const actual = await client.get('book');

        expect(actual).toEqual([{name: 'The return of the king'}]);
    });

    test('get should throw when response is not ok', async () => {
        mockFetch({
            ok: false,
            statusText: 'Failed for some reason!',
        });

       await expect(client.get('book')).rejects.toThrow('Failed for some reason!');
    });
});
