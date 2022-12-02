## Design

### Client

We are using a simple fetch wrapper which has the hardcoded api url and version as private fields with only one exposed
method: `get(url: string)`.
There was an intention to expose the configuration of this client (such as caching, etc.) but due to time issues it has
only been marked with a comment.

### BaseGetService

This abstract class serves as a base for other services to extend in order to reduce code duplication for getting
resources by id or by queries.
It has one abstract method `getResourceUrl(): string`.

### Entity services

Each of the supported entities has its service:

* book
* chapter
* character
* movie
* quote

which resides in the respectively named file.

### Filter

This class is an API for filtering the entities and supports the following operations:

* `matches(value: string, negate?: boolean)` - field is an exact match
* `includes(values: string[], negate?: boolean)` - field includes at least one value
* `regex(value: string, negate?: boolean)` - matches Regular Expression
* `exists(negate?: boolean)` - field exists
* `greaterThan(value: number, orEquals?: boolean)` - field is greater than (orEquals)
* `lesserThan(value: number, orEquals?: boolean)` - field is lesser than (orEquals)

### Query
Decision for query to extend `Partial<Pagination>` instead of composition is intentional because of the client 
usage.
It has been evaluated that
```
client.books({ page: 1, offset: 1 });
```

is superior to
```
client.books({
    pagination: { page: 1, offset: 1 }
});
```

