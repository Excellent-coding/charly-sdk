import {describe, expect, test} from '@jest/globals';
import {Filter} from "./filter";

describe('Filter', () => {
    test('matches', () => {
        const filter = new Filter('name');

        expect(filter.matches('Frodo').toString()).toBe('name=Frodo');
    });

    test('matches not', () => {
        const filter = new Filter('name');

        expect(filter.matches('Frodo', true).toString()).toBe('name!=Frodo');
    });

    test('includes', () => {
        const filter = new Filter('name');

        expect(filter.includes(['Frodo', 'Bilbo']).toString()).toBe('name=Frodo,Bilbo');
    });

    test('includes not', () => {
        const filter = new Filter('name');

        expect(filter.includes(['Frodo', 'Bilbo'], true).toString()).toBe('name!=Frodo,Bilbo');
    });

    test('exists', () => {
        const filter = new Filter('name');

        expect(filter.exists().toString()).toBe('name');
    });

    test('exists not', () => {
        const filter = new Filter('name');

        expect(filter.exists(true).toString()).toBe('!name');
    });

    test('regex', () => {
        const filter = new Filter('name');

        expect(filter.regex('/frodo/').toString()).toBe('name=/frodo/');
    });

    test('regex not', () => {
        const filter = new Filter('name');

        expect(filter.regex('/frodo/', true).toString()).toBe('name!=/frodo/');
    });

    test('greaterThan', () => {
        const filter = new Filter('age');

        expect(filter.greaterThan(12).toString()).toBe('age>12');
    });

    test('greaterThanOrEquals', () => {
        const filter = new Filter('age');

        expect(filter.greaterThan(12, true).toString()).toBe('age>=12');
    });

    test('lesserThan', () => {
        const filter = new Filter('age');

        expect(filter.lesserThan(12).toString()).toBe('age<12');
    });

    test('lesserThanOrEquals', () => {
        const filter = new Filter('age');

        expect(filter.lesserThan(12, true).toString()).toBe('age<=12');
    });
});
