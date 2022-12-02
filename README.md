# Charly-SDK(The Lord of the Rings SDK) User Guide

Thanks for your visiting our SDK.

Do you love The Lord of the Rings? Great, how about making it easy for developers to consume information about the trilogy?

This is a SDK for an existing Lord of the Rings API.

You can find the public [Lord of the Rings API](https://the-one-api.dev) and this is a [Documenatation](https://the-one-api.dev/documentation) for that

## Installation

To run SDK, use:

```bash
npm install charly-sdk # or yarn add charly-sdk
```

## Usage

```bash
import sdk from 'charly-sdk';
const client = new sdk('YOUR_ACCESS_TOKEN');
...
   const books = await client.books();
   const book = await client.book('book_id');
...
```

You can get your access token after login to api server. This is a [link](https://the-one-api.dev/login).

### Services

- Books
- Chapters
- Movies
- Quotes
- Characters

### Pagination, Sorting and Filtering

```bash
client.books({
    page: 1,
    limit: 10, 
    sort: { by: 'name', direction: 'asc' },
    filters: [
        client.filter('name')
            .matches('The Return Of The King')
    ]
});
```

## Available functions

- `books()`

- `book(book_id)`

- `bookChapters(book_id)`

- `movies()`

- `movie(movie_id)`

- `movieQuotes(movie_id)`

- `characters()`

- `character(character_id)`

- `characterQuotes(character_id)`

- `quotes()`

- `quote(quote_id)`

- `chapters()`

- `chapter(chapter_id)`

- `filter(field)`
