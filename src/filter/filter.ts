
/**
 * DSL class for querying by filter
 *
 * Example usage: new Filter('name').matches('Gandalf');
 *
 * IMPORTANT: Although it is possible to chain multiple operands on a Filter
 * e.g. new Filter('name').matches('Frodo').includes(['Gandalf'])
 * the last used operand will overwrite the whole chain so this should rarely/never be used
*/
export class Filter {

    private value = '';

    constructor(private field: string) {
    }

    /**
     * @param {boolean} negate - negates the condition
     */
    public matches(value: string, negate?: boolean): Filter {
        const operand = negate ? '!=' : '=';
        this.value = `${this.field}${operand}${value}`;

        return this;
    }

    /**
     * @param {boolean} negate - negates the condition
     */
    public includes(values: string[], negate?: boolean): Filter {
        const operand = negate ? '!=' : '=';
        this.value = `${this.field}${operand}${values}`;

        return this;
    }

    /**
     * @param {boolean} negate - negates the condition
     */
    public exists(negate?: boolean): Filter {
        const operand = negate ? '!' : '';
        this.value = `${operand}${this.field}`;

        return this;
    }

    /**
     * @param {boolean} negate - negates the condition
     */
    public regex(value: string, negate?: boolean): Filter {
        const operand = negate ? '!=' : '=';
        this.value = `${this.field}${operand}${value}`;

        return this;
    }

    /**
     * @param {boolean} orEquals - when true acts as greaterThanOrEquals
     */
    public greaterThan(value: number, orEquals?: boolean): Filter {
        const operand = orEquals ? '>=' : '>';
        this.value = `${this.field}${operand}${value}`;

        return this;
    }

    /**
     * @param {boolean} orEquals - when true acts as lesserThanOrEquals
     */
    public lesserThan(value: number, orEquals?: boolean): Filter {
        const operand = orEquals ? '<=' : '<';
        this.value = `${this.field}${operand}${value}`;

        return this;
    }

    public toString(): string {
        return this.value;
    }
}
